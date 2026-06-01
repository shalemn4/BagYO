<template>
  <section id="home" class="hero-section">

    <div class="hero-bg-image">

      <!-- WHITE CARD -->
      <div class="hero-card">
        <h1 class="hero-title">
          Find Trusted Lugguage sitters for your trip!
        </h1>

        <p class="hero-subtitle">
          <span class="highlight">
            The first urban bag sitting & parking ecosystem
          </span>
        </p>

        <a href="https://forms.gle/Ef26wEdynNkF68Bv8" class="hero-btn" target="_blank">Click, to be a Founding User!</a>
      </div>

      <!-- ARROW -->
      <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
      </div>

    </div>

  </section>
</template>


<style scoped>

/* SECTION */
.hero-section {
  width: 100%;
  padding-top: 50px;
}

/* ================================
   BACKGROUND IMAGE + GREY MASK
================================== */
.hero-bg-image {
  width: 100%;
  min-height: 650px;
  background-image: url('/images/HeroImage.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 70px;
  padding-bottom: 150px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  box-shadow: 0 25px 80px rgba(0,0,0,0.25);

  position: relative; /* REQUIRED */
  z-index: 0;
}

/* MASK only dims background image */
.hero-bg-image::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.35); /* GREY DIM */
  z-index: 0;
  pointer-events: none; /* allows clicks */
}

/* ================================
   WHITE CARD (TOP OF MASK)
================================== */
.hero-card {
  background: rgba(70, 70, 70, 0.719);
  width: 55%;
  max-width: 650px;
  margin-top:130px;
  padding: 45px 40px;
  border-radius: 22px;
  box-shadow: 0px 5px 10px rgb(67 245 186);
  padding-bottom: 80px;
  position: relative; /* ABOVE MASK */
  z-index: 2;
}

/* TITLE */
.hero-title {
  font-size: 48px;
  font-weight: 800;
  line-height: 1.2;
  color: rgb(67 245 186);
  margin-bottom: 40px;
}

/* YELLOW TAG */
.hero-subtitle .highlight {
  background: #ffeb3b;
  border: 2px solid black;
  padding: 6px 10px;
  border-radius: 6px;
  font-weight: 700;
}

/* BUTTON */
.hero-btn {
  margin-top: 10px;
  display: inline-block;
  padding: 15px 24px;
  border-radius: 12px;
  border: 2px solid rgb(67 245 186);
  color: rgb(67 245 186);
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
}
.hero-btn:hover {
  background: rgb(67 245 186);
  color: black;
}

/* ================================
   ARROW BELOW CARD
================================== */
.scroll-indicator {
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  z-index: 2; /* ABOVE MASK */
}

.scroll-arrow {
  width: 28px;
  height: 28px;
  border-left: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(-45deg);
}

/* BOUNCE ANIMATION */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
  40% { transform: translateX(-50%) translateY(-12px); }
  60% { transform: translateX(-50%) translateY(-6px); }
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .hero-card {
    width: 100%;
  }
}

@media (max-width: 540px) {
  .hero-bg-image {
    padding: 25px;
    padding-bottom: 120px;
  }
  
  .hero-title {
    font-size: 34px;
  }

  .hero-card {
    padding: 25px;
  }
}

</style>
