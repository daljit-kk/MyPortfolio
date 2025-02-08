document.addEventListener("DOMContentLoaded", () => {
    // List of words for dynamic-text
    const words = ["logo.", "brand.", "ad.", "package.", "video."];
    let currentIndex = 0;

    // Get the element for dynamic-text
    const dynamicText = document.getElementById("dynamic-text");

    // Function to type out each word one character at a time
    function typeWriterEffect(element, word, callback) {
        let index = 0;
        element.textContent = ''; // Clear previous word before typing new one

        // Typing effect using setInterval
        const typingInterval = setInterval(() => {
            element.textContent += word.charAt(index); // Add one character at a time
            index++;

            // When the word is fully typed, stop typing
            if (index === word.length) {
                clearInterval(typingInterval); // Stop typing once the word is done
                setTimeout(callback, 1300); // Wait before starting the next word
            }
        }, 90); // Speed of typing (90ms between each character)
    }

    // Function to type words one after another in sequence
    function typeWordsEffect() {
        function typeNextWord() {
            // Type the next word from the list
            typeWriterEffect(dynamicText, words[currentIndex], () => {
                // Once done, move to the next word
                currentIndex = (currentIndex + 1) % words.length;  // Wrap around to the first word
                typeNextWord();  // Start typing the next word
            });
        }
        
        typeNextWord();  // Start with the first word
    }

    // Start the typing effect as soon as the DOM content is loaded
    typeWordsEffect();  // Start typing the words in a loop
});





document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.querySelector('.prev-arrow');
  const nextButton = document.querySelector('.next-arrow');
  const testimonialSlider = document.querySelector('.testimonial-slider');
  const slides = document.querySelectorAll('.testimonial-slide');
  let currentSlide = 0;

  // Function to go to the next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
    updateSlider();
  }

  // Function to go to the previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop to the last slide
    updateSlider();
  }

  // Function to update the slider position
  function updateSlider() {
    testimonialSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  // Event listeners for the arrows
  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);
});




