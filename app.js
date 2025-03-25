const parceled = true;

//import groupCMSItem from './webflow/functionality/groupCMSItem.js';
import blurbUnderline from './webflow/functionality/blurbUnderline.js';
import pageTransition from './webflow/functionality/pageTransition.js';
//import disclaimerChange from './webflow/functionality/disclaimerChange.js';


import loader from './webflow/animation/preloader.js';
import hoverEffect  from './webflow/animation/hoverEffect.js';


const onReady = () => {
    hoverEffect()
    blurbUnderline()
    pageTransition()
    // disclaimerChange()
    // Check if .filter-select exists before adding the event listener
    /**const filterSelect = document.querySelector(".filter-select");
    if (filterSelect) {
        filterSelect.addEventListener("change", () => {
            setTimeout(groupCMSItem, 50); // Delay ensures items are updated first

        });
    }**/
};

const onLoading = () => {
    loader()
    //groupCMSItem()
    blurbUnderline()

};

if (document.readyState !== 'loading') {
    onLoading();
    onReady();
    console.log('readystate');
} else {
    console.log('WELCOME');
    window.addEventListener('load', onReady);
    document.addEventListener('DOMContentLoaded', onLoading);
    console.log(`
        _   _                                       ____                            _      _              
        /  /|                   ,                   /    )                          |  |  /               
    ---/| /-|-----__----)__----------__------------/___ /-----__----__-----__-------|-/|-/------__-----__-
      / |/  |   /   )  /   )  /    /   )          /    |    /   )  (\`  /___)       |/ |/     /___)  /   )
    _/__/___|__(___(__/______/____(___(__________/_____|___(___/__(__)__(___ _______/__|_____(___ __/___/_

   maria@ultravioletventure.studio   

`);
}
