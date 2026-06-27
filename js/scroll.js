const scrollButton = document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollButton.style.display="flex";

    }

    else{

        scrollButton.style.display="none";

    }

});

scrollButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});