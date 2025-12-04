<template>
  <div class="tips">
    <section class="tips-hero">
      <h1>Cooking Tips & Techniques</h1>
      <p class="subtitle">Master the secrets to perfect jollof rice every time</p>
    </section>

    <section class="tips-content">
      <div class="tips-category">
        <h2>🔥 Essential Cooking Techniques</h2>
        <div class="tips-list">
          <div class="tip-item">
            <h3>Achieving the Perfect Smoky Flavor</h3>
            <p>
              The signature smoky taste comes from allowing the rice to form a slight crust at 
              the bottom (called socarrat). Reduce heat to low after the rice is cooked, cover 
              tightly, and let it sit for 10-15 minutes. Don't stir during this time!
            </p>
          </div>

          <div class="tip-item">
            <h3>The Right Rice-to-Liquid Ratio</h3>
            <p>
              Use 2 cups of stock/water for every 1 cup of parboiled rice. For basmati rice, 
              use 1.5 cups of liquid per cup of rice. The liquid should just barely cover the 
              rice when you start cooking.
            </p>
          </div>

          <div class="tip-item">
            <h3>Temperature Control is Key</h3>
            <p>
              Start with high heat to bring everything to a boil, then immediately reduce to 
              medium-low. Too much heat will burn the bottom before the rice cooks through. 
              Patience is crucial!
            </p>
          </div>

          <div class="tip-item">
            <h3>Don't Over-Stir the Rice</h3>
            <p>
              Once you add the rice and liquid, stir only once to combine. Over-stirring releases 
              too much starch and makes the rice mushy. Let it cook undisturbed until done.
            </p>
          </div>
        </div>
      </div>

      <div class="tips-category">
        <h2>🛒 Ingredient Selection Guide</h2>
        <div class="tips-list">
          <div class="tip-item">
            <h3>Choosing the Right Rice</h3>
            <p>
              Nigerian jollof traditionally uses long-grain parboiled rice (like Uncle Ben's). 
              Ghanaian jollof uses basmati rice. Never use short-grain or jasmine rice - they 
              become too sticky for jollof.
            </p>
          </div>

          <div class="tip-item">
            <h3>Fresh vs Canned Tomatoes</h3>
            <p>
              Fresh plum tomatoes give the best flavor and color. If using canned, choose 
              whole peeled tomatoes and blend them yourself. Tomato paste adds depth - 
              always fry it until it darkens slightly.
            </p>
          </div>

          <div class="tip-item">
            <h3>The Pepper Blend</h3>
            <p>
              Use a mix of red bell peppers for sweetness and scotch bonnet peppers for heat. 
              Always blend peppers with tomatoes for a smooth base. Remove scotch bonnet seeds 
              if you prefer less spice.
            </p>
          </div>

          <div class="tip-item">
            <h3>Stock Makes the Difference</h3>
            <p>
              Homemade chicken, beef, or vegetable stock adds incredible depth. If using store-bought, 
              choose low-sodium options so you can control the salt level. Never use plain water - 
              your jollof needs that flavor!
            </p>
          </div>
        </div>
      </div>

      <div class="tips-category">
        <h2>⚠️ Common Mistakes to Avoid</h2>
        <div class="tips-list">
          <div class="tip-item">
            <h3>Mistake #1: Adding Too Much Liquid</h3>
            <p>
              This is the #1 reason for soggy jollof rice. The liquid should just cover the rice 
              by about 1/4 inch. You can always add more if needed, but you can't remove excess 
              water easily.
            </p>
          </div>

          <div class="tip-item">
            <h3>Mistake #2: Not Frying the Tomato Base Long Enough</h3>
            <p>
              The tomato-pepper blend must be fried for at least 15-20 minutes until the raw taste 
              is gone and the color deepens. This step cannot be rushed - it's the foundation of 
              great jollof!
            </p>
          </div>

          <div class="tip-item">
            <h3>Mistake #3: Using the Wrong Pot</h3>
            <p>
              Use a heavy-bottomed pot with a tight-fitting lid. Thin pots burn easily, and loose 
              lids let too much steam escape. A good pot distributes heat evenly and traps steam 
              for perfectly cooked rice.
            </p>
          </div>

          <div class="tip-item">
            <h3>Mistake #4: Lifting the Lid Too Often</h3>
            <p>
              Once the rice starts cooking, resist the urge to check on it constantly. Every time 
              you lift the lid, you release steam and lower the temperature. Trust the process and 
              only check when necessary.
            </p>
          </div>
        </div>
      </div>

      <div class="tips-category">
        <h2>💡 Pro Tips from Experienced Cooks</h2>
        <div class="tips-list">
          <div class="tip-item">
            <h3>Add Bay Leaves for Extra Flavor</h3>
            <p>
              Drop 2-3 bay leaves into the rice while cooking. They add a subtle aromatic flavor 
              that elevates the dish. Remember to remove them before serving!
            </p>
          </div>

          <div class="tip-item">
            <h3>Toast Your Rice First</h3>
            <p>
              Some cooks lightly toast the rice in oil for 2-3 minutes before adding liquid. 
              This helps each grain stay separate and adds a nutty flavor. Try it!
            </p>
          </div>

          <div class="tip-item">
            <h3>The Aluminum Foil Trick</h3>
            <p>
              Place a sheet of aluminum foil under the pot lid to create a tighter seal. This 
              traps more steam and helps cook the rice more evenly while developing that smoky 
              bottom layer.
            </p>
          </div>

          <div class="tip-item">
            <h3>Make Extra Tomato Base</h3>
            <p>
              The tomato-pepper base freezes beautifully! Make a large batch and freeze in portions. 
              This cuts your cooking time in half for future jollof sessions. Game changer!
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.tips {
  max-width: 1000px;
  margin: 0 auto;
}

.tips-hero {
  text-align: center;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  color: white;
  border-radius: 10px;
  margin-bottom: 3rem;
}

.tips-hero h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
}

.tips-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.tips-category {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.tips-category h2 {
  color: #ff6b6b;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.tips-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.tip-item {
  padding: 1.5rem;
  background: #fff5f5;
  border-radius: 8px;
  border-left: 4px solid #ff6b6b;
  transition: transform 0.3s;
}

.tip-item:hover {
  transform: translateX(5px);
}

.tip-item h3 {
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
}

.tip-item p {
  color: #555;
  line-height: 1.7;
  font-size: 1.05rem;
}

/* Responsive */
@media (max-width: 768px) {
  .tips-hero h1 {
    font-size: 2rem;
  }
  
  .tips-category {
    padding: 1.5rem;
  }
  
  .tips-category h2 {
    font-size: 1.5rem;
  }
  
  .tip-item {
    padding: 1rem;
  }
}
</style>