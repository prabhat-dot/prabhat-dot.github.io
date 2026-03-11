particlesJS("particles-js",{

particles:{

number:{value:80},

size:{value:3},

move:{speed:2},

line_linked:{enable:true}

}

})

const roles = [
"AI Developer",
"Machine Learning Engineer",
"NLP Enthusiast",
"SEO Automation Builder"
];

let roleIndex = 0;
let charIndex = 0;

function typeEffect(){

let text = roles[roleIndex];

document.querySelector(".typing").textContent =
text.slice(0, charIndex++);

if(charIndex > text.length){

roleIndex++;
charIndex = 0;

if(roleIndex >= roles.length){
roleIndex = 0;
}

}

setTimeout(typeEffect,120);
}

typeEffect();
