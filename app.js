const parceled = true

import groupCMSItem from './webflow/functionality/groupCMSItem.js'
//import './styles/app.css'


const onReady = () => {

    // Re-run when the <select> element changes, with a slight delay
    document.querySelector("select").addEventListener("change", () => {
        setTimeout(groupCMSItem, 50); // Delay ensures items are updated first
    });

}
const onLoading = () => {
    groupCMSItem()


}

if (document.readyState !== 'loading') {
    onLoading()
    onReady()
    console.log('readystate')
} else {
    console.log('load')
    window.addEventListener('load', onReady)
    document.addEventListener('DOMContentLoaded', onLoading)
}
