import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema({
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

export const Analytics = mongoose.model('Analytics', analyticsSchema);
