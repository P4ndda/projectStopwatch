var voltas= document.getElementById('voltas')
var visor = document.getElementById(`visor`)
var ini = document.getElementById('inicio')

var sec = 0
var min = 0
var horas = 0
var interval = 0

function start(){
    ini.value = "iniciar"
    interval = setInterval(timer,1000)
}

function pause(){
    clearInterval(interval)
    ini.value = "Continuar"
}  

function twodigits(digit){
    if(digit < 10){
        return(`0${digit}`)
    } else{
        return digit
    }
}

function stop(){
    clearInterval(interval)
    sec = 0
    min = 0
    horas = 0
    visor.innerHTML= `00:00:00`
}
function timer(){
    sec++
    visor.innerHTML= twodigits(horas)+':'+twodigits(min)+':'+twodigits(sec)
    if(sec == 60){
        sec=0
        min++
    } else if(min > 60){
        min = 0
        horas++
    }
}

