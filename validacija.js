function prvoPitanje(){
	var a=document.forma.prvoP.value;
	var i, vel=false, br=false;
	if (a.charAt(0)>='A' && a.charAt(0)<='Z') vel=true;
	for (i=0; i<a.length;i++){
		if(a.charAt(i)>='0' && a.charAt(i)<='9') br=true;
	}
	return vel && !br;
}

function prvoPitanje2(){
	var prvoS=false, drugoS=false;
	var a=document.forma.prvoP.value;
	if (a.charAt(0)=='N') prvoS=true;
	if (a.charAt(4)=='A') drugoS=true; 
	return prvoS && drugoS;
}

function komentar(){
	return (document.forma.komentari.value.length>=50 && document.forma.komentari.value.length<=300);
}

function cetvrtoPitanje1(){
	var duz=false;
	if(document.forma.cetvrtoPitanje.value.length>0 && document.forma.cetvrtoPitanje.value.length<2) duz=true;
	return duz;
}

function cetvrtoPitanje2(){
	var i=false;
	var b=document.forma.cetvrtoPitanje.value;
	if(b.charAt(0)>='1' && b.charAt(0)<='5') i=true;
	return i;
}

function trecePitanje(){
 	var t=false;
 	if(!(document.forma.selekt.value==-1)) t=true;
 	return t;
}

function komentar2(){
	var i, brTac, brojac=0;
	var m=document.forma.komentari.value;
	for (i=0; i<=m.length; i++){
		if(m.charAt(i)=='.'){
			brojac++;
		}
	}
	if(brojac==3) brTac=true;
	return brTac;
} 


function rezultat(){
	if(!prvoPitanje()){
		alert ("Pocetno slovo mora biti veliko i unos ne sme sadrzati cifre u prvom pitanju.");
		return false;
	}
	else if (!prvoPitanje2()){
		alert ("Prvo slovo unosa mora biti N, a cetvrto A u prvom pitanju.");
		return false;
	}
	else if(!trecePitanje()){
		alert("Molimo odaberite jednu od opcija u trecem pitanju.");
		return false;
	}
	else if (!cetvrtoPitanje1()) {
		alert("Broj mora biti jednocifren u cetvrtom pitanju.");
		return false;
	}
	else if(!cetvrtoPitanje2()){
		alert("Broj biti u intervalu od 1 do 5 u cetvrtom pitanju.");
		return false;
	}
	else if (!komentar()) {
		alert("Duzina komenara mora biti izmedju 50 i 300 slova.");
		return false;
	}
	else if(!komentar2()){
		alert("Komentar mora da sadrzi 3 tacke.");
		return false;
	} 
}