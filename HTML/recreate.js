console.log("working")
a=document.getElementById("ename");
b=document.getElementById("onenter");
c=document.getElementById("para");
b.onclick=function(){
    console.log(a.value);
    c.innerHTML="hello, "+a.value;
    c.style.backgroundColor="grey";
}
