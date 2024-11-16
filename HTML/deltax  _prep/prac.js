let user = {
  "username" : "charan",
  "password" : "10293128"
}

fetch("prac.php",{
  "method": "POST",
  "headers":{
    "Content-Type": "application/json; charset=utf-8"
  },
  "body":JSON.stringify(user)
}).then(function(response){
    return response.text();
}).then(function(data){
    console.log(data);
})