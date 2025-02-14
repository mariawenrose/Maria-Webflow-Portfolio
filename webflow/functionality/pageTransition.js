const pageTransition = () =>{
    const links = document.querySelectorAll(".nav-link"); // Adjust selector based on your navigation
    const body = document.body;
    
    // Apply fade-in effect when the page loads
    body.style.opacity = 0;
    body.style.transition = "opacity 0.5s";
    requestAnimationFrame(() => {
        body.style.opacity = 1;
    });

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent instant navigation
            const targetUrl = this.href;
            
            body.style.opacity = 0;
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); // Wait for fade-out before navigating
        });
    });

}
export default pageTransition