import express from 'express';
import { Analytics } from '../models/Analytics';

export const analyticsRouter = express.Router();

// Track analytics event
analyticsRouter.post('/track', async (req, res) => {
  try {
    const { event, page, projectId } = req.body;

    if (!event) {
      return res.status(400).json({ 
        success: false, 
        message: 'Event type is required' 
      });
    }

    const analytics = new Analytics({
      event,
      page,
      projectId,
      userAgent: req.get('User-Agent'),
      ip: req.ip
    });

    await analytics.save();

    res.json({ success: true });
  } catch (error) {
    console.error('Analytics tracking error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Tracking failed' 
    });
  }
});

// Get analytics data (admin only - add auth middleware in production)
analyticsRouter.get('/stats', async (req, res) => {
  try {
    const stats = await Analytics.aggregate([
      {
        $group: {
          _id: '$event',
          count: { $sum: 1 }
        }
      }
    ]);

    const totalViews = await Analytics.countDocuments({ event: 'page_view' });
    const projectClicks = await Analytics.countDocuments({ event: 'project_click' });
    const resumeDownloads = await Analytics.countDocuments({ event: 'resume_download' });

    res.json({
      success: true,
      data: {
        totalViews,
        projectClicks,
        resumeDownloads,
        eventBreakdown: stats
      }
    });
  } catch (error) {
    console.error('Analytics stats error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch stats' 
    });
  }
});
