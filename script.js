const toggleDarkModeButton = document.getElementById("toggleDarkMode");
const body = document.body;

function toggleDarkMode() {
    body.classList.toggle("dark-mode");

    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");

    toggleDarkModeButton.innerHTML = isDark
        ? '<i class="ri-sun-line"></i>'
        : '<i class="ri-moon-line"></i>';
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleDarkModeButton.innerHTML = '<i class="ri-sun-line"></i>';
    } else {
        toggleDarkModeButton.innerHTML = '<i class="ri-moon-line"></i>';
    }

    toggleDarkModeButton.addEventListener("click", toggleDarkMode);
});

function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });

    const section = document.getElementById(sectionId);
    section.classList.add("active");
    section.scrollTop = 0;
}

const btnNo = document.getElementById("btnNo");
btnNo.addEventListener("mouseover", moveButton);
btnNo.addEventListener("click", moveButton);

function moveButton() {
    const newX = Math.random() * 200 - 100;
    const newY = Math.random() * 200 - 100;
    btnNo.style.transform = `translate(${newX}px, ${newY}px)`;
}

function createFallingElement() {
    const element = document.createElement("div");
    element.classList.add("falling");

    const isDark = body.classList.contains("dark-mode");

    if (isDark) {
        element.textContent = "★";
        element.style.color = "#d4af37";
        element.style.textShadow = "0 0 10px #d4af37";
    } else {
        element.textContent = "❤";
        element.style.color = "white";
        element.style.textShadow = "0 0 8px white";
    }

    element.style.left = Math.random() * 100 + "vw";
    element.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(element);

    setTimeout(() => {
        element.remove();
    }, 5000);
}

setInterval(createFallingElement, 200);



















