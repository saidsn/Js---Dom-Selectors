"use strict"

//console.log(document)

// let heads = (document.getElementsByTagName("h3"));

// for (const item of heads) {
//     console.log(item);
// }

// let head = document.getElementsByClassName("test");

// console.log(head);

// let head = document.getElementById("test");
// console.log(head);

// let head = document.querySelector(".test")
// console.log(head);

// let heads = document.querySelectorAll(".test");
// console.log(heads);
// for (const item of heads) {
//     console.log(item);
// }


// let li = (document.querySelectorAll("#list-news .test ul li"))

// for (const item of li) {
//     console.log(item);
// }

//let elem = document.querySelector(".test");

//elem.className = "salamlar";

// elem.classList.add("salam");

// if (elem.classList.contains("test1")) {
//     elem.classList.remove("test1")
// }else{
//     console.log("yoxdur");
// }



// console.log(elem);

//let span = document.querySelector("#list-news .small-text");
// console.log(span.innerText);
// console.log(span.innerHTML);

//span.innerText = "<b>Salam millet</b>";
//span.innerHTML = "<b>Salam millet</b>";

//let addBtn = document.querySelector(".add-btn");

// function clickBtn(){
//     alert("Salam millet");
// }

// addBtn.onclick = function () {
//     alert("Added")
// }

// addBtn.onclick = function () {
//     alert("no Added")
// }

// function test(){
//     console.log("salamlar");
// }

// addBtn.addEventListener("click",function(){
//    alert("salamlar");
// });

// addBtn.addEventListener("click",function(){
//     alert("sagollar");
// });




// let addBtn = document.querySelector(".add-btn");
// let removeBtn = document.querySelector(".remove-btn");

// let text = document.querySelector(".text-area")

// let head = document.querySelector("h1")

// addBtn.addEventListener("click",function(){
//     head.innerText = text.value;
//     text.value = "";
// })


// addBtn.addEventListener("click",function(){

//     if (text.value == "") {
//         alert("Input cant be empty")
//         return;
//     }

//     head.innerText = text.value;
//     if (head.classList.contains("active-head")) {
//         head.classList.remove("active-head")
//         head.classList.add("inActive-head")
//     }

//     text.value = "";

//  })

//  removeBtn.addEventListener("click",function(){

//     if (text.value == "") {
//         alert("Input cant be empty")
//         return;
//     }
//     head.innerText = text.value;
//     if (head.classList.contains("inActive-head")) {
//         head.classList.remove("inActive-head")
//         head.classList.add("active-head")
//     }

//     text.value = "";
//  })



// let addBtn = document.querySelector(".add-btn");
// let removeBtn = document.querySelector(".remove-btn");

// let text = document.querySelector(".text-area")

// let head = document.querySelector("h1")

// let ul = document.querySelector(".list-area")




// addBtn.addEventListener("click", function () {

//     if (text.value == "") {
//         alert("Input cant be empty")
//         return;
//     }

//     ul.innerHTML += `<li class="list-group-item">${text.value}</li>`

//     let li = document.createElement("li")

//     let icon = document.createElement("i")

//     icon.classList.add("fa-solid");
//     icon.classList.add("fa-circle-xmark");


//     li.classList.add("list-group-item")
//     li.classList.add("w-25");
//     li.style.border = "2px solid red";
//     li.style.backgroundColor = "blue";
//     li.style.color = "white";



//     li.innerText = text.value;

//     ul.append(li)
//     icon.classList.add("icon");
//     li.append(icon);

//     li.onclick = function(){
//         this.remove();
//     }
//     text.value = "";
// })