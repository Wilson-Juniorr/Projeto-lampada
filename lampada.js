const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');
const repair = document.getElementById ('repair');
const sumir = document.getElementById ('sumir');
const aparecer = document.getElementById ('show');
let isLampBroken = false

function lampOff () {
    if (!isLampBroken){
        lamp.src = 'img/desligada.jpg';
    }
}
    
function lampOn () {
    if (!isLampBroken){
        lamp.src = 'img/ligada.jpg';
    }
    
}

function lampCrash () {
    lamp.src = 'img/quebrada.jpg';
    isLampBroken = true
}

function lampRepair (){
    isLampBroken = false
    lampOff()
}

function sumirlamp (){
    lamp.style.display = 'none';
}

function aparecerlamp (){
    lamp.style.display = 'block';
}
 
turnOff.addEventListener('click', lampOff);
turnOn.addEventListener('click', lampOn);
lamp.addEventListener('dblclick', lampCrash);
repair.addEventListener('click', lampRepair);
sumir.addEventListener('click', sumirlamp);
aparecer.addEventListener('click', aparecerlamp);