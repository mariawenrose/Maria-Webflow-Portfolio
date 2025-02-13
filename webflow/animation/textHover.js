import gsap from "gsap";

const textHover = () => {
  document.querySelectorAll(".text-hover").forEach((element) => {
    const text = element.textContent;
    element.innerHTML = text
      .split("")
      .map((char) => `<span class="char">${char}</span>`)
      .join("");
  });

  gsap.matchMedia().add("(min-width: 992px)", () => {
    document.querySelectorAll(".text-hover").forEach((element) => {
      const chars = element.querySelectorAll(".char");
      const originalChars = Array.from(chars).map((char) => char.textContent);

      element.addEventListener("mouseenter", () => {
        let cycles = 2; // Increase cycles for a smoother effect
        const interval = setInterval(() => {
          chars.forEach((char, index) => {
            gsap.to(char, {
              duration: 0.8, // Slower animation duration
              textContent: "abcdefghijklmnopqrstuvwxyz".charAt(
                Math.floor(Math.random() * 26)
              ),
              ease: "power1.in",
              delay: index * 0.05 // Increased stagger delay
            });
          });
          cycles--;
          if (cycles <= 0) {
            clearInterval(interval); // Stop after 3 cycles
            chars.forEach((char, index) => {
              gsap.to(char, {
                duration: 0.8, // Slower transition back
                textContent: originalChars[index], // Restore original text
                ease: "power2.in",
                delay: index * 0.05
              });
            });
          }
        }, 80); // Slower interval
      });
    });
  });
};

export default textHover;
