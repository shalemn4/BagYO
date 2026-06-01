<!--
  Home Page
  
  Main landing page that combines all components.
  
  This page imports and displays all sections in order:
  - Navbar (sticky at top)
  - Hero Section
  - What is BagYO?
  - How It Works
  - Partners Section
  - Footer
-->

<template>
  <div class="home-page">
    <Navbar />
    <HeroSection />
    <WhatIsBagYO />
    <HowItWorks />
    <PartnersSection />
    <teamSection />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import HeroSection from '../components/HeroSection.vue'
import WhatIsBagYO from '../components/WhatIsBagYO.vue'
import HowItWorks from '../components/HowItWorks.vue'
import PartnersSection from '../components/PartnersSection.vue'
import teamSection from '../components/TeamSection.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}
</style>