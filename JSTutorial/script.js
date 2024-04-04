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

// Using JS to change CSS
const heading = document.getElementById("changeCSS");
heading.style.color = 'blue';

const btn = document.getElementById("btn");
btn.addEventListener("click",function(){
  heading.style.color = 'red';
});

// multiple event handlers
btn.addEventListener("mouseover",function(){
  document.getElementById('mult').innerHTML = 'sure, click if you want';
});

btn.addEventListener("mouseout",function(){
  document.getElementById('mult').innerHTML = 'Go on, do it';
});

btn.addEventListener("click",function(){
  document.getElementById('mult').innerHTML = '';
});

// event listeners on the window
window.addEventListener("resize",function(){
  this.document.getElementById('w').innerHTML = Math.random();
})

function add(n1,n2){
  // this function is not void since I want to be able to write the output to the website
  return n1+n2;
}
// parameters in event listeners (adding two numbers)
const b1 = document.getElementById('calc');
b1.addEventListener("click",function(){
  let n1 = parseInt(document.getElementById('n1').value);
  let n2 = parseInt(document.getElementById('n2').value);

  // this is the reason that the add function is not void
  document.getElementById('res').innerHTML = add(n1,n2);
})

// bubbling vs capturing
const para = document.getElementById('para');
const para1 = document.getElementById('para1');

//sets capturing to true
para.addEventListener("mouseout",function(){
  para.innerHTML = 'Changed';
  console.log('Event 1');
},true);
para.addEventListener("mouseout",function(){
  para.style.color = 'blue';
  console.log('Event 2');
},true);

para1.addEventListener("mouseout",function(){
  para1.innerHTML = 'Changed';
  console.log('Event 1');
},false);
para1.addEventListener("mouseout",function(){
  para1.style.color = 'blue';
  console.log('Event 2');
},false);

// event listeners can also be removed as well
