var i=0;
var n;
var t0 = setInterval(leftTime, 1500);

m=sessionStorage.getItem('testKey');
document.getElementById("hour1").innerHTML=m;

function showTime(){
element=document.getElementById("lock").textContent;
if (element=="Time Left"){
	document.getElementById("hour1").style.color = "blue";
	document.getElementById("lock").innerHTML="Hide Time";
	}
	else {
	document.getElementById("lock").innerHTML="Time Left";
	document.getElementById("hour1").style.color = "black";
	}

}



function leftTime(){
i++;
m=sessionStorage.getItem('testKey');
m = Number(m);
n= m-i;
if (n<=0){
	document.getElementById("hour1").innerHTML = "0";
	document.getElementById("good").style.color = "white";
  document.getElementById("good1").style.color = "white";
	document.getElementById("back").innerHTML = "GO BACK";
	document.getElementById("lock").style.display = "none";
	document.getElementById("move").style.display = "block";
}
else {
	document.getElementById("hour1").innerHTML=n;
}

}

function goBack(){
window.location.href="home.html";


}
