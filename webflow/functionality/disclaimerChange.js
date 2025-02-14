const disclaimerChange = () => {
    // Get references to the select element and the disclaimer text
    const filterSelect = document.querySelector('.filter-select');
    const disclaimer = document.querySelector('.disclaimer');
  
    // Check if the elements exist
    if (!filterSelect || !disclaimer) {
      console.error('Required elements not found!');
      return;
    }
  
    // Add an event listener to the select element
    filterSelect.addEventListener('change', function () {
      // Check if the selected option's value is "Business Consulting"
      if (this.value === 'Business Consulting') {
        // Change the opacity of the disclaimer to 0
        disclaimer.style.opacity = '0';
      } else {
        // Change the opacity of the disclaimer back to 1
        disclaimer.style.opacity = '1';
      }
    });
  };
  
  export default disclaimerChange;