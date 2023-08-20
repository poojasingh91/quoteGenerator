const quotes = {
    science: ["The important thing is not to stop questioning. - Albert Einstein", "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge. - Stephen Hawking", "In science, there are no shortcuts to truth. - Karl Popper"],
    inspiration: [
      "Learn as if you will live forever, live like you will die tomorrow. — Mahatma Gandhi",
      "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.—Diane McLaren",
      "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.— Eleanor Roosevelt",
    ],
  };
  
  let currentCategory = "science";
  let currentIndex = 0;
  let darkMode = false;
  let fontSize = 16;
  
  const categorySelect = document.getElementById("category");
  const quoteText = document.getElementById("quoteText");
  const randomBtn = document.getElementById("randomBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const decreaseFont = document.getElementById("decreaseFont");
  const increaseFont = document.getElementById("increaseFont");
  const toggleModeButton = document.getElementById('toggle-mode');
  
  // Functions to handle events
  function updateQuote() {
    quoteText.textContent = quotes[currentCategory][currentIndex];
  }
  
  function toggleMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  function changeFontSize(change) {
    fontSize += change;
    quoteText.style.fontSize = `${fontSize}px`;
  }
  
  // Event listeners
  categorySelect.addEventListener("change", () => {
    currentCategory = categorySelect.value;
    currentIndex = 0;
    updateQuote();
  });
  
  randomBtn.addEventListener("click", () => {
    currentIndex = Math.floor(Math.random() * quotes[currentCategory].length);
    updateQuote();
  });
  
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + quotes[currentCategory].length) % quotes[currentCategory].length;
    updateQuote();
  });
  
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % quotes[currentCategory].length;
    updateQuote();
  });
  
  decreaseFont.addEventListener("click", () => {
    changeFontSize(-2);
  });
  
  increaseFont.addEventListener("click", () => {
    changeFontSize(2);
  });
  
  toggleModeButton.addEventListener('click', toggleMode);
  
  // Initial setup
  updateQuote();
  