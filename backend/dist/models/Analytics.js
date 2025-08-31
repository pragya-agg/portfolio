"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Analytics = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const analyticsSchema = new mongoose_1.default.Schema({
    event: {
        type: String,
        required: true,
        enum: ['page_view', 'project_click', 'resume_download', 'demo_click', 'contact_submit']
    },
    page: String,
    projectId: String,
    userAgent: String,
    ip: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
});
exports.Analytics = mongoose_1.default.model('Analytics', analyticsSchema);
//# sourceMappingURL=Analytics.js.map