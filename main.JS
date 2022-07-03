function setup(){
    canvas = createCanvas(650 , 500);
    canvas.position(200 , 300);
    video =createCapture(VIDEO);
    video.hide();

    tint_color ="";
}

function draw(){
    image(video , 0,0,650,500);
    tint(tint_color);
}

function take_snapshot(){
    save("Filter_app_img.png");
}

function Filter_tint(){
    tint_color = document.getElementById("color_name");
    
}