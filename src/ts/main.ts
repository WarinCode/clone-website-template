import "@fontsource/poppins";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";

AOS.init();

const arrowUp: HTMLElement = document.querySelector("#arrow-up")!;

window.addEventListener("scroll", () => {
    if(scrollY >= 2000){
        arrowUp.classList.remove("hidden");
    } else if(scrollY < 2000){
        arrowUp.classList.add("hidden");
    }
})