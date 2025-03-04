import gsap from "gsap";

const TextRandomLoad = () => {
  const lettersAndSymbols = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*-_+=;:<>?,'.split('');
  const textElements = document.querySelectorAll(".text-hover");

  if (!textElements.length) {
    throw new Error("No elements with the class 'text-hover' found.");
  }

  textElements.forEach((textElement) => {
    // Split text into individual spans with background elements
    const splitText = () => {
      const text = textElement.textContent.trim();
      textElement.innerHTML = '';
      return [...text].map(char => {
        const span = document.createElement('span');
        span.className = 'char';
        
        // Add background element
        const bg = document.createElement('div');
        bg.className = 'char-bg';
        span.appendChild(bg);
        
        // Text character
        const textNode = document.createElement('div');
        textNode.className = 'char-text';
        textNode.textContent = char;
        textNode.dataset.original = char;
        span.appendChild(textNode);

        if (char === ' ') span.style.marginRight = '0.3em';
        textElement.appendChild(span);
        return { span, bg, textNode };
      });
    };

    const chars = splitText();

    const animate = () => {
      reset();
      
      chars.forEach(({ bg, textNode }, index) => {
        if (textNode.textContent === ' ') return;

        // Create timeline for synchronized animations
        const tl = gsap.timeline();
        
        // Animate background
        tl.to(bg, {
          scaleX: 1,
          duration: 0.3,
          ease: "power2.inOut",
          delay: index * 0.07
        });

        // Add text scramble animation
        tl.to(textNode, {
          opacity: 1,
          duration: 0.03,
          repeat: 3,
          repeatRefresh: true,
          repeatDelay: 0.04,
          onStart: () => gsap.set(textNode, { '--opa': 1 }),
          onRepeat: () => {
            textNode.textContent = lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
            if (gsap.getProperty(textNode, '--opa') === 1) {
              gsap.set(textNode, { '--opa': 0 });
            }
          },
          onComplete: () => gsap.set(textNode, { textContent: textNode.dataset.original })
        }, "<");

        // Animate background out
        tl.to(bg, {
          scaleX: 0,
          duration: 0.3,
          ease: "power2.inOut",
          transformOrigin: "right"
        });
      });
    };

    const reset = () => {
      chars.forEach(({ bg, textNode }) => {
        gsap.killTweensOf([bg, textNode]);
        gsap.set(bg, { scaleX: 0 });
        textNode.textContent = textNode.dataset.original;
      });
    };

    animate();
  });
};

export default TextRandomLoad;