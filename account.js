
document.getElementById("create").onclick = function(){
  a1=document.getElementById("username1").value;
  a2=document.getElementById("password1").value;
  if((a1=="")||(a2=="")){
    javascript:$('body').dailog({type:'danger',isInput:false,title:'Warning',discription:'Enter username and password', bottons:['OK']},function(ret) {if(ret.index===0){;};});

  }
  else{
    window.location.href='home.html?twitter=false&facebook=false&google=false&account=true';
  }

}
