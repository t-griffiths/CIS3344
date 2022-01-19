function blog() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = ` 
      <h4>My Blog</h4>
             <h3> Web Design Experience </h3>
        <p>
            I have very little experience with web design. In 8th grade
                        I had taken a computer class where there was about month spent
                        on html. This peaked my interest in coding and was the first 
                        step in me pursuing the major that I had chosen when I applied
                        to college. 
        </p>
        <h3> What I Found Valuable </h3>
        </p>
            I was really struggling with this assignment at first,
                        not wanting to make my site too similar to the site 
                        I made in lab, which was just a file given to me from the
                        professor that I changed around a little bit. After getting
                        extremely frustrated after working on this project for a few
                        hours I started over from scratch and made sure to keep my
                        code organized as that was my biggest problem on 
                        my first attempt. I am very happy that I ended up making something
                        that I am proud of.  
        </p>
    `;
    
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;    
}