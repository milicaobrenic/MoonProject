function initialize(){
	var c=document.getElementById("canvas");
	var ctx=c.getContext("2d");

	
	//linearni gradijent i tekst
	ctx.font="30px Verdana";
	var gradient=ctx.createLinearGradient(300,50,c.width,0);
	gradient.addColorStop("0","magenta");
	gradient.addColorStop("0.5","black");
	gradient.addColorStop("1.0","white");
	ctx.strokeStyle=gradient;
	ctx.strokeText("Welcome to my canvas!",270,50);

	//duz
	ctx.beginPath();	
	ctx.moveTo(0,590);
	ctx.lineTo(999, 590);
	ctx.lineWidth=5;
	ctx.strokeStyle="green";
	ctx.stroke()

	//kruzni gradijent
	var grd = ctx.createRadialGradient(100, 100, 50, 100, 100, 100);
	grd.addColorStop(0, 'white');
	grd.addColorStop(1, 'green');
	ctx.fillStyle = grd;
	ctx.fillRect(0, 0, 200, 200);

	//pravougaonik (tacnije kvadrat)
	ctx.rect(700, 20, 100, 100);
	ctx.fillStyle="yellow";
	ctx.fill();

	//luk 
	ctx.beginPath();
	ctx.arc(50,250,40,0,1*Math.PI);
	ctx.stroke();
	ctx.closePath();

	//krug
	ctx.beginPath();
	ctx.arc(200,270,40,0,2*Math.PI);
	ctx.stroke();
	ctx.closePath();

	//slika
	var img=document.getElementById("slika");
	ctx.drawImage(img, 500, 200);

	//tekst
	ctx.font = "20px Arial";
	ctx.fillStyle="black";
	ctx.fillText("Posto nisam uspela da uklopim sve elemente u animaciju, morala sam da napravim i ovaj poseban kanvas...  :(",10,550);
}