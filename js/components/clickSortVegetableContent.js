/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";
function clickSortVegetableContent() {
    // turn off the "auto variable declaration" feature of the browser.
    // So, if we mispell a variable name, the browser will not auto-declare a new variable.  


    var ele = document.createElement("div");
    ele.classList.add('clickSort');
    ajax("json/vegetables.json", callBack, ele);

    function callBack(userList) {
        var newVegetableList = [];
        for (var i = 0; i < userList.length; i++) {
            newVegetableList[i] = {};
            newVegetableList[i].Image = SortableTableUtils.makeImage(userList[i].image, "4rem");
            newVegetableList[i].Vegetable_Id = SortableTableUtils.makeNumber(userList[i].vegetableId);
            newVegetableList[i].Vegetable_Name = SortableTableUtils.makeText(userList[i].vegetableName);
            newVegetableList[i].Price = SortableTableUtils.makeNumber(userList[i].price);
            newVegetableList[i].Consumer_Rating = SortableTableUtils.makeText(userList[i].consumerRating);
            newVegetableList[i].Manufacturer_Id = SortableTableUtils.makeNumber(userList[i].webUserId);
        }
        
        var tableList = {
            title: "Vegetable List",
            objList: newVegetableList,
            sortOrderPropName: "Vegetable_Id",
            sortIcon: "icons/sortUpDown16.png"
        };

        var table = makeClickSortFilterTable(tableList);
        //var table = makeClickSortFilterTable("User List", newUserList, "User_Email", "icons/sortUpDown16.png");
        ele.appendChild(table);

    }
    return ele;
}
