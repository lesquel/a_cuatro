let index = 0,
slider = document.querySelectorAll(".slider");


document.addEventListener("click", e=>{
    if(!e.target.matches(".btn_p") && !e.target.matches(".btn_n")) return false
    if(e.target.matches(".btn_n")){
        index < 0 || index >= slider.length -1 ? index = 0 :  index++;
    }
    if(e.target.matches(".btn_p")){
        index <= 0 ?index = slider.length -1 : index--;
    }

    slider.forEach(el =>{
        el.classList.add("desactivo")
    })
    slider[index].classList.remove("desactivo")
})