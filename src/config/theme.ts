/**
 * BagYO Theme Configuration
 * 
 * This file contains all customizable colors, images, and assets for the BagYO landing page.
 * 
 * HOW TO EDIT:
 * 1. COLORS: Change the hex color values below to update the site's color scheme
 * 2. IMAGES: Replace the image paths with your own images (place images in /public/assets/)
 * 3. LOGO: Update the logo path to use your custom logo
 * 4. ICONS: Update icon paths for features and steps
 * 
 * All components automatically use these values, so changes here update the entire site.
 */

export const theme = {
  // BRAND COLORS - Edit these to change the site's color scheme
  colors: {
    primary: "#2F8F2F",      // Dark green - used for main elements, buttons, headers
    secondary: "#56C56F",    // Medium green - used for accents, hover states
    accent: "#A7EFA8",       // Light green - used for backgrounds, highlights
    text: "#1A1A1A",         // Main text color
    textLight: "#666666",    // Secondary text color
    background: "#FFFFFF",   // Page background
    darkBg: "#1A3A1A",       // Dark green background for footer/sections
    grey:" rgb(70, 70, 70)",
    lightgreen:"rgb(67 245 186)"
  },

  // IMAGES - Replace these paths with your own images
  // Place your images in the /public/assets/ folder
  images: {
    logo: "/assets/Logo.png",           // BagYO logo (used in navbar and footer)
    heroImage: "/images/HeroImage.jpg",      // Main hero section background image
    
    // Partner section images
    partnerImages: {
      travel: "/images/Travel.jpg",     // Travel agencies card image
      storage: "/images/Storage.jpg",   // Storage partners card image
      bagyer: "/assets/bagyer.jpg",     // BagYers card image
    },
  },

  // FEATURE ICONS - Icons for the "What is BagYO?" section
  // You can use emoji, SVG paths, or image URLs
  featureIcons: {
    verified: '/images/icons/verified.svg',           // Verified BagYer icon
    secure: '/images/icons/secure.png',            // Secure Storage icon
    idChecked: "/images/icons/id-verified.jpg",         // ID Checked icon
    tracking: "/images/icons/tracking.jpg",          // Tracking Included icon
  },

  // HOW IT WORKS STEP ICONS - Icons for the process steps
  stepIcons: {
    book: "📱",              // Book your BagYer
    dropoff: "🎒",           // Drop-off / Pick-up
    track: "🗺️",             // Track your bag
    explore: "🌍",           // Explore freely
  },

  // PARTNER TYPE ICONS
  partnerIcons: {
    travel: "✈️",            // Travel Agencies
    storage: "🏢",           // Storage Partners
    bagyer: "🚶",            // BagYers
  },

  // ANIMATION SETTINGS - Adjust animation speeds and easing
  animations: {
    duration: "0.6s",        // Default animation duration
    easing: "ease-out",      // Default easing function
    hoverLift: "8px",        // How much cards lift on hover
  },

  // TYPOGRAPHY - Font settings (you can link custom fonts in index.html)
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    headingWeight: "700",
    bodyWeight: "400",
  },
}

// Export individual color values for easier access
export const colors = theme.colors
export const images = theme.images
export const icons = {
  ...theme.featureIcons,
  ...theme.stepIcons,
  ...theme.partnerIcons,
}