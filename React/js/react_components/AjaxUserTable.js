const AjaxUserTable = () => {           
  
    // Tell React that items array is something that
    // (when changed) should redisplay on the page.
    // Set items initial value to [], an empty array.
    const [items, setItems] = React.useState([]);

    // Tell React that if "error" changes, redisplay.
    // Set initial value of error to null.
    const [error, setError] = React.useState(null);

    // useEffect second parameter is an array of elements that 
    // (if they change) should trigger the function specified 
    // as the first useEffect parameter.
    React.useEffect(() => {
        
            ajax_alt("webAPIs/listUsersAPI.jsp",
            
            function (obj) {        // success function gets obj already run thru JSON.parse
                if (obj.dbError.length > 0) {
                    setError(obj.dbError);
                } else {
                    setItems(obj.webUserList);
                    setError("");
                }
            }, 
            
            function (msg) {   // failure message gets error message
                setError(msg);
            }
        );
    }, []);
    
    
    const UserTable = ({list}) => {
        return (
            <div className="clickSort">
                <h2>User List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Image</th>
                            <th>Birthday</th>
                            <th className="textAlignRight">Membership Fee</th>
                            <th>Role</th>
                            <th>Error</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map(listObj => 
                                <tr key={listObj.webUserId}>
                                    <td>{listObj.userEmail}</td>
                                    <td ><img className="userImg" src={listObj.image}/></td>
                                    <td>{listObj.birthday}</td>
                                    <td className="textAlignRight">{listObj.membershipFee}</td>
                                    <td>{listObj.userRoleType}</td> 
                                    <td>{listObj.errorMsg}</td> 
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div>
            { error ?  <div>Error: {error} </div> : <UserTable list={items} /> }
        </div>
    );
}; // class AjaxUserTable


// Sample User from the JSON file.
/*
      "webUserId": "1",
      "userEmail": "sallyk",
      "userPassword": "p",
      "image": "http://cis-linux2.temple.edu/~sallyk/pics_/sk_2017.jpg",
      "birthday": "",
      "membershipFee": "$123.45",
      "userRoleId": "2",
      "userRoleType": "Edit",
      "errorMsg": ""
 */