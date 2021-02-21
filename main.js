canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_x=10;
rover_y=10;
rover_width=100;
rover_height=90;
background_image="mars.jpg";
rover_img="rover.png";
function Add(){
    background_tag=new Image();
    background_tag.onload=uploadbackground;
    background_tag.src=background_image;
    rover_tag=new Image();
    rover_tag.onload=uploadrover;
    rover_tag.src=rover_img;
}
function uploadbackground(){
    ctx.drawImage(background_tag, 0,0,canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_tag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    if(keypressed=='38'){
        up();
    }
    if(keypressed=='40'){
        down();
    }
    if(keypressed=='37'){
        left();
    }
    if(keypressed=='39'){
        right();
    }
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        uploadbackground();
        uploadrover();
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        uploadbackground();
        uploadrover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        uploadbackground();
        uploadrover();
    }
}