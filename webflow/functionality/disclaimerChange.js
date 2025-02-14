const disclaimerChange = () => {
  // Get references to the select element and the disclaimer text
  const filterSelect = document.querySelector('.filter-select');
  const disclaimer = document.querySelector('.dislaimer-text-wrap');

  // If either element is not found, do nothing and exit silently
  if (!filterSelect || !disclaimer) {
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