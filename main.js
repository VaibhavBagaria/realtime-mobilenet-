object_name="";
object_accuracy="";
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet',modelLoaded)
}

function draw() {
  image(video,0,0,300,300);
  classifier.classify(video,GotResult)
}

function modelLoaded(){
  console.log("Model is loaded");
}

function  GotResult(error,result) {
  if(error){
    console.log(error);
  }
  else{
    console.log(result);
    object_accuracy=(result[0].confidence*100).toFixed(2);
    object_name=result[0].label;
    document.getElementById("Result_ObjectName").innerHTML=object_name
    document.getElementById("Result_ObjectAccuracy").innerHTML=object_accuracy
  }
}

