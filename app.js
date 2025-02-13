const parceled = true

import groupCMSItem from './webflow/functionality/groupCMSItem.js'
import './app.css'

const onReady = () => {

    groupCMSItem()
}
const onLoading = () => {


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
