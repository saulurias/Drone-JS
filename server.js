console.log("Iniciando server de Node");


var arDrone = require("ar-drone");
var drondinez = arDrone.createClient(); //creamos un cliente de la variable ardrone
//ar drone es una libreria que tiene todo para programar un drone

//drone control code
function bateria(){
	console.log("Bateria: "+drondinez.battery());
}
function despegar_drone(){
	drondinez.config("control:altitude_max", 100000); //le decimos al drone que se elve muy alto
	drondinez.takeoff();
	rotar_drone(); 
    console.log("Si tubiera un Drone estaria volando :p")
}
function rotar_drone(){
	drondinez.stop();
	drondinez.calibrate(0);
	drondinez.up(1); 
	console.log("Si tubiera un Drone estaria rotando ");

}
function aterrizar__drone(){
	drondinez.stop();
	drondinez.land();
	console.log("Si tubiera un Drone aterrizaria con estilo");
}
//express y servidor web
var express = require ("express");
var web = express();
var servidor;

servidor = web.listen(8080, function(){
	console.log("Servidor arrancado :D");
});

web.get("/", function(req,res){
	console.log("Home");
	bateria();
	res.sendfile("opciones.html");
});
web.get("/despegar", function(req,res){
	console.log("Despegando");
	bateria();
	despegar_drone();
	res.sendfile("opciones.html")
});
web.get("/aterrizar", function(req,res){
	console.log("Aterrizando");
	bateria();
	res.sendfile("opciones.html");
	aterrizar__drone();
});