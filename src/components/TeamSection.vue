<template>
  <section id="team" class="team-section">
    <div class="container">
      <h2 class="section-title">Meet Our Team</h2>

      <div class="team-grid">
        <div 
          class="team-card"
          v-for="member in teamMembers"
          :key="member.name"
        >
          <div class="team-image-wrapper">
            <img :src="member.image" :alt="member.name" class="team-image" />
          </div>

          <h3 class="team-name">{{ member.name }}</h3>
          <p class="team-designation">{{ member.designation }}</p>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="team-cta">
        <a href="https://forms.gle/Ef26wEdynNkF68Bv8" class="btn btn-primary btn-large" target="_blank">Click, to be a Founding User!</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const teamMembers = [
  { name: "Bagyer GIO",   image: "/images/team/Giovanni.jpg", designation: "From the world to your journey -- I create experiences that free your time and your mind." },
  { name: "Bagyer Paolo",   image: "/images/team/paolo.jpg", designation: " Behind every click, I’m there making sure it works flawlessly" },
  { name: "Bagyer Suhasini", image: "/images/team/suhasini.jpg", designation: "I notice the details before they happen. Your bag is safe with me" },
  { name: "Bagyer Shalem",  image: "/images/team/shalem.jpg", designation: "I'm the fresh energy on the ground — when you book, I move" },
]
</script>

<style scoped>
/* SECTION */
.team-section {
  padding: 6rem 0;
  background:rgb(70, 70, 70);
}

.section-title {
  text-align: center;
  font-size: 2.75rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color:rgb(67 245 186);
}

/* GRID */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
}

/* CARD */
.team-card {
  background: rgb(70, 70, 70);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgb(67 245 186);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-card:hover {
  transform: translateY(-6px);
  background-color: rgb(67 245 186);;
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);
  .team-name{
  color: black;
  }
  .team-designation
  {
    color: rgb(70, 70, 70);
  }
}

/* IMAGE */
.team-image-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 1rem;
}

.team-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* NAME */
.team-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: rgb(67 245 186);
  margin-top: 0.5rem;
}


/* DESIGNATION */
.team-designation {
  margin-top: 0.3rem;
  font-size: 1rem;
  font-weight: 500;
  color: black;
}

/* CTA */
.team-cta {
  text-align: center;
  margin-top: 3rem;
}

.btn-large {
  font-size: 1.25rem;
  padding: 1.5rem 3rem;
  min-width: 250px;
  color: rgb(67 245 186);
  box-shadow: 0 4px 12px rgb(67 245 186);
  background-color: transparent !important;
}

.btn-large:hover
{
  background-color: rgb(67 245 186) !important;
  color: black !important;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.2rem;
  }
}
</style>
