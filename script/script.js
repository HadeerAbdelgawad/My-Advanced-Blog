const toTop= document.querySelector(".to-top")

window.addEventListener("scroll", async()=>{
    if(window.pageYOffset > 20){//if scroll down by 20px
        toTop.classList.add("active")
    }else{
        toTop.classList.remove("active")
    }
})