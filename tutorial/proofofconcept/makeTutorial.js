/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


let inputs = [];


function getFormInfo(){
    var strFirstName = document.getElementById("txtFName").value;
    var strLastName = document.getElementById("txtLName").value;
    var strEmail = document.getElementById("txtEmail").value;
    
    let input = {
       fname: strFirstName,
       lname: strLastName,
       email: strEmail
    };
    
    inputs.push(input);
    console.warn(input);
    
    var result = strFirstName + " " + strLastName + "has been added to our email list. " + strEmail +
            " will now recieve emails with information about promotions and discounts";        
 
    
    alert(result);
    
    //saves to local storage
    localStorage.setItem("InputList", JSON.stringify(inputs));
    inputs.forEach(displayInputs);
                
    }
    
    /*
    document.getElementById("bt").addEventListener('click', function() {
        var strFirstName = document.getElementById("txtFName").value;
        var strLastName = document.getElementById("txtLName").value;
        var strEmail = document.getElementById("txtEmail").value;
        
        var value = strFirstName + " " + strLastName + " " + strEmail; 
        document.getElementById("resultHolder").innerText = value + "\n";
    });
    */
    
    let saveFile = () => {
            // Get the data from each element on the form.
            const firstName = document.getElementById("txtFName");
            const lastName = document.getElementById("txtLName");
            const email = document.getElementById("txtEmail");


            if (validateEmail(email) && validateName(firstName) && validateName(lastName)){
            // This variable stores all the data.
            let data = "\r First Name: " + firstName.value + " \r\n " + "Last Name: " + lastName.value + " \r\n " + "Email: " + email.value;
            console.log(data); //printing form data into the console
            // Convert the text to BLOB.
            const textToBLOB = new Blob([data], { type: "text/plain" });
            var filename = new Date();
            var month =new Date(); //months from 1-12
            month = month.getMonth();

            var day = new Date();
            var day = day.getUTCDate();

            var year = new Date();
            var year = year.getUTCFullYear();

            newdate = year + "/" + month + "/" + day;
            const sFileName = filename; // The file to save the data.

            let newLink = document.createElement("a");
            newLink.download = new Date();

            if (window.webkitURL !== null) {
                newLink.href = window.webkitURL.createObjectURL(textToBLOB);
            } else {
                newLink.href = window.URL.createObjectURL(textToBLOB);
                newLink.style.display = "none";
                document.body.appendChild(newLink);
            }

            newLink.click();
            getFormInfo();
        }
        else{
            alert("Invalid first name, last name, or email address");
        }
        };


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //  return re.test(String(email).toLowerCase());
    
    if (email.value.match(re)){
        return true;
    }
    else{
        return false;
    }

};

function validateName(name){
    var letters = /^[A-Za-z]+$/;
    if (name.value.match(letters)){
        return true;
    }
    else{
        return false;
    }
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};