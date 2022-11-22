

// Mobile Clicking menubar
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const header_ele = document.querySelector(".header");

mobile_nav.addEventListener("click",()=>{
  header_ele.classList.toggle("active")
});


const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll('.p-btn');
const p_img_ele = document.querySelectorAll('.img-overlay');

p_btns.addEventListener('click', (e) => {
  const clicked = e.target;
  console.log(clicked);

  p_btn.forEach((curEle) => curEle.classList.remove("p-btn-active"));
  clicked.classList.add("p-btn-active");

  // TO FIND THE NUMBER IN DATA
  const btn_num = clicked.dataset.btnNum;
  console.log(btn_num)

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
  // console.log(img_active);

  p_img_ele.forEach((curEle) => curEle.classList.add("p-img-not-active"));
  img_active.forEach((curEle) => curEle.classList.remove("p-img-not-active"))
})

// SLIDER SECTION JS
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// SCROLL FROM TOP TO BOTTOM
const sectionHero = document.querySelector(".section-hero")
const footerEle = document.querySelector(".section-footer")
const scrollElement = document.createElement("div");
scrollElement.classList.add("scroll-style");
scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`
footerEle.after(scrollElement);

const scrollTop = () => {
  sectionHero.scrollIntoView({ behavior: "smooth" })
}

scrollElement.addEventListener("click", scrollTop)

// ANIMATE NUMBER COUNTER
const countNum = document.querySelectorAll(".counter-number");
const speed = 200;

countNum.forEach((curEle) => {
  const updateNum = () => {
    const targerNum = parseInt(curEle.dataset.number)
    const initialNum = parseInt(curEle.innerText)
    const incrementNum = Math.trunc(targerNum / speed)
    if(initialNum < targerNum){
      curEle.innerText = `${initialNum + incrementNum}+`;
      setTimeout(updateNum, 10)
    }
  }
  updateNum();
});


// MEDIA QUERIES IN JAVASCRIPT
const myJsMedia = (widhtSize)=>{
if(widhtSize.matches){
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
  });
}else{
  new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
  });
}
}
const widhtSize = window.matchMedia("(max-width: 780px)");
// Calling listener function in run time
myJsMedia(widhtSize);
// Attach listener function on stage Change
widhtSize.addEventListener("change", myJsMedia)