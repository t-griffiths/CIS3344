function home () {

// ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
// 
// NetBeans menu option "Source - Format" will not work with the text inside of a 
// String, so you have to do this indentation manually with the editor. 

var content = `

        <h2>Welcome to Online Grocery Store Manager </h2>

            <p>
                My proposition is a site that a grocery store would use to keep 
                track of things such as transactions, products, and customer,
                employee and wholesaler information. We hope to reach out to major
                grocers like <a href= "https://www.traderjoes.com/home"> Trader Joe's </a>
                and <a href ="https://www.wegmans.com/"> Wegman's</a>. 
            </p>

            <p> I believe this website will be useful for these companies as they
                have thousands of employees, and millions of transactions. A website
                where all the information about the major components of their business
                would not only make their businesses run smoother, but allow them to
                access this information with only a few clicks. 
            </p>

    

    
    
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
        }