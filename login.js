document.getElementById("clicklogin").onclick = function(){
  a1=document.getElementById("username").value;
  a2=document.getElementById("password").value;
  if((a1=="")||(a2=="")){
    javascript:$('body').dailog({type:'danger',isInput:false,title:'Warning',discription:'You must fill the blank', bottons:['OK']},function(ret) {if(ret.index===0){;};});

  }
  else{
    window.location.href='home.html?twitter=false&facebook=false&google=false&account=true';
  }

}
