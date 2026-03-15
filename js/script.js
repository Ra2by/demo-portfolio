// typing js

var typed = new Typed(".typing", {
  strings: [
    "Web Developer",
    "Blogger",
    "Youtuber",
    "Web Developer",
    "Blogger",
    "Youtuber",
    "Web Developer",
    "Blogger",
    "Youtuber",
    "Web Developer",
    "Blogger",
    "Youtuber",
    "Web Developer",
    "Blogger",
    "Youtuber",
  ],
  typeSpeed: 80,
  backSpeed: 80,
});

var typed = new Typed(".typing-2", {
  strings: [
    "Web Developer",
    "Blogger",
    "Youtuber",
    "Web Developer",
    "Blogger",
    "Youtuber",
    "Web Developer",
    "Blogger",
    "Youtuber",
    "Web Developer",
    "Blogger",
    "Youtuber",
    "Web Developer",
    "Blogger",
    "Youtuber",
  ],
  typeSpeed: 100,
  backSpeed: 60,
});

// open and off faqs button

const faq = document.querySelectorAll(".faqs");
faq.forEach((faqs) => {
  faqs.addEventListener("click", () => {
    faqs.classList.toggle("open");

    // change icon
    const icon = faqs.querySelector(".faqs-icon i");
    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});

// show and hide menu

const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

//close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};
closeBtn.addEventListener("click", closeNav);

//nav color change on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 100);
});
