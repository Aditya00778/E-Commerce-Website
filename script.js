console.log("Script works")

let x= document.querySelector(".prev")
let z= document.querySelector(".next")
let y= document.querySelector(".imageslide").src

x.addEventListener("click",()=>{
    if (y=="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/84ae27f93c14a4e3.jpg?q=50"){
        y=document.querySelector(".imageslide").src = "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/156452518a7921fb.jpg?q=50"
    }

    else if(y=="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/156452518a7921fb.jpg?q=50"){
        y=document.querySelector(".imageslide").src = "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/84ae27f93c14a4e3.jpg?q=50"
    }

})

z.addEventListener("click",()=>{
    if (y=="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/84ae27f93c14a4e3.jpg?q=50"){
        y=document.querySelector(".imageslide").src = "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/156452518a7921fb.jpg?q=50"
    }

    else if(y=="https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/156452518a7921fb.jpg?q=50"){
        y=document.querySelector(".imageslide").src = "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/84ae27f93c14a4e3.jpg?q=50"
    }

})


