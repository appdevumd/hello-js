let titleElement = document.getElementById("title");

function changeTitle() {
    titleElement.innerText = "wow javascript!";
    titleElement.style.color = "red";
}

// setTimeout(changeTitle, 1000);

// let clickMeBtn = document.getElementById("clickMe");
// clickMeBtn.addEventListener("mouseleave", changeTitle);

const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

function changeGreeting() {
    greeting.innerText = "Hello " + nameInput.value;
}

nameInput.addEventListener("input", changeGreeting);