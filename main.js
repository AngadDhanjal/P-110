


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

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/nvGwpICmy/model.json',modelLoaded);

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

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}

function gotResult(error,results)
{
    if(error){
    console.log(error);

    }else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        predicition_1=results[0].label;
        speak();
        if(results[0].label=="victory")
        {
            document.getElementById("update_emoji").innerHTML="&#9996;";
            document.getElementById("quote").innerHTML = "That was a Marvelous Victory";
        }
        if(results[0].label=="best")
        {
            document.getElementById("update_emoji").innerHTML="&#128077;";
            document.getElementById("quote").innerHTML = "All the best";

        }
        if(results[0].label=="amazing")
        {
            document.getElementById("update_emoji").innerHTML="&#128076;";
            document.getElementById("quote").innerHTML = "This is looking amazing";

        }
        if(results[0].label=="Yo")
        {
            document.getElementById("update_emoji2").innerHTML="&#129304;";
            document.getElementById("quote").innerHTML = "Yo Yo ";
        }
        if(results[0].label=="fist")
        {
            document.getElementById("update_emoji2").innerHTML="&#9994;";
            document.getElementById("quote").innerHTML = "fist of hand";

        }
    }
}