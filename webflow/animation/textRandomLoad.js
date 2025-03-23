import gsap from "gsap";

const lettersAndSymbols = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "=", ";", ":", "<", ">", ","
];

/**
 * Initializes text by wrapping each character in a span and animating them.
 * This function runs on page load to set up and animate the text.
 */
const TextRandomLoad = () => {
  document.querySelectorAll(".text-hover").forEach((textElement) => {
    if (!textElement || !(textElement instanceof HTMLElement)) return;

    const originalText = textElement.innerText;
    textElement.dataset.original = originalText; // Store original text

    const chars = originalText.split("").map((char) =>
      char === " " ? `<span>&nbsp;</span>` : `<span>${char}</span>`
    );

    textElement.innerHTML = chars.join("");

    // Animate text immediately after wrapping characters in spans
    const charElements = textElement.querySelectorAll("span");
    charElements.forEach((char, index) => {
      if (char.innerHTML === "&nbsp;") return; // Skip animating spaces

      let repeatCount = 0;

      gsap.fromTo(
        char,
        { opacity: 0 },
        {
          duration: 0.03,
          onStart: () => gsap.set(char, { "--opa": 1 }),
          onComplete: () => gsap.set(char, { innerHTML: originalText[index], delay: 0.03 }),
          repeat: 3,
          onRepeat: () => {
            repeatCount++;
            if (repeatCount === 1) {
              gsap.set(char, { "--opa": 0 });
            }
          },
          repeatRefresh: true,
          repeatDelay: 0.04,
          delay: (index + 1) * 0.07,
          innerHTML: () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
          opacity: 1
        }
      );
    });
  });
};

/**
 * Triggers the random letter animation when hovering over .hover-effect.
 */
const TextRandomHover = () => {
  const animateText = (textElement) => {
    if (!textElement || !(textElement instanceof HTMLElement)) return;

    const originalText = textElement.dataset.original;
    const charElements = textElement.querySelectorAll("span");

    charElements.forEach((char, index) => {
      if (char.innerHTML === "&nbsp;") return; // Skip animating spaces

      let repeatCount = 0;

      gsap.fromTo(
        char,
        { opacity: 0 },
        {
          duration: 0.03,
          onStart: () => gsap.set(char, { "--opa": 1 }),
          onComplete: () => gsap.set(char, { innerHTML: originalText[index], delay: 0.03 }),
          repeat: 3,
          onRepeat: () => {
            repeatCount++;
            if (repeatCount === 1) {
              gsap.set(char, { "--opa": 0 });
            }
          },
          repeatRefresh: true,
          repeatDelay: 0.04,
          delay: (index + 1) * 0.07,
          innerHTML: () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
          opacity: 1
        }
      );
    });
  };

  document.querySelectorAll(".hover-effect").forEach((hoverElement) => {
    hoverElement.addEventListener("mouseenter", () => {
      hoverElement.querySelectorAll(".text-hover").forEach(animateText);
    });
  });
};

export { TextRandomLoad, TextRandomHover };
