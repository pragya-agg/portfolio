# Profile Photo Instructions

To add your personal photo to the About section:

## Step 1: Add Your Photo
1. Take or select a high-quality photo of yourself (preferably professional/headshot style)
2. Resize it to 400x400 pixels (square format works best)
3. Save it as `profile-photo.jpg` 
4. Place it in: `frontend/public/images/profile-photo.jpg`

## Step 2: Photo Guidelines
- **Format**: JPG, PNG, or WebP
- **Size**: 400x400px recommended (square aspect ratio)
- **Quality**: High resolution, clear and professional
- **Background**: Professional or plain background works best
- **Lighting**: Well-lit, clear visibility of face

## Current Setup
- The component will automatically display your photo when you add `profile-photo.jpg`
- If the photo doesn't load, it falls back to a professional animated placeholder
- The image is optimized using Next.js Image component for best performance

## Alternative Placeholder Names
If you prefer a different filename, update line in `about-hero.tsx`:
```tsx
src="/images/your-photo-name.jpg"
```

The placeholder currently shows a professional avatar with your name until you add your actual photo.
