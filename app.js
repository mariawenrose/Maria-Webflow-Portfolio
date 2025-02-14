const parceled = true;

import groupCMSItem from './webflow/functionality/groupCMSItem.js';
import blurbUnderline from './webflow/functionality/blurbUnderline.js';

import textHover from './webflow/animation/textHover.js';

const onReady = () => {
    textHover()
    blurbUnderline()
    // Check if .filter-select exists before adding the event listener
    const filterSelect = document.querySelector(".filter-select");
    if (filterSelect) {
        filterSelect.addEventListener("change", () => {
            setTimeout(groupCMSItem, 50); // Delay ensures items are updated first
        });
    }
};

const onLoading = () => {
    groupCMSItem()
};

if (document.readyState !== 'loading') {
    onLoading();
    onReady();
    console.log('readystate');
} else {
    console.log('load');
    window.addEventListener('load', onReady);
    document.addEventListener('DOMContentLoaded', onLoading);
}
