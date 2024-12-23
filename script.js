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
      "The man who has confidence in himself gains the confidence of others."
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