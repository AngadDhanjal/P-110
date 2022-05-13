// https://teachablemachine.withgoogle.com/models/nvGwpICmy/


predicition_1 = "";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src ="'+data_uri+'"/>'; 
    });
}

console.log('ml5 version',ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/nvGwpICmy/',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded');

}

function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = "The First predicition is "+predicition_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data1);
    synth.speak(utterThis);
}

