// Naming convention JS file name matches the name of the SINGLE function (or object) defined in the file.


/* For hw:
 * option slect then on button press return function of that vegetable ._.
 */

function vegContent () {
    "use strict";
    
    // create div that will hold two vegs
    var twoVegDOM = document.createElement("div");


    // create first veg div and related buttons/text boxes - add them to twoVegDOM.
    var myVegObj = MakeVegetable("Cucumber", "05/21/21", "$0.99", "vegStyle");
    myVegObj.classList.add("vegStyle");
    twoVegDOM.appendChild(myVegObj);

    var myVegButton = document.createElement('button');
    myVegButton.innerHTML = "Select a vegetable from drop down then press button ";
    twoVegDOM.appendChild(myVegButton);
        myVegObj.classList.add("vegStyle");

  
    var myParent = twoVegDOM.appendChild(myVegButton);  
    var array = ["Cucumber", "Eggplant", "Radish", "Turnip"];

    //Create and append select list
    var myVegSelect = document.createElement("select");
    myVegSelect.id = "vegSelect";
    myParent.appendChild(myVegSelect);

    //Create and append the options
    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        myVegSelect.appendChild(option);
    }
    
    
    myVegButton.onclick = function () {
        console.log("changing veg " + myVegSelect.value);
        
            if(myVegSelect.value === "Cucumber"){
            myVegObj.setName("Cucumber");
            myVegObj.setHarvest("05/21/21");
            myVegObj.setPrice("$0.99");
            
            myVegObj.display();
        }
        else if(myVegSelect.value === "Eggplant"){
            myVegObj.setName("Eggplant");
            myVegObj.setHarvest("09/14/21");
            myVegObj.setPrice("$1.49");
            
            myVegObj.display();
        }
        else if(myVegSelect.value === "Radish"){
            myVegObj.setName("Radish");
            myVegObj.setHarvest("09/01/21");
            myVegObj.setPrice("$2.05");
            
            myVegObj.display();
        }
        else if(myVegSelect.value === "Turnip"){
            myVegObj.setName("Trunip");
            myVegObj.setHarvest("01/13/21");
            myVegObj.setPrice("$0.89");
            
            myVegObj.display();
        }
    };
    
    // add an empty paragraph to separate the two areas on the page.
    var emptyPara = document.createElement('p');
    emptyPara.innerHTML = "&nbsp";  // this is a non breaking space. A regular space is ignored by browser.
    twoVegDOM.appendChild(emptyPara);





    // create second veg div and related buttons/text boxes - add them to twoVegDOM.
    var yourVegObj = MakeVegetable("Cucumber", "05/21/21", "$0.99", "vegStyle");
    yourVegObj.classList.add("vegStyle");
    twoVegDOM.appendChild(yourVegObj);
    
    var yourVegButton = document.createElement('button');
    yourVegButton.innerHTML = 'Select a harvest date from dropdown then press button: ';
    twoVegDOM.appendChild(yourVegButton);
    
    var myParent = twoVegDOM.appendChild(yourVegButton);  
    var datearray = ["05/21/21", "09/14/21", "09/01/21", "01/13/21"];
    
    //Create and append select list
    var yourVegSelect = document.createElement("select");
    yourVegSelect.id = "yourvegSelect";
    myParent.appendChild(yourVegSelect);
    
    //Create and append the options
    for (var i = 0; i < datearray.length; i++) {
        var option = document.createElement("option");
        option.value = datearray[i];
        option.text = datearray[i];
        yourVegSelect.appendChild(option);
    }
    
    yourVegButton.onclick = function () {
        console.log("Changing harvest date selection to:  " + yourVegSelect.value);
        
            if(yourVegSelect.value === "05/21/21"){
            yourVegObj.setName("Cucumber");
            yourVegObj.setHarvest("05/21/21");
            yourVegObj.setPrice("$0.99");
            
            yourVegObj.display();
        }
        else if(yourVegSelect.value === "09/14/21"){
            yourVegObj.setName("Eggplant");
            yourVegObj.setHarvest("09/14/21");
            yourVegObj.setPrice("$1.49");
            
            yourVegObj.display();
        }
        else if(yourVegSelect.value === "09/01/21"){
            yourVegObj.setName("Radish");
            yourVegObj.setHarvest("09/01/21");
            yourVegObj.setPrice("$2.05");
            
            yourVegObj.display();
        }
        else if(yourVegSelect.value === "01/13/21"){
            yourVegObj.setName("Trunip");
            yourVegObj.setHarvest("01/13/21");
            yourVegObj.setPrice("$0.89");
            
            yourVegObj.display();
        }
    };
    // Return the div that has been created by this JS function. 
    // The calling code must then append this div to something 
    // that's already on the page or else you won't see anything. 
    return twoVegDOM;

}