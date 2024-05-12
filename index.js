
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
    //messageDiv.innerText =  data.email + data.username + data.name ; //


    let table1 = document.getElementById("userTable");
     fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        for(let i=0; i<data.length; i++) {

           let row = table1.insertRow(0);
           let cell1 = row.insertCell(0);
           let cell2 = row.insertCell(1);
           cell1.innerHTML = data[i].name;
           cell2.innerHTML = data[i].email;
        }
     });

     });


    
}