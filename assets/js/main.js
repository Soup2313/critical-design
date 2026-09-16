// main.js

let targetElemment = document.querySelector("h2");

targetElement.addEventListner("mouseover", function() {
   this.innerText = "TIME";
   this.style = "cursor: wait";
});

targetElement.addEventListner("mouseout", function() {
   this.innerText = "IKEA";
   this.style = "cursor: pointer";
});