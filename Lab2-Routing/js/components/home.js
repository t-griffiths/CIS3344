function home () {

// ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
// 
// NetBeans menu option "Source - Format" will not work with the text inside of a 
// String, so you have to do this indentation manually with the editor. 

var content = `

        <h3>Home</h3>
        <p>
            My proposition is a site that a grocery store would use to keep 
                track of things such as transactions, products, and customer,
                employee and wholesaler information. We hope to reach out to major
                grocers like <a href= "https://www.traderjoes.com/home"> Trader Joe's </a>
                and <a href ="https://www.wegmans.com/"> Wegman's</a>. 
                I believe this website will be useful for these companies as they have 
                thousands of employees, and millions of transactions. A website where all the information
                about the major components of their business would not only make their businesses run
                smoother, but allow them to access this information with only a few clicks.
        </p>
 
        
    
        <pre>
    &lt;script src="js/reusable/MakeNavRouter.js">&lt;/script>  </pre>
    
        <p>
            Then, please the NavRouter style sheet in the header section of your index.html: 
        </p>
    
        <pre>
    &lt;link href="style/NavRouter.css" rel="stylesheet" type="text/css" />   </pre>
    
        <p class='indent'>
            Notice that all the styles in NavRouter.css are "localized" by preceding each 
            CSS selector with ".NavRouter". That way the styling from NavRouter.css 
            will only affect DOM elements that are classed "NavRouter" - instead of 
            conflicting with other styling in your site. Reusable components need to 
            be able to "play nice" with the other code of the web site...
        </p>
        
        <p>
            Your index.html file also needs to contain JS code to invoke the MakeNavRouter function. 
            Start out by creating an array of objects, one object per link you want in your Nav Bar, 
            where each object has three properties:  
        </p>
        <ul>
            <li>
                linkText: text that shows up in the Nav Bar.
            </li>
            <li>
                linkURL: should be related to the action because it will show up in the browser's 
                address bar when the link is clicked. To invoke this function from 
                outside of the Nav Bar, just set location.hash = to this linkURL.
            </li>
            <li>
                action: name of the JS function that will be invoked when the 
                link is clicked. 
            </li>
        </ul>
        <div class='indent'>
            <p>
                To include a link (in the Nav Bar) without any associated JS function, 
                just omit the linkURL and action properties.
            </p>
            <p>
                To define a drop down menu, add a "header" property and 
                a "subMenu" property to one of the objects in the object array. 
                The header property will show as the drop down header. 
                Set the subMenu propery to be an array of link objects as described above 
                (with object properties: linkText, linkURL, and action).
            </p>    
            <p>
                Here's an example of setting up the array to specify the nav bar, 
                then invoking the MakeNavRouter function with the proper inputs.
            </p>
        </div>
    
        <pre>
    &lt;script>

        /* This example code will create a Nav Bar that shows this: 
              Home | Account | Search | Tutorial | Blog
           In this example, Home and Blog are links, whereas the others (Account, Search, and Tutorial) 
           are Drop Down Menu Headers (with a list of links that open up when you click on 
           the Drop Down Header). 
        */ 

        var myNavList = [

            // action attribute is a function name - no quotes aroudnd home.
            {linkText: "Home", linkURL: "#/home", action: home},
            {
                header: "Account",
                subMenu: [

                    // These links show up in nav bar but not functional because linkURL and action were not supplied.
                    {linkText: "Register"},
                    {linkText: "Log In"},
                    {linkText: "Log Out"},
                    {linkText: "Profile"}
                ]
            },
            {
                header: "Search",
                subMenu: [
                    {linkText: "Objects", linkURL: "#/objects", action: objContent},
                    {linkText: "Slide Show"},
                    {linkText: "Click Sort"}
                ]
            },
            {
                header: "Tutorial",
                subMenu: [
                    {linkText: "Proposal"},
                    {linkText: "Proof Of Concept"},
                    {linkText: "Demo"},
                    {linkText: "Tutorial Home"}
                ]
            },

            // action attribute is a function name - no quotes around blog.
            {linkText: "Blog", linkURL: "#/blog", action: blog}
        ];

        var myNav = MakeNavRouter({
            navId: "nav",           // this is the id of the div where the nav bar will be injected
            navList: myNavList,     // the array of objects specified above (object properties: linkText, linkURL, actions)
            contentId: "content",   // the id where content is to be injected
            startLink: "#/home"     // routing will set this as the first link. 
        });

    &lt;/script>        </pre>
    
        <p>
            Three functions were referenced by the object array (above), so you must also 
            include references to these functions: home, blog, and objContent.               
        </p>
    
        <pre>
    &lt;script src="js/components/blog.js">&lt;/script>
    &lt;script src="js/components/home.js">&lt;/script>
    &lt;script src="js/components/objContent.js">&lt;/script>   </pre>
    
        <p>
            Since function objContent calls function MakeObj, you must also include a reference 
            to the file that holds function MakeObj. 
        </p>
    
        <pre>
    &lt;script src="js/reusable/MakeObj.js">&lt;/script>    </pre>
    
    <p>
        To see all the code where it needs to be, just right click this page and View Source !
    </p>
    
    
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
        }