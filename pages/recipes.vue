<template>
  <div class="recipes">
    <section class="recipes-hero">
      <h1>Jollof Rice Recipes</h1>
      <p class="subtitle">Explore authentic jollof rice recipes from across West Africa</p>
    </section>

    <section class="recipes-grid">
      <div class="recipe-card">
        <div class="recipe-image">
          <div class="placeholder-image">🍛</div>
        </div>
        <div class="recipe-content">
          <h3>Classic Nigerian Jollof Rice</h3>
          <p class="cook-time">⏱️ 45 minutes | 🍽️ 6 servings</p>
          <p>
            The beloved Nigerian-style jollof rice with its signature smoky flavor. Made with 
            long-grain parboiled rice, rich tomato sauce, and the perfect blend of spices. 
            This recipe includes the secret to achieving that coveted party jollof taste with 
            the crispy bottom layer (socarrat).
          </p>
          <div class="recipe-tags">
            <span class="tag">Nigerian</span>
            <span class="tag">Traditional</span>
            <span class="tag">Smoky</span>
          </div>
        </div>
      </div>

      <div class="recipe-card">
        <div class="recipe-image">
          <div class="placeholder-image">🥘</div>
        </div>
        <div class="recipe-content">
          <h3>Ghanaian Jollof Rice</h3>
          <p class="cook-time">⏱️ 50 minutes | 🍽️ 6 servings</p>
          <p>
            The Ghanaian version featuring basmati rice and a unique cooking technique that 
            results in perfectly separated grains. This recipe uses fresh ginger, aromatic spices, 
            and the traditional Ghanaian method of steaming the rice to perfection. A true taste 
            of Ghana!
          </p>
          <div class="recipe-tags">
            <span class="tag">Ghanaian</span>
            <span class="tag">Aromatic</span>
            <span class="tag">Fluffy</span>
          </div>
        </div>
      </div>

      <div class="recipe-card">
        <div class="recipe-image">
          <div class="placeholder-image">🌶️</div>
        </div>
        <div class="recipe-content">
          <h3>Spicy Party Jollof</h3>
          <p class="cook-time">⏱️ 1 hour | 🍽️ 10 servings</p>
          <p>
            Perfect for celebrations and large gatherings! This party-style jollof is loaded 
            with extra scotch bonnet peppers, has an intense smoky flavor, and feeds a crowd. 
            Learn the techniques caterers use to make jollof for weddings and special events. 
            Warning: seriously addictive!
          </p>
          <div class="recipe-tags">
            <span class="tag">Spicy</span>
            <span class="tag">Party Style</span>
            <span class="tag">Large Batch</span>
          </div>
        </div>
      </div>

      <div class="recipe-card">
        <div class="recipe-image">
          <div class="placeholder-image">🍗</div>
        </div>
        <div class="recipe-content">
          <h3>Jollof Rice with Chicken</h3>
          <p class="cook-time">⏱️ 1 hour 15 minutes | 🍽️ 8 servings</p>
          <p>
            A complete one-pot meal combining perfectly seasoned jollof rice with tender, 
            flavorful chicken pieces. The chicken is marinated in authentic West African spices, 
            then cooked with the rice to create a rich, hearty dish. Perfect for Sunday dinners 
            or when you want something special.
          </p>
          <div class="recipe-tags">
            <span class="tag">One-Pot</span>
            <span class="tag">Protein</span>
            <span class="tag">Complete Meal</span>
          </div>
        </div>
      </div>

      <div class="recipe-card">
        <div class="recipe-image">
          <div class="placeholder-image">🥬</div>
        </div>
        <div class="recipe-content">
          <h3>Vegetarian Jollof Rice</h3>
          <p class="cook-time">⏱️ 40 minutes | 🍽️ 6 servings</p>
          <p>
            A plant-based version that doesn't compromise on flavor! Made with vegetable stock 
            and loaded with colorful vegetables like bell peppers, carrots, and green beans. 
            This vegetarian jollof proves you don't need meat to make an incredible jollof rice 
            that everyone will love.
          </p>
          <div class="recipe-tags">
            <span class="tag">Vegetarian</span>
            <span class="tag">Healthy</span>
            <span class="tag">Colorful</span>
          </div>
        </div>
      </div>

      <div class="recipe-card">
        <div class="recipe-image">
          <div class="placeholder-image">🦐</div>
        </div>
        <div class="recipe-content">
          <h3>Seafood Jollof Rice</h3>
          <p class="cook-time">⏱️ 55 minutes | 🍽️ 6 servings</p>
          <p>
            An elegant coastal variation featuring shrimp, fish, and sometimes calamari. 
            The seafood is lightly seasoned and added at just the right time to stay tender 
            and juicy. This recipe is popular in coastal regions and brings a taste of the 
            ocean to your jollof experience.
          </p>
          <div class="recipe-tags">
            <span class="tag">Seafood</span>
            <span class="tag">Coastal</span>
            <span class="tag">Special Occasion</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.recipes {
  max-width: 1200px;
  margin: 0 auto;
}

.recipes-hero {
  text-align: center;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  color: white;
  border-radius: 10px;
  margin-bottom: 3rem;
}

.recipes-hero h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.recipes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.recipe-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.recipe-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}

.recipe-image {
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-image {
  font-size: 5rem;
}

.recipe-content {
  padding: 1.5rem;
}

.recipe-content h3 {
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.cook-time {
  color: #ff6b6b;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.recipe-content p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.recipe-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #ff6b6b;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .recipes-hero h1 {
    font-size: 2rem;
  }
  
  .recipes-grid {
    grid-template-columns: 1fr;
  }
}
</style>