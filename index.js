console.clear()
// //Ways to Print in JS also Known as Console API'S
//  console.log("Hy I am Printing in My Console")
//  //To Print Warning in Console
//  console.warn("This is First Warning")
//  //To Print Error in Console
//  console.error("This is Error")
 // Data Types
 // Numbers 
//  var num1 = 25
//  var num2 = 256
//  console.log(num2)
// objects 
//var data = {
//    awais: 45,
//    ali: 89,
//    hamza: 68
//}
//console.log(data)
//Boolean
// var a=true
// var b=false
// console.log(b)
// Null and Undefined 
// var a
// console.log(a)
// var b=null
// console.log(b)
// Arrays 
//var arr = [1,2,3,4,5,6,7]
//console.log(arr[5])
//var arr = [1,4,5,6,7,'Awais',7]
//console.log(arr[5])
// Functions 
// function avg(a, b){
//     return (a+b)/2
// }
// c1 = avg(5,6)
// c2 = avg(50,60)
// console.log(c1,c2)

//For Loop
//var arr = [1,3,4,5,6]
//console.log(arr)
//for(var i=0;i<arr.length;i++)
//console.log(arr[i])
//for each loop
// arr.forEach(function(element){
//     console.log(element)
// })
//While loop
// let j=0
// while(j<arr.length){
//     console.log(arr[j])
//     j++
// }
// Break and continue Statement
// var arr = [1,3,5,8,0,4]
// for(var i=0;i<arr.length;i++){
//     if(i==3){
//        // break;
//        continue
//     }
// console.log(arr[i])
// }
// Array Methods 
//var arr = [1,2,3,4,5,6,7,"Awais",true]
//console.log(arr.length)
//arr.pop()
//arr.push("Ali")
//arr.shift()
//console.log(arr) 
//Strings Methods in JS
//var str = "My name is Muhammad Awais"
//console.log(str.length)
//console.log(str.indexOf("Muhammad"))
//console.log(str.slice(3,7))
//d= str.replace("My","Him")
//console.log(d)
// Dates in JS
//mydate = new Date()
//console.log(mydate)
//console.log(mydate.getTime())
//console.log(mydate.getFullYear())
//console.log(mydate.getDay())
//console.log(mydate.getHours())
//console.log(mydate.getMinutes())
// DOM manipulations Methods
//var elem = document.getElementById('Click')
//console.log(elem)
//console.log(elem.innerHTML)
//console.log(elem.innerText)
//var elemclass = document.getElementsByClassName('container')
//console.log(elemclass)
//elemclass[0].style.background = 'yellow'
//tn = document.getElementsByTagName('div')
//console.log(tn)
//How to Create A Child inside An Element 
// tn = document.getElementsByTagName('div')
// console.log(tn)
// createdElement = document.createElement('p')
// createdElement.innerText = "This is a New Paragraph"
// tn[0].appendChild(createdElement)
// createdElement2 = document.createElement('b')
// createdElement2.innerText = "This is a Bold"
// tn[0].replaceChild(createdElement2, createdElement)
// Events in JS 
// window.onload = function(){
//     console.log("Window has Loaded")
// }
//  firstContainer.addEventListener('click',function(){
//      document.querySelectorAll('.container')[1].innerHTML = "<b> We Have Changed the Text of This Event </b>"
//      console.log("Event is Clicked")
//  })
// )
// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse Over is Called Upon")
// })
// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse is Out of Container")
// })
//Set time Out and Set Interval
//  logkaro = ()=>{
//      console.log("Function is Called Upon Continously")
//  } 
// // setTimeout(logkaro , 3000)
// clr = setInterval(logkaro, 3000)