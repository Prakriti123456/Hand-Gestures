//https://teachablemachine.withgoogle.com/models/A8VKW9MVr/model.json



prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version: ', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/A8VKW9MVr/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data1 = "The first prediction is " + prediction_1;
    speak_data2 = "And the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);

    synth.speak(utterThis);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        document.getElementById("result_gesture_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if (results[0].label == "Good") {
            document.getElementById("update_emoji").innerHTML = "&#128076;";
        }
        if (results[0].label == "Thumbs Up") {
            document.getElementById("update_emoji").innerHTML = "&#128077;";
        }
        if (results[0].label == "Thumbs Down") {
            document.getElementById("update_emoji").innerHTML = "&#128078;";
        }
        if (results[0].label == "Fist") {
            document.getElementById("update_emoji").innerHTML = "&#9994;";
        }
        if (results[0].label == "Hand") {
            document.getElementById("update_emoji").innerHTML = " &#128400;";
        }
        if (results[0].label == "Vulcan salute") {
            document.getElementById("update_emoji").innerHTML = "&#128406;";
        }
        if (results[0].label == "Swag / You Rock!") {
            document.getElementById("update_emoji").innerHTML = "&#129304;";
        }


        if (results[1].label == "Good") {
            document.getElementById("update_emoji2").innerHTML = "&#128076;";
        }
        if (results[1].label == "Thumbs Up") {
            document.getElementById("update_emoji2").innerHTML = "&#128077;";
        }
        if (results[1].label == "Thumbs Down") {
            document.getElementById("update_emoji2").innerHTML = "&#128078;";
        }
        if (results[1].label == "Fist") {
            document.getElementById("update_emoji2").innerHTML = "&#9994;";
        }
        if (results[1].label == "Hand") {
            document.getElementById("update_emoji2").innerHTML = " &#128400;";
        }
        if (results[1].label == "Vulcan salute") {
            document.getElementById("update_emoji2").innerHTML = "&#128406;";
        }
        if (results[1].label == "Swag / You Rock!") {
            document.getElementById("update_emoji2").innerHTML = "&#129304;";
        }
    }
}