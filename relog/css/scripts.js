$(document).ready(function(){
  window.setInterval(function(){
  var horas=new Date();
  $('.horas').html(horas.getHours());
  $('.minutos').html(horas.getMinutes());
    var segundos=horas.getSeconds();
    if(segundos<10){
 $('.segundos').html("0"+horas.getSeconds(),1000);}
    else{
 $('.segundos').html(horas.getSeconds(),1000);}     })
  });