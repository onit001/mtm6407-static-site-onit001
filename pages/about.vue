<template>
  <div class="about">
    <section class="about-hero">
      <h1>About Jollof Secrets</h1>
      <p class="subtitle">My journey to mastering the perfect jollof rice</p>
    </section>

    <section class="about-content">
      <div class="about-section">
        <h2>👋 Hello, Food Lover!</h2>
        <p>
          Welcome to Jollof Secrets! My name is Onitiri Ibraheem, and I'm passionate about one of 
          West Africa's most beloved dishes jollof rice. This blog is dedicated to sharing 
          authentic recipes, cooking techniques, and the cultural significance of this amazing dish.
        </p>
        <p>
          Growing up, jollof rice was always the centerpiece of every celebration from weddings 
          to birthdays, family gatherings to festivals. I learned that making perfect jollof rice 
          is both an art and a science, and I'm here to share everything I've learned along the way.
        </p>
      </div>

      <div class="about-section">
        <h2>🍚 My Jollof Journey</h2>
        <p>
          My love for jollof rice began in my mother's kitchen, watching her transform simple 
          ingredients into something magical. The aroma of tomatoes, peppers, and spices filling 
          the house, the anticipation of that first taste these are memories I treasure.
        </p>
        <p>
          Over the years, I've experimented with different recipes, learned from family members, 
          friends, and even sparked friendly debates about Nigerian vs Ghanaian jollof! Each 
          experience has taught me something new, and now I want to share these lessons with you.
        </p>
      </div>

      <div class="about-section">
        <h2>🎯 What You'll Find Here</h2>
        <ul class="features-list">
          <li>Authentic jollof rice recipes from different West African regions</li>
          <li>Step-by-step cooking guides with detailed instructions</li>
          <li>Tips and tricks for getting that perfect smoky flavor</li>
          <li>Ingredient guides and substitutions</li>
          <li>Common mistakes and how to avoid them</li>
          <li>Stories and cultural insights about jollof rice</li>
        </ul>
      </div>

      <div class="about-section">
        <h2>💭 My Cooking Philosophy</h2>
        <p>
          I believe that great jollof rice comes from understanding the fundamentals while adding 
          your own personal touch. There's no single "correct" way to make jollof whether you 
          prefer the Nigerian style with its smoky undertones or the Ghanaian method with basmati 
          rice, what matters is the love and care you put into cooking.
        </p>
        <p>
          My goal is to make jollof rice accessible to everyone from beginners trying it for 
          the first time to experienced cooks looking to perfect their technique. Every recipe 
          here is tested, tasted, and adjusted until it's just right.
        </p>
      </div>

      <div class="about-section cta-section">
        <h2>🤝 Join the Jollof Community</h2>
        <p>
          Whether you're here to learn, share your own jollof experiences, or settle the great 
          jollof debate, you're welcome! Explore the recipes, try them out, and don't hesitate 
          to reach out with your questions or success stories.
        </p>
        <NuxtLink to="/contact" class="cta-button">Get In Touch</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  max-width: 900px;
  margin: 0 auto;
}

.about-hero {
  text-align: center;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  color: white;
  border-radius: 10px;
  margin-bottom: 3rem;
}

.about-hero h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.about-section {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.about-section h2 {
  color: #ff6b6b;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.about-section p {
  color: #555;
  line-height: 1.8;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  background: #fff5f5;
  border-radius: 5px;
  border-left: 3px solid #ff6b6b;
  color: #555;
  font-size: 1.1rem;
}

.features-list li:before {
  content: "🍴 ";
  margin-right: 0.5rem;
}

.cta-section {
  text-align: center;
  background: linear-gradient(135deg, #fff5f5 0%, #ffe0e0 100%);
}

.cta-button {
  display: inline-block;
  margin-top: 1rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: transform 0.3s;
}

.cta-button:hover {
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
  .about-hero h1 {
    font-size: 2rem;
  }
  
  .about-section {
    padding: 1.5rem;
  }
  
  .about-section h2 {
    font-size: 1.5rem;
  }
}
</style>