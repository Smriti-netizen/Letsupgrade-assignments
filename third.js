//Question 1
var library=[
    {
        author:'Bill Gates',
        title:'The Road Ahead',
        readingStatus:true
    },
    {
        author:'Steve Jobs',
        title:'Waiter Isaacson',
        readingStatus:true 
    },
    {
        author:'Suzanne Collins',
        title:'The Final Book of the Hunger Games',
        readingStatus:true
    }
]
a=library.length
for(i=0;i<a;i++){
    console.log(library[i]);
}
//Question 2
var age=prompt("Your age:")
if(age<18){
    alert("Not legal age to drive")
}
else{
    alert("Drive safe")
}