function MakeSlideShow (objList) {

    "use strict";
    
    var slideShow = document.createElement("div");

    // div to hold images 
    var div = document.createElement("div");
    slideShow.appendChild(div);

    var myImage = document.createElement("img");
    div.appendChild(myImage);

    var myCaption = document.createElement("p");
    div.appendChild(myCaption);
    
    var backButton = document.createElement("button");
    backButton.innerHTML = " &lt; ";
    slideShow.appendChild(backButton);

    var fwdButton = document.createElement("button");
    fwdButton.innerHTML = " &gt; ";
    slideShow.appendChild(fwdButton);


    var picNum = 0;
    setPic(); 

    function setPic() {
        myImage.src = objList[picNum].src;
        
        myCaption.innerHTML = objList[picNum].caption;
    }


    function nextPic() {

        if (picNum < objList.length-1) {
            picNum++;
        }
        setPic();
    }

    function prevPic() {

        if (picNum > 0) {
            picNum--;
        }
        setPic();
    }

    backButton.onclick = prevPic;
    fwdButton.onclick = nextPic;

    slideShow.setPicNum = function (newNum) {
        if ((newNum >= 0) && (newNum < objList.length)) {
            picNum = newNum;			
            setPic();
        }
    };

    return slideShow;
}