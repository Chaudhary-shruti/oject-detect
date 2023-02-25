img = ""
status=""
object=[]
function preload() {
    img = loadImage("dog_cat.jpg")
}
function draw() {
    //image(img, 0, 0, 640, 420)
    //fill("red")
    //textSize(23)
    //text("dog", 220, 85)
    //noFill()
    //rect(200, 70, 250, 250)
    //fill("red")
    //textSize(23)
    //text("cat", 300, 140)
    //noFill()
    //rect(300, 120, 250, 250)
    if(status !=''){
        for(i=0; i<object.length; i++){
           fill("red")
           text(object[i].label, object[i].x, object[i].y);
           noFill()
           stroke("red")
           rect(object[i].x, object[i].y, obect[i].width, object[i].height)
        }
    }

}
function setup() {
    canvas = createCanvas(640, 420)
    canvas.center()
    object_detector = ml5.objectDetector("cocosst", modelLoaded)
    document.getElementById("status").innerHTML="status: detecting objects"

}

function modelLoaded() {
    console.log("Model is loaded")
    status=true;
    object_detector.detect(img,gotResult)
}

function gotResult(error,results){
if (error) {
    console.log(error)
} else {
    console.log(results);
    object=results;
}
}