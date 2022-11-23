noseX=0;
noseY=0;
function preload (){
clown_nose=loadImage('https://www.google.com/url?sa=i&url=http%3A%2F%2Fclipart-library.com%2Ffree%2Fclown-nose-png.html&psig=AOvVaw3Q0cwoSGOJA9g-jf657s7k&ust=1669289723524000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPDt4fmaxPsCFQAAAAAdAAAAABAF');
}
function setup (){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video=size(300,300);
    video.hide()

    poseNet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,30,30);
}
function take_snapshot(){
    save('filter.png');
}

function modelLoaded(){
    console.log("PoseNet Is Intitialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
    }
}