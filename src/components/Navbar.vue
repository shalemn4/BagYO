<!--
  Navbar Component
  
  
  Edits which are left?:
  1. LOGO: Change the logo path in theme.ts
  2. MENU ITEMS: Edit the navItems array in the script section
  3. COLORS: Modify colors in theme.ts
  4. CTA LINKS: Add href values to the ctaButtons array when ready
-->

<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="nav-content">
        <!-- Logo -->
        <div class="nav-logo">
          <a href="#home" class="logo-wrapper">
            <!-- <img src="C:\shalem\Projects\BagYO!\bagyolandingpage\src\assets\Logo.png" alt="BagYO Logo" class="logo-image"> -->
            <span class="logo-text">BagYO</span>
          </a>
        </div>

        <!-- Desktop Menu -->
        <ul class="nav-menu" :class="{ 'active': isMobileMenuOpen }">
          <li v-for="item in navItems" :key="item.name">
            <a :href="item.href" @click="closeMobileMenu">{{ item.name }}</a>
          </li>
        </ul>

        <!-- CTA Buttons-->
        <div class="nav-cta" :class="{ 'active': isMobileMenuOpen }">
          <a 
            v-for="button in ctaButtons" 
            :key="button.text"
            :href="button.href" 
            :target="button.target || '_self'"
            :class="button.class"
            @click="closeMobileMenu"
          >
            {{ button.text }}
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { theme } from '../../src/config/theme'

// State
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

// Navigation items
const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'What is BagYO?', href: '#what-is-bagyo' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Partners', href: '#partners' },
  {name: 'Team', href: '#team'},
]

// CTA buttons - ADD GOOGLE FORM LINKS HERE when ready!!
const ctaButtons = [
  { 
    text: 'Click, to be a Founding User!', 
    href: 'https://forms.gle/Ef26wEdynNkF68Bv8', // <!-- Add Google Form link later -->
    class: 'joinus',
    target:'_blank'
  },
  { 
    text: 'Partner With Us', 
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdUeRrmaZ9c0GcTCnle4ZgpJI_89ZIDMl3GX4ChisBPXqaFPw/viewform?usp=sharing&ouid=104840519899536638368', // <!-- Add Google Form link later -->
    class: 'partner',
    target:'_blank' 
  },
]

// Handle scroll event for navbar shadow
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Navbar container - uses theme colors from theme.ts */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgb(70, 70, 70);
  z-index: 1000;
  transition: box-shadow 0.3s ease;
}

.navbar.scrolled {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 0;
}

/* Logo */

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem; /* space between logo and text */
  text-decoration: none;
}

.nav-logo a {
  text-decoration: none;
  font-size: 1.75rem;
  font-weight: 700;
  color: rgb(67 245 186);
  transition: color 0.3s ease;
}

.nav-logo a:hover {
  color: rgb(0, 0, 0);
}

.joinus{
  background-color: transparent;   /* change color */
  color: rgb(67 245 186);
  border: 2px solid rgb(67 245 186);
  padding: 12px 22px;
  border-radius: 10px;
  font-weight: 600;
  transition: 0.3s;
  text-decoration: none;
}

.joinus:hover{
  background-color: rgb(67 245 186);
  color: rgb(0, 0, 0);
  transform: translateY(-2px);
}

.partner
{
  background-color: transparent;   /* change color */
  color: rgb(67 245 186);
  border: 2px solid rgb(67 245 186);
  padding: 12px 22px;
  border-radius: 10px;
  font-weight: 600;
  transition: 0.3s;
  text-decoration: none;
}

.partner:hover{
   background-color: rgb(67 245 186);
  color: rgb(0, 0, 0);
  transform: translateY(-2px);
}

.logo-text {
  display: inline-block;
}

.logo-image{
  height: 70px;
  width: auto;
  transition: transform 0.3s ease;
}

.logo-image:hover{
    transform: scale(1.05);
}

/* Desktop Menu */
.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;
}

.nav-menu li a {
  text-decoration: none;
  color:  rgb(67 245 186);
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-menu li a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: v-bind('theme.colors.text');
  transition: width 0.3s ease;
}

.nav-menu li a:hover {
  color: v-bind('theme.colors.text');
}

.nav-menu li a:hover::after {
  width: 100%;
}

/* CTA Buttons */
.nav-cta {
  display: flex;
  gap: 1rem;
  align-items: center;
  
}

/* Mobile Toggle Button */
.mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-toggle span {
  width: 25px;
  height: 3px;
  background-color: v-bind('theme.colors.primary');
  transition: all 0.3s ease;
  border-radius: 2px;
}

/* Add spacing between Join Us and Partner With Us */
.nav-cta a {
  margin-left: 1rem; /* desktop spacing */
}

/* For mobile, keep buttons separated vertically */
@media (max-width: 768px) {
  .nav-cta a {
    margin-left: 0;
    margin-bottom: 1rem; /* spacing in mobile stack */
  }
}


/* Responsive Styles */
@media (max-width: 1024px) {
  .nav-menu {
    gap: 1.5rem;
  }

  .nav-cta {
    gap: 0.75rem;
  }

  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background-color: v-bind('theme.colors.background');
    flex-direction: column;
    padding: 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .nav-menu.active {
    transform: translateX(0);
  }

  .nav-cta {
    position: fixed;
    top: calc(70px + 200px);
    left: 0;
    right: 0;
    background-color: v-bind('theme.colors.background');
    flex-direction: column;
    padding: 1rem 2rem 2rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .nav-cta.active {
    transform: translateX(0);
  }

  .nav-cta .btn {
    width: 100%;
    text-align: center;
  }
}
</style>

