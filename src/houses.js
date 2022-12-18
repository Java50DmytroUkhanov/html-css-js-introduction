const detailsImage = document.querySelector(".details-image");
const detailsTitle = document.querySelector(".details-title");
const detailsContainer = document.querySelector(".details-container");
const anchorElements = document.querySelectorAll(".thumbnails-anchor");
const mainElement = document.querySelector(".main-class");
const hideButtonElement = document.querySelector("#hide-button");
const audio = document.querySelector("#audio");
const logoPlay = document.querySelector(".logo");

const HIDDEN = "hidden";
const IS_POINT = "is-point";

const playAudio = document.querySelector("#play");
const pauseAudio = document.querySelector("#pause");

playAudio.addEventListener("click",playDetails);
pauseAudio.addEventListener("click",playsDetails);

function playDetails(){
    audio.play();

}
function playsDetails(){
    audio.pause();
}


 

// window.onclick = function(){
//     audio.play();
// }

function showAudio(){
   audio.play();

}
function stopAudio(){
    audio.pause();
    audio.currentTime = 0;
   
 
 }
//  function pauseAudio(){
//     audio.pause();
    
//  }



function showDetails(){
    mainElement.classList.remove(HIDDEN);
    logoPlay.classList.remove(HIDDEN);

    detailsContainer.classList.add(IS_POINT);
    showAudio();
    setTimeout(function(){
        detailsContainer.classList.remove(IS_POINT);
    })
    

}
function hideDetails(){
    mainElement.classList.add(HIDDEN);
    stopAudio();
    logoPlay.classList.add(HIDDEN);

}



function setDetails(anchor){
    const dataImage = anchor.getAttribute("data-details-image");
    detailsImage.src = dataImage;
    showDetails();
  
  
  
   
   
    detailsTitle.innerHTML = anchor.getAttribute("data-details-title");
       
    const color = anchor.getAttribute("data-text-color");
    if(color){
        detailsTitle.style.color = color;
    }else{
        detailsTitle.style.color = '';
    }

    
}

for(let i = 0; i < anchorElements.length; i++) {
    anchorElements[i].addEventListener("click",function(){
     setDetails(anchorElements[i]);

    } )

}
hideButtonElement.addEventListener("click",hideDetails);


