/****
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
****/
//console.log(window.pJSDom[0].pJS.particles.array.length);
//console.log(window.pJSDom[0].pJS.particles.array);

var infoArr=[];
infoArr[0]="Why EvilEpicCoder?";
var btn_off='<a class="eec-read-toggle-off" href="#">collapse</a>';
var btn_on='<a class="eec-read-toggle-on" href="#">read</a>';			
var x;			
window.onload=function(){
console.log("onload");


//setInterval(function(){ var counter;
//counter=document.getElementById("count-particles");
//counter.textContent="Particles on the page: "+window.pJSDom[0].pJS.particles.array.length; }, 1000);

addEventListener("click",checkButtons,false);

start();
}
function start(){
console.log("start");
var textInfoElements=document.getElementsByClassName("info");
var textInfoNum=textInfoElements.length;
var textInside=[];
var textBackup=[];
var activEl=[];

//object.addEventListener("click", myScript);
//console.log(textInfoElements);

//console.log(textInside.substring(0, 40));
/******
for(var blk=0;blk<=textInfoNum-1;blk++){
	textInside[blk]=textInfoElements[blk].innerHTML;
	textBackup[blk]=textInfoElements[blk].innerHTML;
	textInside[blk]=textInside[blk].substring(0, 200);
	textInside[blk]+="...<br>";
	textInside[blk]+=btn_on;
	textInfoElements[blk].innerHTML=textInside[blk];
	activEl[blk]="1";
}***/
//console.log(text.children[2].textContent);
//text.innerHTML="GG";

}
function checkButtons(evt){
	x=evt.target;
	console.log(x+"The X");
		console.log(x.tagName+"The tagName");
		//console.log(x.parentNode.child.innerHTML+"parentNode");
		var d=x.parentNode;
		console.log(d.children[2].innerHTML+"-----");
	if(x.tagName=='A'){
		
		expandListToggle(x);
	}else{
		
	}
	console.log(x);
}
function expandListToggle(evtAndTarget){
	if(evtAndTarget.classList=='eec-read-toggle-off'){
		evtAndTarget.classList.remove('eec-read-toggle-off');
		evtAndTarget.classList.add('eec-read-toggle-on');
		evtAndTarget.innerText="read";
	}else{
		evtAndTarget.classList.remove('eec-read-toggle-on');
		evtAndTarget.classList.add('eec-read-toggle-off');
		evtAndTarget.innerText="collapse";
	}


}
/***jQuery(document).ready(function(){
   setInterval(function(){
     var rXP = Math.floor(Math.random() * (80 - 0)) + 20;
     var rYP = Math.floor(Math.random() * (80 - 0)) + 20;
   
     $('h1').css('text-shadow', +rYP/40+'px '+rXP/40+'px #4DDBFF, '+rYP/20+'px '+rXP/20+'px #FFB24D, '+rXP/20+'px '+rYP/20+'px #4DFFA5');
   },100);
});
****/
