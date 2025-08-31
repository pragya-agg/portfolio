"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyticsRouter = void 0;
const express_1 = __importDefault(require("express"));
const Analytics_1 = require("../models/Analytics");
exports.analyticsRouter = express_1.default.Router();
// Track analytics event
exports.analyticsRouter.post('/track', async (req, res) => {
    try {
        const { event, page, projectId } = req.body;
        if (!event) {
            return res.status(400).json({
                success: false,
                message: 'Event type is required'
            });
        }
        const analytics = new Analytics_1.Analytics({
            event,
            page,
            projectId,
            userAgent: req.get('User-Agent'),
            ip: req.ip
        });
        await analytics.save();
        res.json({ success: true });
    }
    catch (error) {
        console.error('Analytics tracking error:', error);
        res.status(500).json({
            success: false,
            message: 'Tracking failed'
        });
    }
});
// Get analytics data (admin only - add auth middleware in production)
exports.analyticsRouter.get('/stats', async (req, res) => {
    try {
        const stats = await Analytics_1.Analytics.aggregate([
            {
                $group: {
                    _id: '$event',
                    count: { $sum: 1 }
                }
            }
        ]);
        const totalViews = await Analytics_1.Analytics.countDocuments({ event: 'page_view' });
        const projectClicks = await Analytics_1.Analytics.countDocuments({ event: 'project_click' });
        const resumeDownloads = await Analytics_1.Analytics.countDocuments({ event: 'resume_download' });
        res.json({
            success: true,
            data: {
                totalViews,
                projectClicks,
                resumeDownloads,
                eventBreakdown: stats
            }
        });
    }
    catch (error) {
        console.error('Analytics stats error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch stats'
        });
    }
});
//# sourceMappingURL=analytics.js.map