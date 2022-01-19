//Function for users live
function liveUsers() {

    var ele = document.createElement("div");

    ele.classList.add("clickSort");//Add style clickSort to class

    var title = document.createElement("h2");
    title.style.textAlign = "center";
    ele.appendChild(title);

    //call ajax file and set appropriate values to pass into
    ajax("webAPIs/listUsersAPI.jsp", processUsers, document.getElementById("ele"));

    function processUsers(obj) {

        if (obj.dbError.length > 0) {
            ele.innerHTML = obj.dbError;
            return;
        }

        var list = obj.webUserList;
        // print out JS object/array that was converted from JSON data by ajax function
        console.log(list);

        // build new list as we want the fields to appear in the HTML table
        // we can decide the order we want the fields to appear (first property defined is shown first)
        // we can combine, decide to exclude etc...
        var webUserList = [];

        // modify properties (image and price) of the array of objects so it will look 
        // better on the page.
        for (var i = 0; i < list.length; i++) {

            webUserList[i] = {};
            // Don't show the id (no meaningful data)
            webUserList[i].Image = SortableTableUtils.makeImage(list[i].image, "5rem");
            webUserList[i].User_Email = SortableTableUtils.makeText(list[i].userEmail);
            // Don't show the password
            webUserList[i].Birthday = SortableTableUtils.makeDate(list[i].birthday);
            webUserList[i].Membership_Fee = SortableTableUtils.makeNumber(list[i].membershipFee);
            webUserList[i].Role = SortableTableUtils.makeNumber(list[i].userRoleId);
        }

        console.log("USER LIST");
        console.log(webUserList);

        var tableList = {
            title: "User List",
            objList: webUserList,
            sortOrderPropName: "User_Email",
            sortIcon: "icons/sortUpDown16.png"
        };

        // Making a DOM object, nothing shows yet... 
        ele.appendChild(makeClickSortFilterTable(tableList));
    }
    return ele;
}
