function slideshowContent(){
    "use strict";
    
    var content = `
        <h3>My Slide Show Components</h3>
        <p>
            I hope you enjoy my slide show pictures !!!
        </p>
    `;
    
    var ele = document.createElement("div");
    ele.innerHTML = content; // the HTML code specified just above...
    var twoObjects = document.createElement("div");
    twoObjects.classList.add('flexContainer'); // see styling in this file, above...
    ele.appendChild(twoObjects);
    
    
    var myObjList = [
                {src : "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic1.png", caption: "Cute cat"},
                {src: "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic2.png", caption: "Good cat"},
                {src: "http://cis-linux2.temple.edu/~sallyk/pics_cat/pic3.png", caption: "Small cats"}
            ];

            var mine = MakeSlideShow(myObjList);
            twoObjects.appendChild(mine);
            
     
            mine.setPicNum(0);

            ajax("json/cars.json", processCarList, document.getElementById("secondSlideId"));

            function processCarList(carList) {

   
                for (var i = 0; i < carList.length; i++) {
                    carList[i].src = carList[i].photo;
                    carList[i].caption = carList[i].make;
                    console.log("image " + i + " " + carList[i].image);
                }

                
                var ss = MakeSlideShow(carList);
                twoObjects.appendChild(ss);

                ss.setPicNum(2);
            }
            
            ajax("json/users.json", processUserList, document.getElementById("thirdSlideId"));

            function processUserList(userList) {

                for (var i = 0; i < userList.length; i++) {
                    userList[i].src = userList[i].image;
                    userList[i].caption = userList[i].userEmail;
                    console.log("image " + i + " " + userList[i].image);
                }

                
                var ss2 = MakeSlideShow(userList);
                twoObjects.appendChild(ss2);
                ss2.setPicNum(2);
            }
            return ele;
}