//Variables
//PAGE TITLE
var title = document.getElementById("title");
//TEXT H1
var h1 = document.getElementById("box_header-h1");
//PICTURE
var img = document.getElementById("hero_picture");
//TEXT P
var p = document.getElementById("text");
//FUNCTIONS
function func1(){
    title.textContent = "Feliz cumpleaños!!!"
    h1.textContent = "Feliz cumpleaños, amorcito!!!"
    p.textContent = "Cumpleañera!!! Felices 22 años, amorcito!!! <3";
    button.textContent = "Continuar";
    document.getElementById("hero_picture").className = "hero_picture a";
}
function func2(){
    p.textContent = "He hecho esto con mucho esfuerzo, ya que no quiero felicitarte como el resto. Te quiero muchisimo, no sabes cuanto... Y esta es mi forma de demostrarlo";
    document.getElementById("hero_picture").className = "hero_picture b";
}
function func3(){
    p.textContent = "Porque luego de un largo día de trabajo te encuentro a ti descansando en mis brazos."
    document.getElementById("hero_picture").className = "hero_picture c";
}
function func4(){
    p.textContent = "Eres la unica persona cuya presencia es capaz de sacarme una sonrisa."
    document.getElementById("hero_picture").className = "hero_picture d";
}
function func5(){
    p.textContent = "El apoyo que me has dado es increible, me hace querer ser mejor cada dia para poder recompensarte todo tu amor, cariño y respaldo."
    document.getElementById("hero_picture").className = "hero_picture e";
}
function func6(){
    p.textContent = "Esto es para ti, aunque no es nada, es algo que viene de mi corazon. Para la mejor novia del mundo..."
    document.getElementById("hero_picture").className = "hero_picture f";
}
function func7(){
    p.textContent = "Y la más graciosa..."
    document.getElementById("hero_picture").className = "hero_picture g";
}
function func8(){
    p.textContent = "Y la unica mujer que me hace decir 'ti' con tada la dulzura que pueda."
    document.getElementById("hero_picture").className = "hero_picture h";
}
function func9(){
    p.textContent = "Feliz cumpleaños, amorcito."
    document.getElementById("hero_picture").className = "hero_picture i";
}
function func10(){
    h1.textContent = "Pasala increible!"
    p.textContent = "Te quiero muchisimo."
    button.textContent = "Feliz cumpleaños!!!"
    document.getElementById("hero_picture").className = "hero_picture j";
}
//BUTTON
const button = document.querySelector("#button");
//ARRAY OF FUNCTIONS
var funcs = [func1, func2, func3, func4, func5, func6, func7, func8, func9, func10]

var i = 0;

button.addEventListener("click", e => {
    funcs[i]();
    i++;
    if (i >= funcs.length);
    
})
