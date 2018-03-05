var tup = 0;
var tdown = 0;
var ttt1=0;
var ttt2=0;

function up() {
if(tup==0){
	var gdn;
	gdn=document.getElementById('goodnumber').innerHTML;
	gdn=Number(gdn)+1;
	document.getElementById('goodnumber').innerHTML = gdn;
	tup=1;
}
}



function down() {
if(tdown==0){
	var gdn2;
	gdn2=document.getElementById('badnumber').innerHTML;
	gdn2=Number(gdn2)+1;
	document.getElementById('badnumber').innerHTML = gdn2;
	tdown=1;
}
}

function up1() {
if(ttt1==0){
	var gdn;
	gdn=document.getElementById('goodnumber1').innerHTML;
	gdn=Number(gdn)+1;
	document.getElementById('goodnumber1').innerHTML = gdn;
	ttt1=1;
}
}

function down1() {
if(ttt2==0){
	var gdn2;
	gdn2=document.getElementById('badnumber1').innerHTML;
	gdn2=Number(gdn2)+1;
	document.getElementById('badnumber1').innerHTML = gdn2;
	ttt2=1;
}
}
