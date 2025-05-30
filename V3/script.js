
var a = 10
console.log(a)
var b = 50
console.log(b)
console.log("The addition of two numbers is",a+b)
 

var h1 =    document.querySelector('h1') /* Target an element */
h1.innerHTML = "Lol"    /* HTML Changing */
h1.style.backgroundColor = "pink"   /* CSS Changing */

// Event Listener
// already targeted html h1 tag
h1.addEventListener('mouseleave',function(){
    h1.style.backgroundColor = "Royalblue"
    h1.style.color = "pink"
})

h1.addEventListener('mouseenter',function(){
    h1.style.backgroundColor = "pink"
    h1.style.color = "Royalblue"
})
