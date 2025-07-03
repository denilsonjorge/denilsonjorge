const btns=document.querySelectorAll(".btn");

btns.forEach(btn => {

        btn.addEventListener("click",()=>{
            const content=btn.nextElementSibling;
            btn.classList.toggle("active");
            if(btn.classList.contains("active")){
                
            }
        })
});