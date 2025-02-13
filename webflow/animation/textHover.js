import gsap from "gsap";

const textHover = () => {
  gsap.matchMedia().add("(min-width: 992px)", () => {
    $(".text-hover").each(function () {
      let text = $(this).text().trim();
      let wrappedText = text
        .split("")
        .map(char => `<span class="char">${char}</span>`)
        .join("");
      $(this).html(`<span class="char-split">${wrappedText}</span>`);
    });

    $(".text-hover").hover(
      function () {
        let chars = $(this).find(".char-split .char");
        gsap.set(chars, { opacity: 0.5 }); // Set initial state
        gsap.fromTo(
          chars,
          { opacity: 0.35 },
          {
            opacity: 1,
            duration: 0.25,
            stagger: { each: 0.1, from: "random" },
            ease: "power1.out",
          }
        );
      },
      function () {
        let chars = $(this).find(".char-split .char");
        gsap.to(chars, { opacity: 1, duration: 0.3 });
      }
    );
  });
};

export default textHover;
