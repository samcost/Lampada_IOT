var signal;
function on() {

  	document.getElementById("luz").src="img/lon.jpg";
  	signal++;
}
function off() {

  	document.getElementById("luz").src="img/loff.jpg";
}
function blink() {
	var intervalo = 0;
	var contador = 0;
	while (contador < 10) {
		intervalo += 100;
			setTimeout ("document.getElementById('luz').src='img/lon.jpg';",intervalo);
			intervalo += 100;
			setTimeout ("document.getElementById('luz').src='img/loff.jpg';",intervalo);
			contador++;
	}
	signal++;
}
state = signal;
function sendToServer(state) {

	var KEY = "Q4VGP8XDZL44CXEG";
	//criar um objeto capaz de enviar dados via requisição HTTP GET
	const http = new XMLHttpRequest();
	//prepara um GET passando a váriavel lux como ultimo paramentro do link
	http.open("GET","https://api.thingspeak.com/update?api_key=Q4VGP8XDZL44CXEG&field1=0"+state);
	//envia um GET
	http.send();
	//quando a requisição retornar ele chama o console e imprime o valor gerado
	http.onload = console.log(http.responseText+" "+state);
}