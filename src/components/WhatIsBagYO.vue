<!--
  What is BagYO Component
  
  Description section with feature icons.
  
  HOW TO EDIT:
  1. DESCRIPTION TEXT: Edit the text in the template below
  2. FEATURE ICONS: Update icons in theme.ts (featureIcons)
  3. FEATURE TITLES: Edit the features array in script section
  4. COLORS: Modify in theme.ts
  
  FEATURES:
  - Main description text from PDF
  - 4 feature icons with titles
  - Fade-in animations on scroll
-->

<template>
  <section id="what-is-bagyo" class="what-section">
    <div class="container">
      <h2 class="section-title fade-in">What is BagYO?</h2>
      
      <!-- Main Description - EDIT THIS text as needed -->
      <div class="description-content fade-in stagger-1">
        <p class="main-description">
          BagYO is the world's first Urban Bag Sitting & Parking Ecosystem. 
          It solves the most universal friction point in travel: the physical and mental 
          burden of luggage. Through certified BagYers, trusted storage partners, and travel 
          industry alliances, BagYO frees travelers so they can move light, explore freely, 
          and enjoy the city without weight or stress.
        </p>
      </div>

      <!-- Feature Icons -->
      <div class="features-grid">
        <div 
          v-for="(feature, index) in features" 
          :key="feature.title"
          class="feature-card card-hover fade-in"
          :class="`stagger-${index + 2}`"
        >
          <div class="feature-icon">
        <img :src="feature.icon" alt="icon" />
         </div>

          <h3 class="feature-title">{{ feature.title }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { theme } from '../../src/config/theme'

// Features with icons - EDIT THESE to change feature titles
// Icons are pulled from theme.ts and can be changed there
const features = [
  {
    icon: theme.featureIcons.verified,
    title: 'Verified BagYer',
  },
  {
    icon: theme.featureIcons.secure,
    title: 'Secure Storage',
  },
  {
    icon: theme.featureIcons.idChecked,
    title: 'ID Checked',
  },
  {
    icon: theme.featureIcons.tracking,
    title: 'Tracking Included',
  },
]
</script>

<style scoped>
/* Section Styles */
.what-section {
  background-color: v-bind('theme.colors.lightgreen');
  padding: 6rem 0;
}

.feature-icon img {
  width: 50px;
  height: 50px;
  object-fit: contain;
}


.section-title {
  margin-top: none;
  text-align: center;
  color: v-bind('theme.colors.darkBg');
  margin-bottom: 3rem;
  font-size: 2.75rem;
}

/* Description */
.description-content {
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
}

.main-description {
  font-size: 1.25rem;
  line-height: 1.8;
  color: v-bind('theme.colors.darkBg');
  margin-bottom: 0;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2em;
  max-width: 100%;
  margin: 0 auto;
}

.feature-card {
  background-color: transparent;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 15px 30px  rgb(70 70 70);
}

.feature-card:hover{
  .feature-title{
    color:rgb(67 245 186);
  }
  background-color: rgb(70, 70, 70);
}
.feature-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  display: inline-block;
}

.feature-title {
  color: v-bind('theme.colors.darkBg');
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
}



/* Responsive Styles */
@media (max-width: 768px) {
  .what-section {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2.25rem;
  }

  .main-description {
    font-size: 1.1rem;
  }

  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
  }

  .feature-card {
    padding: 2rem 1.5rem;
  }

  .feature-icon {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>