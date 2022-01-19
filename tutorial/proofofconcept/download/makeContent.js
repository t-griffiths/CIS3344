"use strict";
function makeContent(id, object) {
    var tag = document.createElement("div");
    tag.setAttribute('id', 'bodyContent');
    var head = document.createElement("h2");
    head.innerText = object.frmtitle;
    tag.appendChild(head);
    var button = document.createElement("button");
    button.setAttribute('id', object.btnId);
    button.setAttribute('class', 'btnClass');
    button.innerText = object.btnInnerText;
    tag.appendChild(button);
    //creates the div that opens on button click
    //we set modConId content to null on form span click
    var mod1 = document.createElement("div");
    mod1.setAttribute('id', object.modId);
    mod1.setAttribute('class', 'modal');
    tag.appendChild(mod1);

    var element = document.getElementById(id);
    element.appendChild(tag);

    function formContent() {
        var mod1con = document.createElement("div");
        mod1con.setAttribute('id', object.modConId);
        mod1con.setAttribute('class', 'modal-content');
        mod1.appendChild(mod1con);
        var span1 = document.createElement("span");
        span1.setAttribute('class', 'close');
        span1.innerText = "X";
        mod1con.appendChild(span1);

        var modDiv = document.getElementById(object.modId);
        modDiv.appendChild(mod1con);
    }
    ;



    var modal = document.getElementById(object.modId);
    var btn = document.getElementById(object.btnId);


    btn.onclick = function () {
        formContent();
        var theDiv = makeForm(object);
        var c = document.getElementById(object.modConId);
        c.appendChild(theDiv);
        modal.style.display = "block";
        var span = document.getElementsByClassName('close')[0];

        span.onclick = function () {
            modal.style.display = "none";
            var modalcon = document.getElementById(object.modId);
            modalcon.innerHTML = null;
        };

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
                var modalcon = document.getElementById(object.modId);
                modalcon.innerHTML = null;
            }
        };
    };


    function makeForm(object) {
        function createDiv(theClass) {
            var div = document.createElement("div");
            if (typeof theClass === "string") {
                div.className = theClass;
            }
            return div;
        }
        function createInput(text, theClass, type, thePlaceholder, theId) {
            var input = document.createElement("input");
            type = "input";
            input.setAttribute("type", type);
            input.className = theClass;
            input.textContent = text;
            input.placeholder = thePlaceholder;
            input.id = theId;
            return input;
        }

        function createButton(text, theClass, type, theID) {
            var button = document.createElement("button");
            type = "button";
            button.addEventListener('click', function () {
                validateInputs(object);
            });
        //    action = "mail.php";
            button.setAttribute("type", type);
            button.className = theClass;
            button.textContent = text;
            button.id = theID;
            return button;
        }
        var mainDiv = createDiv("container");
        var rowDiv = mainDiv.appendChild(createDiv("row"));
        var colDiv = rowDiv.appendChild(createDiv("col-md-12"));
        var inputDivs = mainDiv.appendChild(createDiv("inputDivs"));
        var linebreak = document.createElement('br');
        inputDivs.appendChild(createInput(object.input1, "i", "text", object.input1str, object.input1));
        var linebreak = document.createElement('br');
        inputDivs.appendChild(linebreak);
        inputDivs.appendChild(createInput(object.input2, "i", "text", object.input2str, object.input2));
        var linebreak = document.createElement('br');
        inputDivs.appendChild(linebreak);
        inputDivs.appendChild(createInput(object.input3, "i", "text", object.input3str, object.input3));
        colDiv.appendChild(document.createElement("h3")).textContent = object.frmtitle;
        var linebreak = document.createElement('br');
        inputDivs.appendChild(linebreak);
        inputDivs.appendChild(createButton("Submit", "btnSubmit", "submit", "bt"));

        return mainDiv;
    }

    let validateInputs = (object) => {
        // Get the data from each element on the form.
        const item1 = document.getElementById(object.input1);
        const item2 = document.getElementById(object.input2);
        const item3 = document.getElementById(object.input3);


        if (validateEmail(item3) && validateString(item1) && validateString(item2)) {
            getFormInfo(object);
        }
    };


    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email.value.match(re)) {
            return true;
        } else {
            alert("Invalid email address");
            return false;
        }

    }
    ;

    function validateString(name) {
        var letters = /^[A-Za-z]+$/;
        if (name.value.match(letters)) {
            return true;
        } else {
            alert("Invalid string");
            return false;
        }
    }
    ;

}

let inputs = [];
function getFormInfo(object) {
    var item1 = document.getElementById(object.input1).value || "";
    var item2 = document.getElementById(object.input2).value || "";
    var email = document.getElementById(object.input3).value || "";



    let input = {
        input1: item1,
        input2: item2,
        input3: email
    };

    var string = "{" + object.input1 + ": " + item1 + " " + object.input2 + ": " + item2 + " " + object.input3 + ": " + email + "}";

    console.warn(string);
    inputs.push(string);
    //saves to local storage
    localStorage.setItem("InputList", JSON.stringify(inputs));


    var result = item1 + " " + item2 + object.result1 + email +
            object.result2;


    alert(result);
}
