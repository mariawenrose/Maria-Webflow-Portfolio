import gsap from "gsap";

const textHover = () => {
  // Break ".text-hover" into letters and preserve spaces
  document.querySelectorAll(".text-hover").forEach((element) => {
    const text = element.textContent;
    element.innerHTML = text
      .split("")
      .map((char) =>
        char === " " ? '<span class="char space">&nbsp;</span>' : `<span class="char">${char}</span>`
      )
      .join("");
  });

  gsap.matchMedia().add("(min-width: 992px)", () => {
    // Select elements with data-hover="random"
    document.querySelectorAll('[data-hover="random"]').forEach((hoverElement) => {
      const textHoverElements = hoverElement.querySelectorAll(".text-hover");
      if (!textHoverElements.length) return;

      hoverElement.addEventListener("mouseenter", () => {
        textHoverElements.forEach((textHoverElement) => {
          const chars = textHoverElement.querySelectorAll(".char");
          const originalChars = Array.from(chars).map((char) =>
            char.classList.contains("space") ? " " : char.textContent
          );

          // Instantly set opacity of ".text-hover" to 0
          gsap.set(textHoverElement, { opacity: 0, duration: 0 });

          let cycles = 2; // Number of random letter cycles
          const interval = setInterval(() => {
            chars.forEach((char, index) => {
              if (!char.classList.contains("space")) { // Skip spaces
                gsap.to(char, {
                  duration: 0.8, // Slower animation duration
                  textContent: "abcdefghijklmnopqrstuvwxyz".charAt(
                    Math.floor(Math.random() * 26)
                  ),
                  ease: "power1.in",
                  delay: index * 0.05, // Increased stagger delay
                });
              }
            });
            cycles--;
            if (cycles <= 0) {
              clearInterval(interval); // Stop after cycles complete
              chars.forEach((char, index) => {
                if (!char.classList.contains("space")) { // Skip spaces
                  gsap.to(char, {
                    duration: 0.8, // Slower transition back
                    textContent: originalChars[index], // Restore original text
                    ease: "power2.in",
                    delay: index * 0.05,
                  });
                }
              });
              // Fade ".text-hover" back in after animation
              gsap.to(textHoverElement, { opacity: 1, duration: 0 });
            }
          }, 80); // Slower interval
        });
      });
    });
  });
};

export default textHover;
