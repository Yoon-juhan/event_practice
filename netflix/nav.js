const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu_btn");
const navMenu = document.querySelector(".nav_menu");
const menuBtnArrow = document.querySelector(".menu_btn_arrow");
const profileBtn = document.querySelector(".profile_btn");
const profileBtnArrow = document.querySelector(".profile_btn .fa-caret-down");
const searchBtn_icon = document.querySelector(".search_btn .fa-magnifying-glass");
const searchBtn = document.querySelector(".search_btn");
const searchInput = document.querySelector(".search_text");
const searchX = document.querySelector(".searchX");
const alarmBox = document.querySelector(".alarm_box");
const alarmMenuContents = document.querySelector(".alarm_menu_contents");
const alarmBtn = document.querySelector(".alarm_btn");
const profileBox = document.querySelector(".profile_box");

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
    profileBtnArrow.classList.toggle("active");
})


window.addEventListener("scroll", function scroll() {

    const scrollY = this.scrollY;
    console.log(scrollY);
    if (scrollY < 100) {
        nav.style.background = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))";
    } else {
        nav.style.background = "black";
        nav.style.transition = "0.8s";
    }
});

searchBtn_icon.addEventListener("click", search);

function search() {
    searchBtn.classList.toggle("active");
    searchInput.classList.toggle("active");
    searchX.classList.toggle("active");
}

alarmBtn.addEventListener("click", openAlarmMenu);

function openAlarmMenu() {
    alarmBox.classList.toggle("active");
    alarmBtn.classList.toggle("active");
}

profileBtn.addEventListener("click", openProfileBox);

function openProfileBox() {
    profileBox.classList.toggle("active");
}