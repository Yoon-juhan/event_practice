const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu_btn");
const navMenu = document.querySelector(".nav_menu");
const menuBtnArrow = document.querySelector(".menu_btn_arrow");
const profileBtn = document.querySelector(".profile_btn");
const profileBtnArrow = document.querySelector(".profile_btn .fa-caret-down");


// toggle > navMenu 클래스에 active가 없으면 추가, 있으면 제거한다.
menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuBtnArrow.classList.toggle("active");
})


navMenu.addEventListener("mouseleave", () => {
    navMenu.classList.remove("active");
    menuBtnArrow.classList.remove("active");
})

profileBtn.addEventListener("click", () => {
    profileBtnArrow.classList.toggle("active")
})

nav.addEventListener("scroll", scroll());


function scroll() {
    if (window.scrollY >= 100) {
        nav.style.background = "black";
    } else {
        nav.style.background = "";
    }

    console.log(scrollY);
}