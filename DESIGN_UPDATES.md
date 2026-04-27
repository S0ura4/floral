# Lily & Co Nepal - Design Updates

## Color Palette Update
- **Primary Brand Color**: Forest Green (#0d3a2e) - Background
- **Secondary/Accent Color**: Gold (#c9a961) - Headings, CTAs, highlights
- **Secondary Green**: #2a6854 - Cards, secondary backgrounds
- **Text Colors**: Cream (#f5f1ed) for foreground, 70-75% opacity for secondary text

## Typography
- **Serif Font**: Cormorant Garamond - Used for headings (h1, h2, h3), luxury elegant feel
- **Sans-serif Font**: Jost - Used for body text and navigation, clean and modern
- Both fonts imported from Google Fonts

## Custom Features Implemented

### 1. Custom Cursor
- Elegant custom cursor with gold dot and ring for regular pointer
- Interactive cursor with crosshair for links and buttons
- Implemented via SVG-based custom cursor in globals.css

### 2. Scroll-Triggered Animations
- Created `ScrollAnimationProvider` component for global scroll animation handling
- Multiple animation classes:
  - `.scroll-fade-in` - Fade in effect on scroll
  - `.scroll-slide-in-left` - Slide from left
  - `.scroll-slide-in-right` - Slide from right
  - `.scroll-scale-in` - Scale up from smaller
- Uses Intersection Observer API for performance
- Smooth easing (0.8s ease-out) on all animations

### 3. Component Updates
All components updated with:
- Forest green and gold color scheme
- Serif typography for headings (Cormorant Garamond)
- Scroll-triggered animations
- Enhanced text contrast with proper opacity levels
- Updated contact information for Kathmandu, Nepal location

## Location & Contact Information
- **Location**: Thamel, Kathmandu, Nepal
- **Email**: hello@lilyandco.com
- **Phone**: +977 1 423 4567 (mock number)
- **Website**: Ready to be updated with your real URL

## File Structure
```
app/
  ├── globals.css (Updated with new color system, animations, custom cursor)
  ├── layout.tsx (Updated with dark theme, metadata)
  └── page.tsx (Updated with ScrollAnimationProvider)
components/
  ├── Header.tsx (Updated logo, navigation styling)
  ├── Hero.tsx (Updated overlay, typography)
  ├── FeaturedCollection.tsx (Updated with scroll animations)
  ├── SignatureHighlight.tsx (Updated with scroll animations)
  ├── BrandStory.tsx (Updated with scroll animations and values grid)
  ├── Testimonials.tsx (Updated styling and animations)
  ├── Footer.tsx (Updated logo, contact info)
  └── ScrollAnimationProvider.tsx (NEW - Handles scroll animations)
hooks/
  └── useScrollAnimation.ts (Optional hook for individual scroll animations)
public/
  ├── logo.png (Your Lily & Co logo)
  ├── ethereal-ring.jpg
  ├── noir-necklace.jpg
  ├── diamond-studs.jpg
  └── collection-hero.jpg
```

## Next Steps When Going Live
1. Replace mock phone number with your actual business phone
2. Update email address if different
3. Add your website URL in footer
4. Update social media links (Instagram, Facebook, Pinterest)
5. Replace placeholder product images with actual jewelry photos
6. Customize product descriptions and pricing
7. Add real customer testimonials

## Animation Performance
- Uses Intersection Observer API for optimal performance
- Animations trigger only when elements come into view
- No animation delays - all animations are scroll-triggered
- Smooth 0.8s ease-out timing across all animations

## Responsive Design
- Mobile-first approach with Tailwind CSS
- Fully responsive grid layouts
- Touch-friendly navigation and buttons
- Mobile menu with smooth animations

---

**Design System Status**: ✅ Complete
**Logo Integration**: ✅ Complete  
**Scroll Animations**: ✅ Complete
**Custom Cursor**: ✅ Complete
**Color Scheme**: ✅ Forest Green & Gold
**Typography**: ✅ Cormorant Garamond + Jost
