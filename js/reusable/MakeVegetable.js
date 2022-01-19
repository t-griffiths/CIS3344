function MakeVegetable (theName, theHarvestDate, thePrice, theStyle) {

    var vegObj = document.createElement("div"); // new div that will show current properties of the car object.

    // declare private data members (uses JS Closure property which is like Java Static Variables).
    var name = theName;
    var price = thePrice;
        var harvest = theHarvestDate;

    // Leaving this one public, just for comparison purposes
    vegObj.harvest = theHarvestDate;            // first use of “harvest” creates custom public property

    
    vegObj.display = function ( ) {           // create custom public method “display”
        // make the current properties visible on the page
        vegObj.innerHTML = "Vegetable: " + name + "<br/>Harvest Date: " + harvest +
                "<br/>Price: " + price;
    };

    vegObj.setHarvest = function (newHarvest) { // create custom public method “setCondition”
        harvest = newHarvest;
        vegObj.display(); // show updated property on the page
    };
    
    vegObj.setPrice = function (newPrice){
        price = newPrice;
        vegObj.display();
    };
    
    vegObj.setName = function (newName){
        name = newName;
        vegObj.display();
    };

    vegObj.display();  // call the display fn to show initial properties on the page 

    return vegObj;  // returns a div enhanced by functions and data members. This div has to be added to the UI.
}