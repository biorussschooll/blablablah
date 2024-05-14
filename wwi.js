function mifuncion(x){
    x.classList.toggle("cambiar");

}
  function mostrarHora() {
    var fecha = new Date();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    horas = (horas < 10) ? "0" + horas : horas;
    minutos = (minutos < 10) ? "0" + minutos : minutos;
    segundos = (segundos < 10) ? "0" + segundos : segundos;
    var horaActual = horas + ":" + minutos + ":" + segundos;
    document.getElementById('reloj').innerHTML = horaActual;
}
setInterval(mostrarHora, 1000);  