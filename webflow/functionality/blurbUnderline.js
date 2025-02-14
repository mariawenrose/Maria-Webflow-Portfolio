const blurbUnderline = () => {
    const blurbs = document.querySelectorAll('.project-blurb');
  
    blurbs.forEach(blurb => {
      const parentWrap = blurb.closest('.blurb-wrap');
      if (!parentWrap) return;
  
      // Preserve original content and styles
      const originalContent = blurb.textContent;
      const styles = window.getComputedStyle(blurb);
  
      // Create a temporary container to measure line breaks
      const tempDiv = document.createElement('div');
      Object.assign(tempDiv.style, {
        position: 'absolute',
        visibility: 'hidden',
        whiteSpace: 'pre-wrap', // Preserve spaces and line breaks
        width: `${parentWrap.offsetWidth}px`, // Match parent width
        font: styles.font,
        padding: styles.padding,
        margin: styles.margin,
        letterSpacing: styles.letterSpacing,
        wordSpacing: styles.wordSpacing,
        wordBreak: 'keep-all', // Prevent breaking words
      });
      tempDiv.textContent = originalContent;
      document.body.appendChild(tempDiv);
  
      // Use Range to detect line breaks
      const lines = [];
      const textNode = tempDiv.firstChild;
      const range = document.createRange();
      let lineStart = 0;
      let lineEnd = 0;
      let lineTop = null;
  
      while (lineEnd < textNode.length) {
        range.setStart(textNode, lineEnd);
        range.setEnd(textNode, lineEnd + 1);
        const rect = range.getBoundingClientRect();
  
        // Detect a new line by checking the vertical position
        if (lineTop !== null && rect.top > lineTop) {
          range.setStart(textNode, lineStart);
          range.setEnd(textNode, lineEnd);
          lines.push(range.cloneContents().textContent);
          lineStart = lineEnd;
          lineTop = rect.top;
        }
  
        if (lineTop === null) lineTop = rect.top;
        lineEnd++;
      }
  
      // Add the last line
      if (lineStart < textNode.length) {
        range.setStart(textNode, lineStart);
        range.setEnd(textNode, textNode.length);
        lines.push(range.cloneContents().textContent);
      }
  
      // Clean up the temporary container
      document.body.removeChild(tempDiv);
  
      // Rebuild the blurb content with lines wrapped in divs
      blurb.innerHTML = '';
      lines.forEach(lineText => {
        const lineDiv = document.createElement('div');
        Object.assign(lineDiv.style, {
          borderBottom: '0.5px solid',
          width: '100%',
          whiteSpace: 'pre-wrap', // Preserve spaces
          wordBreak: 'keep-all', // Prevent breaking words
        });
        lineDiv.textContent = lineText;
        blurb.appendChild(lineDiv);
      });
    });
  };
  
  export default blurbUnderline;