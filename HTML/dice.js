a=document.getElementById("clicker");
b=document.getElementById("name");
a.onclick=function(){
    b.style.display="none";
    a.onclick=function(){
        b.style.display="block";
    }
}