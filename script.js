const toggle = document.getElementById("theme-toggle")

toggle.onclick = () => {

document.body.classList.toggle("light")

}


particlesJS("particles-js",{

particles:{

number:{value:80},

size:{value:3},

move:{speed:2},

line_linked:{enable:true}

}

})