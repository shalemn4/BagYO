<!--
  Partners Section Component
  
  Showcases three types of partners: Travel Agencies, Storage Partners, and BagYers.
  
  HOW TO EDIT:
  1. PARTNER CARDS: Edit the partners array in script section
  2. PARTNER IMAGES: Update image paths in theme.ts (partnerImages)
  3. DESCRIPTIONS: Edit text in the partners array
  4. COLORS: Modify in theme.ts
  
  FEATURES:
  - 3 partner type cards
  - Images configurable via theme.ts
  - Hover effects and animations
-->

<template>
  <section id="partners" class="partners-section">
    <div class="container">
      <h2 class="section-title fade-in">What BagYO Is For?</h2>
      <p class="section-subtitle fade-in stagger-1">
        Join our ecosystem and unlock new opportunities
      </p>

      <!-- Partners Grid -->
      <div class="partners-grid">
        <div 
          v-for="(partner, index) in partners" 
          :key="partner.title"
          class="partner-card card-hover fade-in"
          :class="`stagger-${index + 2}`"
        >

          <!-- Black background + IMAGE (no icons) -->
        <div 
  class="partner-image-box"
  :style="{ backgroundImage: `url(${partner.image})` }"
></div>

          <div class="partner-content">
            <h3 class="partner-title">{{ partner.title }}</h3>
            <p class="partner-description">{{ partner.description }}</p>

            <a href="" class="partner-link">
              Learn More →
            </a>
          </div>
        </div>
      </div>

      <!-- CTA Button
      <div class="partners-cta fade-in stagger-5">
        <a href="" class="btn btn-primary btn-large">Join US!</a>
      </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { theme } from '../../src/config/theme'

const partners = [
  {
    title: 'Travel Agencies',
    description:
      'Partner with BagYO to offer your clients a seamless travel experience. Add value to your packages with our bag sitting services.',
    image: '/images/travel.png',
  },
  {
    title: 'Storage Partners',
    description:
      'Monetize your extra space by becoming a certified BagYO storage partner. Secure, verified, and profitable.',
    image: '/images/storage.png',
  },
  {
    title: 'BagYers',
    description:
      'Earn money by helping travelers. Become a certified BagYer and be part of the urban mobility revolution.',
    image: '/images/bagyer.png',
  },
]
</script>

<style scoped>
/* Section Styles */
.partners-section {
  background-color: v-bind('theme.colors.lightgreen');
  padding: 6rem 0;
}

.section-title {
  text-align: center;
  color: v-bind('theme.colors.darkBg');
  margin-bottom: 1rem;
  font-size: 2.75rem;
}

.section-subtitle {
  text-align: center;
  color: v-bind('theme.colors.darkBg');
  font-size: 1.25rem;
  margin-bottom: 4rem;
}

/* Partners Grid */
.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto 3rem;
}

.partner-card {
  background-color:rgb(67 245 186);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 30px  rgb(70 70 70);
  display: flex;
  flex-direction: column;
}

.partner-card:hover
{
  background-color: rgb(70 70 70);
  .partner-title
  {
    color: rgb(67 245 186);
  }
  .partner-description
  {
    color: rgb(67 245 186);
  }
  .partner-link
  {
    color: rgb(67 245 186);
  }
  .partner-link:hover {
  color: v-bind('theme.colors.lightgreen');
  transform: translateX(5px);
}
}

/* Image Box */
.partner-icon-wrapper {
  background: black;
  padding: 3rem 2rem;
  text-align: center;
}

.partner-image-box {
  width: 100%;
  height: 200px; /* adjust height if you want */
  background-size: 100%;       /* fills entire area */
  background-repeat: no-repeat;
  background-position: center; /* centers important content */
  background-color: rgb(67 245 186);     /* fallback color */
}


/* Content */
.partner-content {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.partner-title {
  color: v-bind('theme.colors.darkBg');
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.partner-description {
  color: v-bind('theme.colors.darkBg');
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

.partner-link {
  color: v-bind('theme.colors.darkBg');
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}


/* Responsive */
@media (max-width: 768px) {
  .partners-section {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2.25rem;
  }

  .section-subtitle {
    font-size: 1.1rem;
  }

  .partners-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .partner-icon-wrapper {
    padding: 2.5rem 2rem;
  }

  .partner-image {
    width: 110px;
    height: 110px;
  }
}
</style>
