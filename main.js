var AV=window.webkitSpeechRecognition;
var AVN=new AV();

AVN.lang="es-MX";
var TA=document.getElementById("gracias");
var camara=document.getElementById("cam");
function start() {
AVN.start();
TA.innerHTML="0";
}
AVN.onresult=function(event){
console.log(event);
var awa=event.results[0][0].transcript;  
TA.innerHTML=awa;
if (awa=="Toma mi selfie") {
TSV();    
}
};
function TSV(){
var mateo=window.speechSynthesis;
var TV="toMANdo Tu SelfI En 5 sEgunDos";
var YNMV=new SpeechSynthesisUtterance(TV);
mateo.speak(YNMV);
Webcam.attach(camara);
setTimeout(function(){
TMS();
DTS();
},4000)
};
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    jpeg_quality: 90
 });

function TMS() {
   Webcam.snap(function(data_uri){
    //codigo muy aburrido llamado 
    document.getElementById("techo").innerHTML="<img id='selfie' src='"+data_uri+"'/>";
   }) 
};
function DTS() {
    var DOW=document.getElementById("DOW");
    var img=document.getElementById("selfie").src;
    DOW.href=img;
}; 
   ;

;
;
;