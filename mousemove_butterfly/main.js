const frame = document.getElementById("frame");
const card = document.getElementById("card");
const img = document.getElementsByTagName("img")[0];

let { x, y, width, height } = frame.getBoundingClientRect();

img.addEventListener("click", clickImg);

function clickImg() {
    window.addEventListener("mousemove", mouseMove);
}

function mouseMove(e) {
    const centerX = (e.clientX - window.innerWidth / 2);
    const centerY = (e.clientY - window.innerHeight / 2);
    const d = Math.sqrt(centerX ** 2 + centerY ** 2);
    card.style.transform = `translateX(${centerX}px) translateY(${centerY}px) rotate3d(${-centerY / 10}, ${centerX / 10}, 0, ${d / 10}deg)`
    img.style.filter = `drop-shadow(${-centerX / 7}px ${-centerY / 7}px 7px rgba(0, 0, 0, 0.8))`;
}