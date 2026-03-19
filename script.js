// Typing Effect
const text = ["Web Developer", "C/C++ Programmer", "Future AI Engineer"];
let index = 0;
let charIndex = 0;

function type() {
    if (charIndex < text[index].length) {
        document.getElementById("typing").innerHTML += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        document.getElementById("typing").innerHTML = text[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % text.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", type);

// Scroll
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView();
}