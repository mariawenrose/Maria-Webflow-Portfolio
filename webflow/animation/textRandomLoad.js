const lettersAndSymbols = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*-_+=;:<>?,'.split('');

class TextRandomLoad {
  constructor(textElement) {
    if (!textElement || !(textElement instanceof HTMLElement)) {
      throw new Error('Invalid text element provided.');
    }

    this.textElement = textElement;
    this.splitText();
  }

  splitText() {
    const text = this.textElement.textContent.trim();
    this.textElement.innerHTML = ''; // Clear existing content
    this.chars = [...text].map(char => {
      const span = document.createElement('span');
      span.textContent = char;
      span.dataset.original = char; // Store original text
      this.textElement.appendChild(span);
      return span;
    });
  }

  animate() {
    this.reset();

    this.chars.forEach((char, index) => {
      gsap.fromTo(
        char,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.03,
          repeat: 3,
          repeatRefresh: true,
          repeatDelay: 0.04,
          delay: (index + 1) * 0.07,
          onStart: () => gsap.set(char, { '--opa': 1 }),
          onRepeat: () => {
            char.textContent = lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
            if (gsap.getProperty(char, '--opa') === 1) {
              gsap.set(char, { '--opa': 0 });
            }
          },
          onComplete: () => gsap.set(char, { textContent: char.dataset.original })
        }
      );
    });
  }

  reset() {
    this.chars.forEach(char => {
      gsap.killTweensOf(char);
      char.textContent = char.dataset.original;
    });
  }
}

export default TextRandomLoad;
