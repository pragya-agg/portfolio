"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRouter = void 0;
const express_1 = __importDefault(require("express"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const Contact_1 = require("../models/Contact");
const Analytics_1 = require("../models/Analytics");
exports.contactRouter = express_1.default.Router();
// Email transporter setup
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
    }
});
// Submit contact form
exports.contactRouter.post('/', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        // Validate required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }
        // Save to database
        const contact = new Contact_1.Contact({ name, email, subject, message });
        await contact.save();
        // Track analytics
        const analytics = new Analytics_1.Analytics({
            event: 'contact_submit',
            userAgent: req.get('User-Agent'),
            ip: req.ip
        });
        await analytics.save();
        // Send email notification (if configured)
        if (process.env.EMAIL_USER && process.env.EMAIL_APP_PASSWORD) {
            try {
                await transporter.sendMail({
                    from: process.env.EMAIL_USER,
                    to: process.env.NOTIFICATION_EMAIL || process.env.EMAIL_USER,
                    subject: `Portfolio Contact: ${subject}`,
                    html: `
            <h3>New Portfolio Contact</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `
                });
            }
            catch (emailError) {
                console.error('Email sending failed:', emailError);
                // Don't fail the request if email fails
            }
        }
        res.json({
            success: true,
            message: 'Message sent successfully!'
        });
    }
    catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again later.'
        });
    }
});
// Get all contacts (admin only - add auth middleware in production)
exports.contactRouter.get('/', async (req, res) => {
    try {
        const contacts = await Contact_1.Contact.find().sort({ createdAt: -1 });
        res.json({ success: true, data: contacts });
    }
    catch (error) {
        console.error('Get contacts error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error'
        });
    }
});
//# sourceMappingURL=contact.js.map