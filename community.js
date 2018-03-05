var tup = 0;
var tdown = 0;
var ttt1=0;
var ttt2=0;
let threadCounter = 3;

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

let click_post = false;

function create_post() {
	let dst = document.getElementById('newPost');
	if (click_post) {
		dst.style.height = 0;
		dst.style.display = "none";
		click_post = !click_post;
	}
	else {
		dst.style.height = "200px";
		dst.style.display = "block";
		click_post = !click_post;
	}
}

function expandThread(id) {
	console.log(id);
	let dst = document.getElementById(id);
	let currHeight = dst.clientHeight;
	if (currHeight < 100) {
		dst.getElementsByTagName("ol")[0].style.display = "block";
		dst.getElementsByTagName("ol")[0].style.height = "100%";
	}
	else {
		dst.getElementsByTagName("ol")[0].style.display = "none";
		dst.getElementsByTagName("ol")[0].style.height = 0;
	}
}

function addComment(id) {
	let dst = document.getElementById(id);
	let src = dst.getElementsByTagName("ol")[0];
	src = src.getElementsByTagName("textarea")[0];
	if (src.value == "") {
		console.log("empty comment");
		window.alert("Please write a comment before submitting.")
		return;
	}
	let html =
	`
	<li class="comment-list">
		<div class="comment-name">
			<img src="images/touxiang6.jpg">
			<h2>Hang Wu</h2>
		</div>
		<p>${src.value}</p>
	</li>
	`;
	console.log(html);
	let target = document.getElementById(`${id}_comment`);
	target.insertAdjacentHTML('beforebegin', html);
	src.value = "";
}

function addThread() {
	let dst = document.getElementById("newPost");
	let title = dst.getElementsByTagName("textarea")[0];
	let body = dst.getElementsByTagName("textarea")[1];
	if (title.value == "" || body.value == "") {
		console.log("not enough content!");
		window.alert("Insufficient information to create thread. Please complete all fields.");
		return;
	}
	let id = threadCounter;
	threadCounter++;
	let html =
	`
	<li id="thread_${id}" class="community-list1">
    <div class="community-name">
      <img src="images/touxiang6.jpg">
      <h2>Hang Wu</h2>
    </div>
    <h1 onclick="expandThread('thread_${id}')">${title.value}</h1>
		<ol>
			<hr>
			<p>${body.value}</p>
			<div id="thread_${id}_comment" class="community-postcomment">
				<h2>Comment:</h2><br>
				<textarea class="your-comment" id="text-comment"></textarea>
				<br>
				<input class="submit_button" type="button" value="Submit" id="comment_submit" onclick="addComment('thread_${id}')">
			</div>
		</ol>
  </li>
	`;
	console.log(id);
	console.log(html);
	let currThread = id - 1;
	let target = document.getElementById(`thread_${currThread}`);
	target.insertAdjacentHTML('afterend', html);
	title.value = "";
	body.value = "";
}
