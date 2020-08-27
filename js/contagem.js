
var target_date = new Date("2020-08-27T20:00:00-03:00");//Padrão ISO para data e hora: ano-mes-dia_T_hora:mim:seg-fuzo(br: 03:00)

var dias, horas, minutos, segundos;
var regressiva = document.getElementById("regressiva");

setInterval(function () {

    var current_date = new Date().getTime();
    var segundos_f = (target_date - current_date) / 1000;

dias = parseInt(segundos_f / 86400);
    segundos_f = segundos_f % 86400;
    
    horas = parseInt(segundos_f / 3600);
    segundos_f = segundos_f % 3600;
    
    minutos = parseInt(segundos_f / 60);
    segundos = parseInt(segundos_f % 60);
if(segundos<0){
    segundos = 0;
}
if(minutos<0){
    minutos= 0;
}
if(horas<0){
    horas = 0;
}
if(dias<0){
    dias = 0;
}
    document.getElementById('dia').innerHTML = dias;
document.getElementById('hora').innerHTML = horas;
document.getElementById('minuto').innerHTML = minutos;
document.getElementById('segundo').innerHTML = segundos;
  

}, 1000);

