function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
}

classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/KQirb6Nea/model.json',modelReady)

function moddelReady() {
    classifier.classify(gotReults)
}