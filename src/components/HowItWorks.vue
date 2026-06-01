<!-- FIXED HOW IT WORKS (FULL WIDTH + RESPONSIVE + CLEAN) -->

<template>
  <section id="how-it-works" class="how-it-works-section">

    <!-- Section Heading -->
    <div class="content-center">
      <h2 class="section-title fade-in">How It Works</h2>
      <p class="section-subtitle fade-in stagger-1">
        Getting started with BagYO is simple and secure
      </p>
    </div>

    <!-- Steps -->
    <div class="steps-grid">
      <div 
        v-for="(step, index) in steps" 
        :key="step.title"
        class="step-card card-hover fade-in"
        :class="`stagger-${index + 2}`"
      >
        <div class="step-number">{{ index + 1 }}</div>
        <div class="step-icon">
  <img :src="step.icon" alt="icon" class="step-icon-img" />
</div>


        <h3 class="step-title">{{ step.title }}</h3>
        <p class="step-description">{{ step.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { theme } from '../../src/config/theme'

const steps = [
  {
    icon: '/images/icons/phone.jpg',
    title: 'Book your BagYer',
    description: 'Choose a verified BagYer near your location through our easy-to-use platform.',
  },
  {
    icon: '/images/icons/luggage.png',
    title: 'Drop-off / Pick-up',
    description: 'Meet your BagYer at the agreed location and hand over your luggage securely.',
  },
  {
    icon: 'images/icons/delivery-location.png',
    title: 'Track your bag',
    description: 'Monitor your luggage in real-time with our tracking system for peace of mind.',
  },
  {
    icon: '/images/icons/location.png',
    title: 'Explore freely',
    description: 'Enjoy your day without the burden of carrying heavy bags around the city.',
  },
]
</script>

<style scoped>
/* Full-width section */
.how-it-works-section {
  width: 100vw;
  padding: 6rem 1rem;
  background:v-bind('theme.colors.grey');
}

/* Center headings without container */
.content-center {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem auto;
}

/* Titles */
.section-title {
  color: v-bind('theme.colors.lightgreen');
  font-size: 2.75rem;
  margin-bottom: 0.8rem;
}

.section-subtitle {
  color: v-bind('theme.colors.lightgreen');
  font-size: 1.25rem;
}

/* Steps Grid */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.5rem;
  max-width: 1350px;
  margin: 0 auto;
}

/* Step Card */
.step-card {
  background: rgb(70, 70, 70);
  padding: 2.5rem 2rem;
  border-radius: 16px;
  text-align: center;
  position: relative;
  border: 2px solid transparent;
  box-shadow: 0 4px 12px  rgb(67 245 186);
  transition: 0.3s ease;
}

.step-card:hover {
  border-color: v-bind('theme.colors.lightgreen');
  background-color: rgb(67 245 186);
  .step-title
  {
    color: black;
  }
  .step-description
  {
    color: black;
  }
  .step-number
  {
    background-color: rgb(70, 70, 70);
    color: rgb(67 245 186);
    border: 1px solid rgb(67 245 186);
  }
}

/* Step Number */
.step-number {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: rgb(67 245 186);
  color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
}

/* Icons */
.step-icon {
  font-size: 4rem;
  margin: 1.5rem 0 1rem;
}

.step-icon-img {
  width: 100px;
  height: 100px;
  object-fit: contain;
}

/* Step Title */
.step-title {
  color: v-bind('theme.colors.lightgreen');
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

/* Description */
.step-description {
  color: v-bind('theme.colors.lightgreen');
  line-height: 1.6;
  font-size: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .how-it-works-section {
    padding: 4rem 1rem;
  }
  .section-title {
    font-size: 2.25rem;
  }
  .section-subtitle {
    font-size: 1.1rem;
  }
  .steps-grid {
    gap: 2rem;
  }
  .step-card {
    padding: 2rem 1.5rem;
  }
}
</style>
