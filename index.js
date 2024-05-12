
//async is used when using promise function which uses await 
function fetchResponse(){
  
    let userid = document.getElementById("userID");
    let useridnum = userid.value;
    httpreq = "http://jsonplaceholder.typicode.com/users/" + useridnum

     fetch(httpreq)
    .then(response => response.json())
    .then(data => {
        //find the messagediv
    let messageDiv = document.getElementById("messageId");
    messageDiv.innerText = data.email + data.username + data.name ; 

     });


    
}