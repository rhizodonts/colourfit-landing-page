let mainContent = document.querySelector(".main-content");
let video = document.querySelector(".loading-screen video");

let loadingFadeOutSpeed = Number(getComputedStyle(document.body).getPropertyValue("--Loading-Screen-FadeOut-Speed").replace(/[^\d\.]*/g,""));

// [1/2] fade out loading animation when complete
// [2/2] fade in main content when animation is complete
if(video && mainContent){
    video.addEventListener("ended", () => {
        mainContent.classList.add("appear");
        video.closest(".loading-screen").classList.add("disappear");

        setTimeout(() => {
            video.closest(".loading-screen").remove();
        }, loadingFadeOutSpeed)
    })
}

/*-------------------------------*/

let hamburger = document.querySelector(".hamburger");
let navBar = document.querySelector("nav");
let navLinks = document.querySelector(".nav-links");

const navLinksHeight = () => {
    let navLinksHeight = navLinks.offsetHeight;
    document.documentElement.style.setProperty("--Mobile-Nav-Links-Height",`${navLinksHeight}px`)
}
/*-------------------------------*/

// resize iframe height width the corresponding width
// keeping the original ratio
const updateVideoSize = () => {
    let iframes = document.querySelectorAll("iframe");
    if(iframes){
        iframes.forEach(iframe => {
            let iframeWidth = iframe.getAttribute("width");
            let iframeHeight = iframe.getAttribute("height");
            if(iframeWidth !== null && iframeHeight !== null){
                let iframeRatio = Number(iframeHeight) / Number(iframeWidth);
                let currentWidth = iframe.offsetWidth;
                let newHeight = currentWidth * iframeRatio;
                iframe.style.height = newHeight + "px";
            }
        })
    }
}

/*-------------------------------*/

// when page has loaded, run the following
document.addEventListener("DOMContentLoaded", () => {
    navLinksHeight();
    updateVideoSize();
})

// when the browser is resized, run the following
window.addEventListener("resize", () => {
    navLinksHeight();
    updateVideoSize();
})

// mobile: toggle menu: hamburger part
hamburger.addEventListener("click", () => {
    if(!navBar.matches(".active")){
        setTimeout(() => {
            navBar.classList.add("active")
        },0)
    } else {
        
        setTimeout(() => {
            navBar.classList.remove("active")
        },0)
    }    
})

// mobile: toggle menu: menu part
navLinks.addEventListener("click", (e) => {
    if(e.target.matches("a") && navBar.matches(".active")){
        navBar.classList.remove("active")
    }
})

// stop form submission bc the form doesn't actually work
let theForm = document.querySelector("footer form");
theForm.addEventListener("submit", (e) => {
    e.preventDefault();
})