function startExperience() {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");
    document.getElementById("bgMusic").play();
}

/* Slideshow */
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 3000);

/* Running NO button */
const noBtn = document.getElementById("noBtn");
let noClicks = 0;

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

noBtn.addEventListener("click", () => {
    noClicks++;
    if (noClicks > 5) {
        noBtn.innerText = "You lekker mal 😜";
    }
});

/* Confetti */
const yesBtn = document.getElementById("yesBtn");
yesBtn.addEventListener("click", () => {
    alert("Best decision ever ❤️");
    launchConfetti();
});

function launchConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 150; i++) {
        ctx.fillStyle = `hsl(${Math.random()*360}, 100%, 50%)`;
        ctx.fillRect(
            Math.random()*canvas.width,
            Math.random()*canvas.height,
            8,8
        );
    }
}
