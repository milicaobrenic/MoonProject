
//niz sa nazivima dana
var Dan= new Array();
	Dan[0]="Nedelja";
	Dan[1]="Ponedeljak";
	Dan[2]="Utorak";
	Dan[3]="Sreda";
	Dan[4]="Četvrtak";
	Dan[5]="Petak";
	Dan[6]="Subota";

//niz sa nazivima meseci
var Meseci=new Array();
	Meseci[0]="Januar";
	Meseci[1]="Februar";
	Meseci[2]="Mart";
	Meseci[3]="April";
	Meseci[4]="Maj";
	Meseci[5]="Jun";
	Meseci[6]="Jul";
	Meseci[7]="Avgust";
	Meseci[8]="Septembar";
	Meseci[9]="Oktobar";
	Meseci[10]="Novembar";
	Meseci[11]="Decembar";

//niz sa brojem dana u mesecu
var Mdani=new Array();
	Mdani[0]=31;
	Mdani[1]=28;
	Mdani[2]=31;
	Mdani[3]=30;
	Mdani[4]=31;
	Mdani[5]=30;
	Mdani[6]=31;
	Mdani[7]=31;
	Mdani[8]=30;
	Mdani[9]=31;
	Mdani[10]=30;
	Mdani[11]=31;

//trenutni podaci o vremenu:
var Danas=new Date();
var Datum=Danas.getDate();
var Mesec=Danas.getMonth();
var Dan2=Danas.getDay();
var Godina=Danas.getYear();

var dan3=1;
var i, j;

if (Godina<2000){
	Godina+=1900;
}

//racunanje prestupne godine
if ((Godina%400==0) || ((Godina%4==0) && (Godina%100!=0))){
	Mdani[1]=29;
}

//odredjuje dan u nedelji za prvi dan u mesecu
var Mprvi=Danas;
Mprvi.setDate(1);
var Dann2=Mprvi.getDay();


//pravimo kalendar za tekuci mesec
document.write("<BR><BR><TABLE BORDER=5 BORDERCOLOR=BLUE>" +
		"<TR><TH COLSPAN=7 ALIGN=CENTER>" + Meseci[Mesec] + " " + Godina + "</TH></TR>");
document.write("<TR><TH>Ned</TH><TH>Pon</TH><TH>Uto</TH><TH>Sre</TH>" +
		"<TH>Cet</TH><TH>Pet</TH><TH>Sub</TH></TR>");
	for (i=0; i<6; i++){
		//upisuje dane u redove od Pon do Ned
		document.write("<TR>");
		//ova petlja odredjuje koji se datum prikazuje i u kojoj koloni
		for (j = 0; j < 7; j++) {
			//stavlja prazne celije na pocetku i kraju meseca
			if ((i == 0 && j < Dann2) || (dan3 > Meseci[Mesec])) {
				document.write("<TD><BR></TD>");
			} 
			else {
				if (dan3 == Datum) {
//oznacava trenutni dan i prikaz datuma za ovu celiju tabele
					document.write("<TD><FONT COLOR=red>" + dan3 + "</FONT></TD>");
				} else {
//samo prikazuje datum za ovu celiju
					document.write("<TD>" + dan3 + "</TD>");
				}
//azuriramo broj dana
				dan3++;
			}
		}
//kraj reda; utvrdjuje da li je potrebno jos redova
document.write("</TR>");
	if (dan3 > Meseci[Mesec]) {
			i = 6;
		}
	}
//kraj tabele
document.write("</TABLE>");


 
