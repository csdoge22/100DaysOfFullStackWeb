// Note: I knew the JavaScript programming language so I decide to skip to the DOM and web part tutorial (excluding animation)

/* 
DOM (Document Object Model)
allows for dynamically changed content without the use of a server

in the DOM, html elements are objects
*/

const p1 = document.getElementById("p1").innerHTML = "this text is changed by JavaScript";

/* getElementByID("p1") method locates the HTML element with the id p1 */
/* innerHTML is a property of a document object that can be used to:
1. retrieve values (used to be called value)
2. mutate values  */

const p2 = document.getElementById("p2").innerHTML = "There are "+document.getElementsByTagName("h1").length+" headings";

// elements can be found through ID, tagname, class, 
const x = document.getElementById("documentClass");
const y = x.getElementsByTagName("h1");

const z = document.getElementsByClassName("loc");
const qs = document.querySelectorAll("p.loc");

const p3 = document.getElementById("p3");
p3.innerHTML = "The first paragraph selected is "+qs[0].innerHTML;
// we use innerHTML to retrieve text from the querySelector elements

const f1 = document.forms["f1"];
let text = "";
for (let i = 0; i < f1.length; i++) {
  text += f1.elements[i].value + "<br>";
}
document.getElementById("fElems").innerHTML = text;

/* there are also methods for anchor, body, documentElement, embeds, forms, head, images, links, scripts, title */

/*const img1 = document.getElementById("img1");
img1.src = "memer.jpg";

You can also use an attribute in place of innerHTML*/

document.write(Date());
// this displays the current date on the webpage

function validateForm(){
    const fname1 = document.forms["f1"]["fname"].innerHTML;
    if(fname1==""){
        alert("First Name cannot be blank");
        return false;
    }
}

// this is the code used to stop the form from submitting when the first name field is missing
