/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";
function clickSortUserContent() {
    // turn off the "auto variable declaration" feature of the browser.
    // So, if we mispell a variable name, the browser will not auto-declare a new variable.  


    var ele = document.createElement("div");
    ele.classList.add('clickSort');
    ajax("json/users.json", callBack, ele);

    function callBack(userList) {
        var newUserList = [];
        for (var i = 0; i < userList.length; i++) {
            newUserList[i] = {};
            newUserList[i].Image = SortableTableUtils.makeImage(userList[i].image, "4rem");
            newUserList[i].Manufacturer_ID = SortableTableUtils.makeNumber(userList[i].webUserId);
            newUserList[i].User_Email = SortableTableUtils.makeText(userList[i].userEmail);
            newUserList[i].Birthday = SortableTableUtils.makeDate(userList[i].birthday);
            newUserList[i].Membership_Fee = SortableTableUtils.makeNumber(userList[i].membershipFee);
           
        }
        
        var tableList = {
            title: "Manufacturer List",
            objList: newUserList,
        //    sortOrderPropName: "User_Email",
            sortIcon: "icons/sortUpDown16.png"
        };

        var table = makeClickSortFilterTable(tableList);
        //var table = makeClickSortFilterTable("User List", newUserList, "User_Email", "icons/sortUpDown16.png");
        ele.appendChild(table);

    }
    return ele;
}
