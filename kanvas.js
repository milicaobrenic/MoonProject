var checkbox, c, ctx, canvasWidth, canvasHeight;
var aPoz, aBrz;

function initializeDrawing() {
    checkbox = document.getElementById("anim");
    c = document.getElementById("kanvas");
    ctx = c.getContext("2d");
    canvasWidth = 1000;
    canvasHeight=600;
    aPoz = 0;
    aBrz = 1.5;
    setInterval(draw, 50);
}

function draw() {
    if (checkbox.checked) {
        prva();
    } else {
        druga();
    }
}

function prva(){
    var boja="#CCCC00";
    var bojaP="green";

    crtajMesec(boja);
    crtajZvezdu(boja);
    planeta(bojaP);
    alien();
}

function druga(){
    var boja2="#000033";
    var boja3="#CD9B1D";
    var boja4="black"; 

    crtajMesec(boja2);
    crtajZvezdu(boja3);
    planeta(boja4);
    alien();    
}

function planeta(boja){
    ctx.fillStyle = boja;
    ctx.beginPath();
    ctx.arc(900, 930, 500, 0, 2*Math.PI);
    ctx.fill();
    ctx.closePath();
}

function crtajZvezdu(boja){
    ctx.fillStyle = boja;
    ctx.beginPath();
    ctx.moveTo(345, 450);
    ctx.lineTo(235, 345);
    ctx.lineTo(280, 490);
    ctx.lineTo(200, 360);
    ctx.lineTo(210, 510);
    ctx.lineTo(165, 365);
    ctx.lineTo(135, 515);
    ctx.lineTo(130, 365);
    ctx.lineTo(60, 500);
    ctx.lineTo(90, 350);
    ctx.lineTo(-5, 465);
    ctx.lineTo(60, 330);
    ctx.lineTo(-60, 420);
    ctx.lineTo(35, 305);
    ctx.lineTo(-105, 360);
    ctx.lineTo(20, 270);
    ctx.lineTo(-130, 290);
    ctx.lineTo(10, 235);
    ctx.lineTo(-140, 215);
    ctx.lineTo(10, 200);
    ctx.lineTo(-130, 140);
    ctx.lineTo(10, 160);
    ctx.lineTo(-50, 90);
    ctx.lineTo(40, 130);
    ctx.lineTo(-55, 10);
    ctx.lineTo(65, 100);
    ctx.lineTo(0, -35);
    ctx.lineTo(95, 85);
    ctx.lineTo(70, -65);
    ctx.lineTo(130, 70);
    ctx.lineTo(145, -80);
    ctx.lineTo(165, 70);
    ctx.lineTo(220, -70);
    ctx.lineTo(205, 80);
    ctx.lineTo(285, -50);
    ctx.lineTo(240, 95);
    ctx.lineTo(350, -10);
    ctx.lineTo(265, 120);
    ctx.lineTo(400, 50);
    ctx.lineTo(290, 150);
    ctx.lineTo(435, 115);
    ctx.lineTo(300, 185);
    ctx.lineTo(450, 185);
    ctx.lineTo(305, 220);
    ctx.lineTo(450, 260);
    ctx.lineTo(300, 260);
    ctx.lineTo(430, 330);
    ctx.lineTo(285, 290);
    ctx.lineTo(395, 395);
    ctx.lineTo(265, 320);
    ctx.closePath();
    ctx.fill();
}


function crtajMesec(boja) {
    ctx.beginPath();
    ctx.arc(750, 230, 100, 0, 0.85*Math.PI);
    ctx.fillStyle = boja;
    ctx.fill();
    ctx.closePath();
}

function alien() {
    var img=document.getElementById("alien");
    ctx.drawImage(img, aPoz, 150, 250, 200);
    aPoz += aBrz;
    if (aPoz > canvasWidth + 200)
    {
        aPoz = -200;
    }
}
