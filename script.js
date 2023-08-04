let hamburger = document.querySelector(".hamburger");
let navBar = document.querySelector("nav");
let navLinks = document.querySelector(".nav-links");

const navLinksHeight = () => {
    let navLinksHeight = navLinks.offsetHeight;
    document.documentElement.style.setProperty("--Mobile-Nav-Links-Height",`${navLinksHeight}px`)
}

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