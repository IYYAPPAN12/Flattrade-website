
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display === "none" ? dropdownContent.style.display = "block" : dropdownContent.style.display = "none";
}

window.onclick = function(event) {
    if (!event.target.matches('.dots')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

var mainListDiv = document.getElementById("mainListDiv"),
mediaButton = document.getElementById("mediaButton");
mediaButton.onclick = function () {
"use strict";
mainListDiv.classList.toggle("show_list");
mediaButton.classList.toggle("active");
};
//Icon change content

var taskInput = document.getElementById("taskInput");
taskInput.addEventListener("keyup", function(event) {
if (event.key === "Enter") {
event.preventDefault();

var taskText = taskInput.value.trim();

if (taskText === "") {
alert("Please enter a Symbols!");
return;
}

var taskList = document.getElementById("taskcon");

var li = document.createElement("li");
li.textContent = taskText;

var sellButton = document.createElement("button");
sellButton.textContent = "Sell";
sellButton.className = "delete-btn";
sellButton.onclick = function() {
li.remove();
};

var buyButton = document.createElement("button");
buyButton.textContent = "Buy";
buyButton.className = "buy-btn";
buyButton.onclick = function() {
li.remove();
};

li.appendChild(sellButton);
li.appendChild(buyButton);
taskList.appendChild(li);
taskInput.value = "";

}
});

document.addEventListener('DOMContentLoaded', function () {
const iconBtn = document.getElementById('grid-icon');
var textElement = document.getElementById('taskcon');
var isStyled = false;

let iconState = 0;

iconBtn.addEventListener('click', function () {
  iconState = (iconState + 1) % 2;

  if (iconState === 0) {
      iconBtn.innerHTML = '<i id="toggle-icon" class="fa fa-th-large">';

  } else {
      iconBtn.innerHTML = '<i id="toggle-icon" class="fa fa-bars">';

  }
});

function toggleStyle() {
if (isStyled) {
    textElement.classList.remove('taskgrid');
    textElement.classList.add('taskcon');
} else {
    textElement.classList.remove('taskcon');
    textElement.classList.add('taskgrid');
}

isStyled = !isStyled;
}

iconBtn.addEventListener('click', toggleStyle);

});

// Changing page content code here 


function showPage(pageId) {
    // Hide all pages
    var pages = document.querySelectorAll('.content');
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
    }

    // Show the selected page
    document.getElementById(pageId).style.display = 'block';
  }



  