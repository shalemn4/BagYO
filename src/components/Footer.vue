<!--
  Footer Component
  
  Site footer with branding, links, and social media.
  
  HOW TO EDIT:
  1. FOOTER LINKS: Edit the footerLinks array in script section
  2. SOCIAL MEDIA: Edit the socialLinks array (add real URLs when ready)
  3. COPYRIGHT: Edit the copyright text in template
  4. COLORS: Modify in theme.ts
  
  FEATURES:
  - BagYO branding
  - Quick links
  - Social media icons
  - Copyright information
-->

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Brand Section -->
        <div class="footer-brand">
          <h3 class="footer-logo">BagYO</h3>
          <p class="footer-tagline">Your Freedom, Cared!</p>
          <p class="footer-description">
            The world's first Urban Bag Sitting & Parking Ecosystem.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="footer-links">
          <h4 class="footer-heading">Quick Links</h4>
          <ul>
            <li v-for="link in footerLinks" :key="link.name">
              <a :href="link.href" target="_blank">{{ link.name }}</a>
            </li>
          </ul>
        </div>

        <!-- Social Media -->
        <div class="footer-social">
          <h4 class="footer-heading">Connect With Us</h4>
          <div class="social-icons">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.href" 
              :aria-label="social.name"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img :src="social.icon" :alt="social.name" class="social-img" />
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="footer-bottom">
        <p class="copyright">
          © {{ currentYear }} BagYO. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { theme } from '../../src/config/theme'

// Current year for copyright
const currentYear = ref(new Date().getFullYear())

// Footer navigation links - EDIT THESE to change footer links
const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'What is BagYO?', href: '#what-is-bagyo' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Partners', href: '#partners' },
  { name: 'Team', href: '#team' },
  { name: 'Join Us', href: 'https://forms.gle/Ef26wEdynNkF68Bv8' }, // Add link later
  { name: 'Partner With Us', href: 'https://docs.google.com/forms/d/e/1FAIpQLSdUeRrmaZ9c0GcTCnle4ZgpJI_89ZIDMl3GX4ChisBPXqaFPw/viewform?usp=sharing&ouid=104840519899536638368' }, // Add link later
]

// Social media links - ADD REAL URLs when ready
const socialLinks = [
  { name: 'Facebook', icon: 'public/images/icons/facebook.svg', href: '#' }, // Replace with real URL
  { name: 'Twitter', icon: 'public/images/icons/twitter.svg', href: '#' }, // Replace with real URL
  { name: 'Instagram', icon: 'public/images/icons/instagram.svg', href: '#' }, // Replace with real URL
  { name: 'LinkedIn', icon: 'public/images/icons/linkedin.svg', href: '#' }, // Replace with real URL
]
</script>

<style scoped>
/* Footer Styles */
.footer {
  background-color: rgb(67 245 186);
  color: grey;
  padding: 4rem 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

/* Brand Section */
.footer-brand {
  max-width: 350px;
}

.footer-logo {
  font-size: 2rem;
  font-weight: 700;
  color: v-bind('theme.colors.darkBg');
  margin-bottom: 0.5rem;
}

.footer-tagline {
  font-size: 1.1rem;
  font-weight: 600;
  color: v-bind('theme.colors.grey');
  margin-bottom: 0.5rem;
}

.footer-description {
  color:rgb(70, 70, 70);
  line-height: 1.6;
}

/* Links Section */
.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color:black;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: v-bind('theme.colors.grey');
}

/* Social Media */
.footer-heading {
  color: v-bind('theme.colors.darkBg');
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.social-icons a {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-icons a:hover {
  transform: translateY(-3px);
}

/* Footer Bottom */
.footer-bottom {
  border-top: 3px solid rgba(0, 0, 0, 0.1);
  padding-top:1rem;
  text-align: center;
}

.copyright {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
  margin: 0;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .footer {
    padding: 3rem 0 1.5rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-brand {
    max-width: 100%;
  }

  .social-icons {
    justify-content: flex-start;
  }
}
</style>