// typing.js - typing effect for role title

document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector(".typing");
  const words = ["Full Stack Developer", "Web Developer", "Java Backend Developer"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentWord = words[wordIndex];
    const currentText = currentWord.substring(0, charIndex);
    typingElement.textContent = currentText;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
    } else if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      typingSpeed = 60;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 100;
    }

    setTimeout(type, typingSpeed);
  }

  type();
});
