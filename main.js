var bark = 0
var meow = 0
var rawr = 0
var moo = 0
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/YHAoPbubD/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("numberofdetects").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("animal").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %"
        document.getElementById("numberofdetects").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("animal").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('animalimg')

        if (results[0].label == "BARKING") {
            img.src = 'barking.gif';
        }
        else if (results[0].label == "MEOWING") {
            img.src = 'meowing.gif';

        }
        else if (results[0].label == "MOOING") {
            img.src = 'Mooing.gif';
        }
        else{
                img.src = 'roaring.gif';

            }
        }
    }
         
    
