

var t00 = setInterval(changeValue, 10);	

function changeValue(){
m0=document.getElementById("slider").value;
sessionStorage.setItem('testKey',m0);			
}
