function blog() {

// ` this is a "back tick". Use it to define multi-line strings in JavaScript.
var content = ` 
      <h3> Database </h3>
        <p>The "other" database table I plan on having will be "Rewards". I plan on
           using this table to store information that the grocery store can use
           for a rewards program. The content of this table will include:
        <ul> Customer ID Number </ul>
        <ul> Amount of transactions </ul>
        <ul> Amount spent</ul>
        <ul> Reward Discount % </ul>
      </p>

      <h3> Web Design Experience </h3>
                    <p>I have very little experience with web design. In 8th grade
                        I had taken a computer class where there was about month spent
                        on html. This peaked my interest in coding and was the first 
                        step in me pursuing the major that I had chosen when I applied
                        to college. 
                    </p>
    <h3> Homepage Homework </h3>
                    <p>I was really struggling with this assignment at first,
                        not wanting to make my site too similar to the site 
                        I made in lab, which was just a file given to me from the
                        professor that I changed around a little bit. After getting
                        extremely frustrated after working on this project for a few
                        hours I started over from scratch and made sure to keep my
                        code organized as that was my biggest problem on 
                        my first attempt. I am very happy that I ended up making something
                        that I am proud of. 
                    </p>

                    <p>
                        I found things such as inserting images and external links
                        very easy, but I had a difficult time doing things to make
                        my website more unique, such as the sticky nav bar and the
                        three column layout in the body. It took me a while to actually
                        understand how to style classes and id's and a lot of playing around
                        with switching values until I found something that worked.
                    </p>    
    <h3> JS UI Homework</h3>
        <p> I found this homework extremely intimidating at first. Implimenting javascript
        into my website had me very confused until I started reading through all the
        .css and .js files and started to understand what was referencing what. After
        that I struggled with keeping the formatting of my original site. I had a nav
        bar with a title above it and the nav bar would stick to the top of the screen
        when you would scroll down. This wasn't working after I implimented javascript
        and when it would work the dropdowns in the nav bar would stop working. This
        was frustrating but after playing with it for a while I figured it out. 
        </p>
    <p> I think this homework is valuable because we will be using javascript for the rest
    of the semester and I never had an understanding of it until now. Understanding how
    the functions are made in the js files and how the style sheets reference those
    javascript files is extremely useful in web design.
    </p>
    
    <h3>JS Object Homework </h3>
    <p>This homework was extremely difficult at first for me. I think my problem was that
    I didn't understand objects as much as I though I did. I spent countless hours
    rereading through sample code and tutorials on the class website until I felt like I 
    had a good understand of how to do what I wanted to do. I think I gained a lot from this
    homework as now I am comfortable with javascript functions and objects </p>
    
    <p>I made two divs that hold information about some vegetables that a grocery store might
    have. You select which vegetable or harvest date you would like to learn more information
     about then press the button and it changes the content to whichever vegetable it goes with. </p>
    
    <h3>Slideshow Homework</h3>
    <p> I struggled with this assignment at first as it wasn't as easy as the lab was.
    After playing with the code from lab and the example for a while and reading through everything I finally
    understood how everything was supposed to work and once I understood it was easier
    to impliment my ajax slideshows. I think this homework taught me a valuable skill
    in web design and I'm glad I was able to figure it out as I will use this skill in
    the future.
    </p>
    
    <h3>ClickSort Homework</h3>
    <p>For this assignment I added the user table to my website. To keep it in theme with my
    website, I decided to refer to them as manufacturers, and they provide the vegetables. Each
    user has a webUserId, which I called manufacturer Id. I also made a table that holds vegetables.
    Each vegetable always has a webUserId that is referred to as manufacturer Id. This allows
    the tables to reference each other. In the user table, the manufacturer id would be the primary key.
    In the vegetable table, the manufacturer id is the foreign key.</p>
    <p> When combining the two sample codes together (make sort table and make filter table), the main
    problem I ran into was that the one function took 4 parameters as input, and the other only took on parameter
    as input. It took me a while to figure out how to make this work, but I made a variable that can
    store the 4 values that the one function needs, then passed that variable to the function. This way,
    you can pass a single parameter into the function, but still have those 4 values accessable to the function </p>
    
    <h3>Tutorial - Proof of Concept </h3>
    <p>For my tutorial, I am doing a modal button that opens a form on click
        then validates and saves the information that the user inputted. For now,
    it only saves the information that the user inputted to their computer in a .txt
    file. I plan on making this file save to a folder in my website files so this information
    will be accessible to me. My first component will allow the user to subscribe to
    the email list. The second one will allow the user to send a message to the website developer.
    This message along with their information will be stored in a text file and saved
    to a folder in the web files. The second button does not work yet but once I make
    my functions reusable this should work great.</p>
    
    <h3> Tutorial Componenet </h3>
    <p>When I started working on this project I had spent hours on it until I felt completely lost
    and like I had made no progress in the whole time I was working. I walked away from it and went
    back to it expecting that I would get a 0 on this assingment, then things started work. I created my
    HTML elements in JS, I then started calling functions and eventually realized the best way to do
    what I wanted was to pass an object into my function, which was actually easier than I expected it to be.
    I'm certain my project isn't the best and I don't expect that great of a grade but I am proud of what I
    managed to get done as there were points where I felt completely defeated. <p>


    <h3>Database Homework</h3>
    <p>I enjoyed this homework as I find SQL relatively easy. I think it will be valudable
    to know how to create data bases and impliment it into my website. My user table is store owners
    and my other table is store's that the users own. Click <a target="_blank" href='DatabaseHW.pdf'>here</a> 
    to see my database document</p>


    <h3> API Homework </h3>
    After struggling with the lab I was expecting this homework to be very complicated.
    But I found that since I spent a lot of time getting my lab to work, what I learned from
    lab translated to this assignment and I figured it out with little problems.
    Click <a target="_blank" href="apiHomeworkQuestions.pdf">here</a> to see my error document.
    Click <a target="_blank" href="webAPIs/listUsersAPI.jsp">here</a> for my List Users Web API.
    Click <a target="_blank" href="webAPIs/listOtherAPI.jsp">here</a> for my List Car API.
    
    
    
    <h3>React Homework</h3>
            <p>
                This assignment was not as difficult as I imagined it to be 
                before I started. The sample code combined with our last lab assignment,
                combined with the other two assignements we did using jsp, this assignment
                was relatively easy as I have a good understanding now of how to troubleshoot
                any problems I might run into with jsp.
                
                Along with jsp, I find react very
                useful and I like how it works a lot. Rather than having a bunch of different pages,
                just deleting the content of one page and replacing it when the user clicks a different
                tab on the site. 
     `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
        }