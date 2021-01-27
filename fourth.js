//Question 1
// 1. document.getElementsByTagName(): Elements can be fetched by using html element's tag name.
// 2. document.getElementsByClassName(): Elements can be fetched by using html element's class name.
// 3. document.getElementsById(): Elements can be fetched by using html element's Id.

//Question 2
var a=document.getElementsByClassName("firstnumber");
var b=document.getElementsByClassName("secondnumber");
var c=a.value
var d=b.value
function add(c,d){
    var e =c+d;
    console.log(e)

}
add(c,d)