song1 = "";
song2 = "";

function preload()
{
    song1 = loadSound("Harry_Potter_Theme_Song.mp3");
    song2 = loadSound("Peter_Pan_Music.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function play()
{
    song1.play();
    song2.play();
}