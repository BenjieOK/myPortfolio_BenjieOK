function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


const quotes = [
    "Be yourself; everyone else is already taken.",
    "In the middle of every difficulty lies opportunity.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Life is what happens when you're busy making other plans.",
    "You miss 100% of the shots you don’t take.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "Happiness depends upon ourselves.",
    "What we think, we become.",
    "The only way to do great work is to love what you do.",
      "Act as if what you do makes a difference. It does.",
      "The best way to get started is to quit talking and begin doing.",
      "Don’t watch the clock; do what it does. Keep going.",
      "The future belongs to those who believe in the beauty of their dreams.",
      "Believe you can and you're halfway there.",
      "It does not matter how slowly you go as long as you do not stop.",
      "The harder you work for something, the greater you'll feel when you achieve it.",
      "Dream big and dare to fail.",
      "Success is not how high you have climbed, but how you make a positive difference to the world.",
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
      "Failure will never overtake me if my determination to succeed is strong enough.",
      "It always seems impossible until it’s done.",
      "Don't let yesterday take up too much of today.",
      "Keep your face always toward the sunshine—and shadows will fall behind you.",
      "Perseverance is not a long race; it's many short races one after the other.",
      "Your limitation—it’s only your imagination.",
      "Great things never come from comfort zones.",
      "Dream it. Wish it. Do it.",
      "Believe in yourself and all that you are.",
      "In order to succeed, we must first believe that we can.",
      "The only place where success comes before work is in the dictionary.",
      "Don’t wait for opportunity. Create it.",
      "Turn your wounds into wisdom.",
      "If you want something you’ve never had, you’ve got to do something you’ve never done.",
      "You are never too old to set another goal or to dream a new dream.",
      "Act as if what you do makes a difference. It does.",
      "If you can dream it, you can do it.",
      "Success doesn’t just find you. You have to go out and get it.",
      "The man who has confidence in himself gains the confidence of others.",
      "Be fearless in the pursuit of what sets your soul on fire.",
    "The only limits that exist are the ones you place on yourself.",
    "Every small step forward is a victory worth celebrating.",
    "Your potential is endless; don’t let doubt write your story.",
    "The world changes when you change the way you see it.",
    "Adversity is the fuel for greatness.",
    "You are the author of your life—write a story worth reading.",
    "The greatest risk is not taking one.",
    "Your dreams are the blueprint of your future.",
    "Strength grows in the moments when you think you can’t go on but keep going anyway.",
    "The only failure is giving up on yourself.",
    "You don’t have to be perfect to be amazing.",
    "Every setback is a setup for a comeback.",
    "The power to change your life lies in your next decision.",
    "You are enough, just as you are, to begin again.",
    "The journey of a thousand miles begins with a single step of courage.",
    "Your passion is your compass—follow it relentlessly.",
    "The best time to plant a tree was 20 years ago. The second-best time is now.",
    "You are not defined by your past but by the possibilities of your future.",
    "The stars are within reach if you’re willing to climb.",
    "Your attitude determines your direction.",
    "The only way to predict the future is to create it.",
    "Chase progress, not perfection.",
    "You are the artist of your life—paint it with bold colors.",
    "The road to success is always under construction.",
    "Your courage to start is what sets you apart.",
    "The greatest wealth is to live a life true to yourself.",
    "Every day is a new chance to rewrite your story.",
    "The fire within you is stronger than the obstacles around you.",
    "You don’t need to see the whole staircase to take the first step.",
    "The best version of yourself is waiting to be discovered.",
    "Your dreams are valid, and so is your journey to achieve them.",
    "The only thing standing between you and your goal is the story you keep telling yourself.",
    "You are capable of more than you can imagine.",
    "The world needs your unique light—shine brightly.",
    "Your determination is the key to unlocking your potential.",
    "The greatest adventure is the one you create for yourself.",
    "You are stronger than your struggles and braver than your fears.",
    "The seeds of greatness are planted in the soil of persistence.",
    "Your life is a masterpiece—keep creating.",
    "The only way to grow is to step outside your comfort zone.",
    "Your actions today shape the story of your tomorrow.",
    "The beauty of life lies in the courage to keep going.",
    "You are the architect of your destiny—build it with purpose.",
    "The best way to predict your future is to create it.",
    "Your dreams are the whispers of your soul—listen to them.",
    "The greatest gift you can give yourself is the belief that you can.",
    "Every challenge is an opportunity in disguise.",
    "Your potential is limitless—dare to explore it.",
    "The world rewards those who refuse to give up.",
    "Success is a series of small wins stacked together.",
    "Your mindset is the foundation of your success.",
    "The only way to fail is to stop trying.",
    "You are the CEO of your life—take charge.",
    "The harder the struggle, the sweeter the victory.",
    "Your dreams are worth the effort, no matter how long it takes.",
    "The best view comes after the hardest climb.",
    "You are the sum of the choices you make every day.",
    "The future is bright for those who dare to dream.",
    "Your courage to continue will define your legacy.",
    "The only thing you regret will be the chances you didn’t take.",
    "You are the hero of your own story—act like it.",
    "The world is changed by those who show up.",
    "Your passion is the spark that ignites greatness.",
    "The only way to discover your limits is to push past them.",
    "Your life is a canvas—paint it with bold strokes.",
    "The best is yet to come if you keep moving forward.",
    "Your potential is like a seed—water it with effort and watch it grow.",
    "The only way to fail is to quit before you start.",
    "You are the light in the darkness—shine on.",
    "The journey is the reward—embrace every step.",
    "Your dreams are the roadmap to your destiny.",
    "The only way to lose is to stop believing in yourself.",
    "You are the captain of your ship—steer it with purpose.",
    "The world is full of possibilities—go out and claim yours.",
    "Your courage to begin is the first step to greatness.",
    "The only way to achieve the impossible is to believe it’s possible.",
    "You are the creator of your reality—make it extraordinary.",
    "The best way to honor your past is to create a better future.",
    "Your potential is a flame—fan it with action.",
    "The only way to live fully is to embrace the unknown.",
    "You are the master of your fate—shape it with intention.",
    "The world is waiting for your unique contribution.",
    "Your dreams are the heartbeat of your soul—listen closely.",
    "The only way to grow is to embrace discomfort.",
    "You are the writer of your story—make it unforgettable.",
    "The future belongs to those who dare to dream today.",
    "Your courage to take the first step will inspire others.",
    "The only way to fail is to never try at all.",
    "You are the architect of your dreams—build them boldly.",
    "The world is a better place because you are in it.",
    "Your potential is a treasure—unearth it with effort.",
    "The only way to live is to chase what sets your soul on fire.",
    "You are the light that guides your own path—shine brightly.",
    "The best way to predict your future is to create it today.",
    "Your dreams are the compass that leads to your destiny.",
    "The only way to lose is to stop believing in your potential.",
    "You are the creator of your own magic—make it extraordinary.",
    "The only way to fail is to stop believing in your dreams.",
    "Your life is a gift—unwrap it with gratitude and purpose.",
    "The world is shaped by those who refuse to settle.",
    "Your courage to dream big is the first step to achieving greatness.",
    "The only way to live a fulfilling life is to follow your heart.",
    "You are the sculptor of your destiny—carve it with care.",
    "The best way to find yourself is to lose yourself in service of others.",
    "Your potential is a fire—ignite it with passion and persistence.",
    "The only way to fail is to stop learning and growing.",
    "You are the light in someone else’s darkness—never underestimate your impact.",
    "The world is full of beauty—open your eyes and see it.",
    "Your dreams are the stars—reach for them and let them guide you.",
    "The only way to live is to embrace every moment with gratitude.",
    "You are the author of your own story—make it a bestseller.",
    "The best way to predict your future is to create it with intention.",
    "Your potential is a seed—nurture it with love and effort.",
    "The only way to fail is to stop believing in the power of your dreams.",
    "You are the architect of your happiness—build it with care.",
    "The world is waiting for your unique voice—speak your truth.",
    "Your dreams are the wings that will carry you to greatness.",
    "The only way to live is to embrace the journey, not just the destination.",
    "You are the light that shines in the darkest moments—never dim your glow.",
    "The best way to honor your past is to create a future you’re proud of.",
    "Your potential is a gift—unwrap it with courage and determination.",
    "The only way to fail is to stop believing in the beauty of your dreams.",
    "You are the creator of your own happiness—design it with love.",
    "The world is a canvas—paint it with the colors of your dreams.",
    "Your dreams are the compass that will guide you to your destiny.",
    "The only way to live is to embrace the unknown with an open heart.",
    "You are the light that will guide others through their darkest moments.",
    "The best way to predict your future is to create it with passion and purpose.",
    "Your potential is a flame—let it burn brightly and light up the world.",
    "The only way to fail is to stop believing in the power of your own potential.",
    "You are the architect of your own destiny—build it with courage and love.",
    "The world is waiting for your unique contribution—don’t keep it waiting.",
    "Your dreams are the stars that will guide you to your destiny—reach for them.",
    "The only way to live is to embrace every moment with gratitude and joy.",
    "You are the light that will shine in the darkest moments—never let it dim.",
    "The best way to honor your past is to create a future that inspires others.",
    "Your potential is a gift—unwrap it with courage, determination, and love.",
    "The only way to fail is to stop believing in the beauty of your own dreams.",
    "You are the creator of your own happiness—design it with passion and purpose.",
    "The world is a canvas—paint it with the colors of your dreams and aspirations.",
    "Your dreams are the compass that will guide you to your destiny—follow them.",
    "The only way to live is to embrace the unknown with an open heart and mind.",
    "You are the light that will guide others through their darkest moments—shine brightly.",
    "The best way to predict your future is to create it with passion, purpose, and love.",
    "Your potential is a flame—let it burn brightly and light up the world around you.",
    "The only way to fail is to stop believing in the power of your own potential and dreams.",
    "You are the architect of your own destiny—build it with courage, love, and determination.",
    "The world is waiting for your unique contribution—don’t keep it waiting any longer.",
    "Your dreams are the stars that will guide you to your destiny—reach for them with all your heart.",
    "The only way to live is to embrace every moment with gratitude, joy, and an open heart.",
    "You are the light that will shine in the darkest moments—never let it dim, and always let it guide you."
  ]
  
  const usedIndexes = new Set()
  const quoteElement = document.getElementById('quote')
  
  function generateQuote() {
    if (usedIndexes.size >= quotes.length) usedIndexes.clear()
  
    while (true) {
      const randomIndex = Math.floor(Math.random() * quotes.length)
  
      if (usedIndexes.has(randomIndex)) continue
  
      const quote = quotes[randomIndex]
      quoteElement.innerHTML = quote
      usedIndexes.add(randomIndex)
      break
    }
  
  }

  // Get the handshake element
