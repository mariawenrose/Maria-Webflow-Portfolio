import gsap from "gsap";
import TextRandomLoad from '../animation/textRandomLoad.js';

function hideLoader() {
    // Trigger click to hide loader
    document.querySelector("#load-trigger").click();
        TextRandomLoad();

}

const loader = () => {
    // Set initial display for #load-trigger to block
    const trigger = document.querySelector("#load-trigger");
    const loader = document.querySelector(".preloader");
    const corn = document.querySelector(".corn");

    loader.style.display = "flex";
    let tl = gsap.timeline();
    tl.to(corn, {
        transform: "rotateY(0deg)",
        scale:0.9,
        duration: 0.8,
        ease: "power2.out",
        onComplete: hideLoader

    })
}



export default loader;
