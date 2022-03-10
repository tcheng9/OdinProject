console.log("inside index.js");

let mainDiv = document.getElementById("content");

//Creating a header
let restaurantHeader = document.createElement("h1");
restaurantHeader.textContent = "Empire Restaurant";
mainDiv.appendChild(restaurantHeader);


//Create a review paragraph

let reviewText = document.createElement("p");
reviewText.textContent = "Hello tis is a review";

mainDiv.appendChild(reviewText);


//Creating an image and appending it
const img = document.createElement("img");
img.src = "https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX34847109.jpg";
mainDiv.appendChild(img);


//Making tabs for the site
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})