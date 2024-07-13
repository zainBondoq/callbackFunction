function makeItRed(e){
    e.target.style.color = "red";
}

let h = document.querySelector(".test");
h.addEventListener("click" , makeItRed);


function imACallBack(){
    console.log("I'm a callback function")
}

setTimeout(imACallBack , 2000);
setTimeout(()=>{
    console.log("Download photo from URL");
    setTimeout(()=>{
        console.log("Resize photo");
        setTimeout(()=>{
            console.log("add logo");
            setTimeout(()=>{
                console.log("add logo to photo");
                setTimeout(()=>{
                    console.log("show photo in the website");
                } , 5000 );
            } , 4000 );
        } , 3000 );
    } , 2000 );
} , 1000 );


// this will cause a callback hell / a pyramid doom 