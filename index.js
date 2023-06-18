
let index = 0,
sliders = document.querySelectorAll(".slider");
document.addEventListener("click", e=>{
    if (!e.target.matches(".btn_p") && !e.target.matches(".btn_n")) return false;
    if (e.target.matches(".btn_n")) {
        index < 0 || index >= sliders.length -1 ? index = 0 : index++;
    };
    if (e.target.matches(".btn_p")) {
        index <= 0  ? index = sliders.length - 1 : index--;
    };
    
    sliders.forEach(el =>{
        el.classList.add("desactivo")
    })
    sliders[index].classList.remove("desactivo")
    
}, false)
