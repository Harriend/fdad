noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function preload(){
}

function setup(){
    canvas = createCanvas(500,450);
    canvas.position(1000,200);

    video = createCapture(500,500);
    video.position(150 , 50);
    video.size(500,800);
    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on('pose' , gotPoses)
}

function draw(){
    background('lightblue')
    fill('black')
    square(noseX , noseY , difference);
    document.getElementById("widthandheight").innerHTML = difference + "px";
}

function modelLoaded(){
    console.log('posenet is initalized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 94;
        noseY = results[0].pose.nose.y - 95;
        console.log("nose x = " +noseX + "nose y = " +noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("left wrist x = " + leftWristX + "  right wrist x = " + rightWristX + "  difference" + difference);

    }

}