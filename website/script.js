const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 5 : 1})`,
  }
  
  trailer.animate(keyframes, { 
    duration: 300, 
    fill: "forwards" 
  });
}

const getTrailerClass = type => {
  switch(type) {
    case "video":
      return "fa-solid fa-circle-down";
	case "github":
	  return "fa-brands fa-github";
	case "YT":
	  return "fa-brands fa-youtube";
  case "LI":
    return"fa-brands fa-linkedin";
    default:
      return "fa-solid fa-arrow-up-right"; 
  }
}

window.onmousemove = e => {
  const interactable = e.target.closest(".interactable, .interactable2"),
        interacting = interactable !== null;
  
  const icon = document.getElementById("trailer-icon");
  
  animateTrailer(e, interacting);
  
  trailer.dataset.type = interacting ? interactable.dataset.type : "";
  
  if(interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
  }
}


/* -- Text effect -- */

const letters = "LOVE<3";

let intervalH3 = null;
let intervalH1 = null;

document.querySelector("h3").addEventListener("mouseover", event => {  
  let iteration = 0;
  
  clearInterval(intervalH3);
  
  intervalH3 = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 6)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(intervalH3);
    }
    
    iteration += 1 / 3;
  }, 30);
});

document.querySelector("h3").addEventListener("mouseout", event => {  
  // don't clear the interval here
  event.target.innerText = event.target.dataset.value;
});

document.querySelector("h1").addEventListener("mouseover", event => {  
  let iteration = 0;
  
  clearInterval(intervalH1);
  
  intervalH1 = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 6)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(intervalH1);
    }
    
    iteration += 1 / 3;
  }, 30);
});

document.querySelector("h1").addEventListener("mouseout", event => {  
  // don't clear the interval here
  event.target.innerText = event.target.dataset.value;
});


