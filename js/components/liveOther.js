//Function for users live
function liveOther() {

    var ele = document.createElement("div");

    ele.classList.add("clickSort");//Add style clickSort to class

    var title = document.createElement("h2");
    title.style.textAlign = "center";
    ele.appendChild(title);

    //call ajax file and set appropriate values to pass into
    ajax("webAPIs/listOtherAPI.jsp", processOther, document.getElementById("ele"));

    function processOther(obj) {

      /*  if (obj.dbError.length > 0) {
            ele.innerHTML = obj.dbError;
            return;
        }
*/
        var list = obj.storeList;
        // print out JS object/array that was converted from JSON data by ajax function
        console.log(list);

        // build new list as we want the fields to appear in the HTML table
        // we can decide the order we want the fields to appear (first property defined is shown first)
        // we can combine, decide to exclude etc...
        var theList = [];

        // modify properties (image and price) of the array of objects so it will look 
        // better on the page.
        for (var i = 0; i < list.length; i++) {

            theList[i] = {};
            // Don't show the id (no meaningful data)
            theList[i].store_id = SortableTableUtils.makeNumber(list[i].storeid);
            theList[i].store_image = SortableTableUtils.makeImage(list[i].storeimage, "5rem");
            theList[i].store_location = SortableTableUtils.makeText(list[i].storelocation);
            theList[i].Num_Employees = SortableTableUtils.makeNumber(list[i].numemployees);
            theList[i].Maitnence_Date = SortableTableUtils.makeDate(list[i].maitdate);
        //    theList[i].Date_Opened = SortableTableUtils.makeDate(list[i].dateopened);
            theList[i].Store_Name = SortableTableUtils.makeText(list[i].storename);
        //    theList[i].user_role_id = SortableTableUtils.makeNumber(list[i].userRoleId);

        }

        console.log("STORE LIST");
        console.log(theList);

        var tableList = {
            title: "Store List",
            objList: theList,
            sortOrderPropName: "store_id",
            sortIcon: "icons/sortUpDown16.png"
        };

        // Making a DOM object, nothing shows yet... 
        ele.appendChild(makeClickSortFilterTable(tableList));
    }
    return ele;
}
