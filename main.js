particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#f0f0f0"
    },
    "shape": {
      "type":"image",
      "stroke": {
        "width": 0,
        "color": "#f0f0f0"
      },
      "polygon": {
        "nb_sides": 4
      },
      "image": {
        "src": "EEC.png",
        "width": 150,
        "height": 150
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.9,
        "sync": true
      }
    },
    "size": {
      "value": 010,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 40,
        "size_min": 1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#888888",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
//console.log(window.pJSDom[0].pJS.particles.array.length);
//console.log(window.pJSDom[0].pJS.particles.array);

var infoArr=[];
infoArr[0]="Why EvilEpicCoder?";
			
			
window.onload=function(){
console.log("onload");


setInterval(function(){ var counter;
counter=document.getElementById("count-particles");
counter.textContent="Particles on the page: "+window.pJSDom[0].pJS.particles.array.length; }, 1000);

addEventListener("click",checkButtons,false);

start();
}
function start(){
console.log("start");
var textInfoElements=document.getElementsByClassName("info");
var textInfoNum=extInfoElements.length;
//console.log(textInfoElements);
console.log(textInfoElements.length);

//console.log(text.children[2].textContent);
//text.innerHTML="GG";

}
function checkButtons(evt){
	console.log("evt");
	var x=evt.target.innerText;
	console.log(myVal);
}
jQuery(document).ready(function(){
   setInterval(function(){
     var rXP = Math.floor(Math.random() * (80- 0)) + 20;
     var rYP = Math.floor(Math.random() * (80 - 0)) + 20;
   
     $('h1').css('text-shadow', +rYP/40+'px '+rXP/40+'px #4DDBFF, '+rYP/20+'px '+rXP/20+'px #FFB24D, '+rXP/20+'px '+rYP/20+'px #4DFFA5');
   },100);
});

