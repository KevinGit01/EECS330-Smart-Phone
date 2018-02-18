var t0 = setInterval(showTime, 10);	
/* var t1 = setInterval(timeGo, 1000);	
 */


function showTime(){
elem = document.getElementById("slider").value;
document.getElementById("hour").innerHTML=ToHs(elem);
document.getElementById("min").innerHTML=ToMs(elem);			
}

function timeGo(){
elem2 = document.getElementById("slider").value;
elem2--;
document.getElementById("slider").value=elem2;
}


function ToHs(d) {
	d = Number(d);
    hour = Math.floor(d / 60);
    min = Math.floor(d % 60);
    return `0${hour}`.slice(-1); 
}
						
function ToMs(d) {
	d = Number(d);
    hour = Math.floor(d / 60);
    min = Math.floor(d % 60);
    return `00${min}`.slice(-2); 
}