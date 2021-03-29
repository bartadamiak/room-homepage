const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");
const header = document.querySelector(".header");




leftBtn.addEventListener("click", function() {
 
    
    if (header.classList.contains("mobile1")) {
        header.classList.remove("mobile1")
        header.classList.remove("desktop1")

        header.classList.add("mobile3")
        header.classList.add("desktop3")        
    }
    
    else if (header.classList.contains("mobile3")) {
        header.classList.remove("mobile3")
        header.classList.remove("desktop3")

        header.classList.add("mobile2")
        header.classList.add("desktop2")        
    }

    else if (header.classList.contains("mobile2")) {
        header.classList.remove("mobile2")
        header.classList.remove("desktop2")

        header.classList.add("mobile1")
        header.classList.add("desktop1")        
    }

})

rightBtn.addEventListener("click", function() {

    
    if (header.classList.contains("mobile1")) {
        header.classList.remove("mobile1")
        header.classList.remove("desktop1")

        header.classList.add("mobile2")
        header.classList.add("desktop2")        
    }
    
    else if (header.classList.contains("mobile2")) {
        header.classList.remove("mobile2")
        header.classList.remove("desktop2")

        header.classList.add("mobile3")
        header.classList.add("desktop3")        
    }

    else if (header.classList.contains("mobile3")) {
        header.classList.remove("mobile3")
        header.classList.remove("desktop3")

        header.classList.add("mobile1")
        header.classList.add("desktop1")        
    }

})


