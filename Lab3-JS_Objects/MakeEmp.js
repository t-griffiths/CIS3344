function MakeEmp(theCondition, thePrice, style, theImage) {

    var empObj = document.createElement("div");
    empObj.classList.add(style);

    // condition is public (added after carObj.
    empObj.condition = theCondition;       // first use of “condition” creates custom property

    // price is private (just declared in the MakeCar function)
    var price = thePrice;
    
    var empInfo = document.createElement("div");
    empObj.appendChild(empInfo);


    empObj.display = function ( ) {           // create custom method “display”

        // make the current properties visible on the page
        empInfo.innerHTML = "Employee Name: " + empObj.condition + "<br/> Salary: " +
                formatCurrency(price);
    };

    // Condition setter method
    empObj.setCondition = function (newCondition) {
        empObj.condition = newCondition;
        empObj.display(); // show updated property on the page
    };

    // Create User Interface for setting condition
    var conditionButton = document.createElement("button");
    conditionButton.innerHTML = "Change name to: ";
    empObj.appendChild(conditionButton);

    var newConditionInput = document.createElement("input");
    empObj.appendChild(newConditionInput);

    conditionButton.onclick = function () {
        empObj.setCondition(newConditionInput.value);
    };
    
    empObj.appendChild(document.createElement("br")); // new line
    
    

    // price modifier method
    empObj.changePrice = function (changeRate) {
        var n = Number(changeRate);
        console.log("changing salary by this rate " + n);
        price = price * (1 + n);
        empObj.display(); // show updated price on the page
    };

    // create User interface for changing price
    var priceButton = document.createElement("button");
    priceButton.innerHTML = "Change salary by factor: ";
    empObj.appendChild(priceButton);

    var priceFactor = document.createElement("input");
    empObj.appendChild(priceFactor);

    priceButton.onclick = function () {
        empObj.changePrice(priceFactor.value);
    };

    empObj.log = function () {
        console.log("Condition of car with id " + empObj.id + " is " + empObj.condition + " and price is $" + empObj.price);
    };

    // private function, can only be used within MakeCar
    function formatCurrency(num) {
        return num.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }
    
    empObj.appendChild(document.createElement("br"));
    var empImg = document.createElement("img");
    empImg.src = theImage;
    empObj.appendChild(empImg);
    
    empObj.display(); // show initial properties on the page 
    return empObj;
    
}