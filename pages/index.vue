<template>
  <div class="home">
    <section class="hero">
      <h1 class="hero-title">🍚 Welcome to Jollof Secrets</h1>
      <p class="hero-subtitle">Master the Art of Perfect Jollof Rice</p>
      <p class="hero-description">
        Discover authentic recipes, cooking techniques, and secrets to making the perfect 
        jollof rice every time. From traditional Nigerian and Ghanaian styles to modern 
        party jollof variations!
      </p>
      <div class="hero-buttons">
        <NuxtLink to="/recipes" class="btn btn-primary">Explore Recipes</NuxtLink>
        <NuxtLink to="/tips" class="btn btn-secondary">Cooking Tips</NuxtLink>
      </div>
    </section>

    <section class="featured-section">
      <h2>🔥 Featured Recipes</h2>
      <div class="recipe-cards">
        <div class="recipe-card">
          <div class="recipe-image">🍛</div>
          <h3>Classic Nigerian Jollof</h3>
          <p>The authentic Nigerian-style jollof rice with perfectly smoky flavor and rich tomato base.</p>
          <NuxtLink to="/recipes" class="recipe-link">View Recipe →</NuxtLink>
        </div>

        <div class="recipe-card">
          <div class="recipe-image">🌶️</div>
          <h3>Spicy Party Jollof</h3>
          <p>Turn up the heat with this party-style jollof that's perfect for celebrations and gatherings.</p>
          <NuxtLink to="/recipes" class="recipe-link">View Recipe →</NuxtLink>
        </div>

        <div class="recipe-card">
          <div class="recipe-image">🥘</div>
          <h3>Ghanaian Jollof</h3>
          <p>Experience the Ghanaian variation with its unique blend of spices and cooking technique.</p>
          <NuxtLink to="/recipes" class="recipe-link">View Recipe →</NuxtLink>
        </div>
      </div>
    </section>

    <section class="why-section">
      <h2>Why Learn From Jollof Secrets?</h2>
      <div class="reasons">
        <div class="reason-item">
          <span class="reason-icon">👩‍🍳</span>
          <h3>Authentic Techniques</h3>
          <p>Learn traditional methods passed down through generations</p>
        </div>
        <div class="reason-item">
          <span class="reason-icon">📝</span>
          <h3>Easy Instructions</h3>
          <p>Step-by-step guides that anyone can follow</p>
        </div>
        <div class="reason-item">
          <span class="reason-icon">✨</span>
          <h3>Pro Tips</h3>
          <p>Insider secrets to make your jollof stand out</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  padding: 2rem 0;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  color: white;
  border-radius: 10px;
  margin-bottom: 3rem;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.hero-description {
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.3s;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: white;
  color: #ff6b6b;
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.featured-section {
  margin: 4rem 0;
}

.featured-section h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.recipe-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.recipe-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  text-align: center;
}

.recipe-card:hover {
  transform: translateY(-5px);
}

.recipe-image {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.recipe-card h3 {
  color: #ff6b6b;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.recipe-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.recipe-link {
  color: #ff6b6b;
  text-decoration: none;
  font-weight: bold;
}

.recipe-link:hover {
  text-decoration: underline;
}

.why-section {
  margin: 4rem 0;
  padding: 3rem 2rem;
  background: #fff5f5;
  border-radius: 10px;
}

.why-section h2 {
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 3rem;
}

.reasons {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.reason-item {
  text-align: center;
}

.reason-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
}

.reason-item h3 {
  color: #ff6b6b;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.reason-item p {
  color: #666;
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .hero {
    padding: 2rem 1rem;
  }
}
</style>