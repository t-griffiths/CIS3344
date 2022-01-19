const AjaxOtherTable = () => {           
  
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
        
            ajax_alt("webAPIs/listOtherAPI.jsp",
            
            function (obj) {        // success function gets obj already run thru JSON.parse
                if (obj.dbError.length > 0) {
                    setError(obj.dbError);
                } else {
                    setItems(obj.storeList);
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
                <h2>Other List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Store ID</th>
                            <th>Store Image</th>
                            <th>Location</th>
                            <th className="textAlignRight">Employee Count</th>
                            <th>Maitnence Date</th>
                            <th>Store Name</th>
                            <th>Error</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map(listObj => 
                                <tr key={listObj.webUserId}>
                                    <td>{listObj.storeid}</td>
                                    <td ><img className="userImg" src={listObj.storeimage}/></td>
                                    <td>{listObj.storelocation}</td>
                                    <td className="textAlignRight">{listObj.numemployees}</td>
                                    <td>{listObj.maitdate}</td> 
                                    <td>{listObj.storename}</td> 
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