const handshake = document.getElementById('handshake');

// Array of emojis to create the waving effect
const emojis = ['👋', '🤚'];

// Index to keep track of the current emoji
let currentEmojiIndex = 0;

// Function to toggle the emoji
function waveHand() {
    // Toggle between the two emojis
    currentEmojiIndex = (currentEmojiIndex + 1) % emojis.length;
    handshake.textContent = emojis[currentEmojiIndex];
}

// Set an interval to wave the hand every 500ms
setInterval(waveHand, 500);


// setInterval(function() {
//   const arrows = document.querySelectorAll('.arrow');
//   arrows.forEach(arrow => {
//     arrow.style.transform = 'translateY(-10px)';
//     setTimeout(() => {
//       arrow.style.transform = 'translateY(0)';
//     }, 500);
//     setTimeout(() => {
//       arrow.style.transform = 'translateY(-10px)';
//     }, 1000);
//     setTimeout(() => {
//       arrow.style.transform = 'translateY(0)';
//     }, 1500);
//   });
// }, 30000);


// Function to animate the arrows
function animateArrows() {
  // Select all elements with the class 'arrow'
  const arrows = document.querySelectorAll('.arrow');

  // Define the keyframes for the animation
  const keyframes = `
      @keyframes moveUpDown {
          0% { transform: translateY(0); }
          25% { transform: translateY(-10px); }
          50% { transform: translateY(0); }
          75% { transform: translateY(10px); }
          100% { transform: translateY(0); }
      }
  `;

  // Create a <style> element and add the keyframes to it
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerHTML = keyframes;
  document.head.appendChild(styleSheet);

  // Apply the animation to each arrow
  arrows.forEach(arrow => {
      arrow.style.animation = 'moveUpDown 0.8s ease-in-out 100000000000'; // 0.8s duration, 100,000,000,000 iterations
  });
}

// Run the animation every 30 seconds
setInterval(animateArrows, 10000);

// Run the animation immediately when the page loads
animateArrows();