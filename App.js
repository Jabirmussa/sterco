const Header = document.querySelector("header")
window.addEventListener("scroll",()=>{
  console.log('scrolling')
  console.log(window.scrollY)
  if(window.scrollY>0){
     Header.classList.add("headeractive")
  }else{
    Header.classList.remove("headeractive")
  }
     
})




const cardsContainer = document.querySelector(".pics");

cardsContainer.addEventListener("mouseover", (e) => {
  const target = e.target.closest(".card");

  if (!target) return;

  cardsContainer.querySelectorAll(".card").forEach((card) => {
    const cardContent = card.querySelector(".card-content");
    if (card !== target && cardContent) {
      card.classList.remove("active");
      cardContent.style.opacity = 0; 
    } else {
      card.classList.add("active"); 
      cardContent.style.opacity = 1; 
    }
  });
});

cardsContainer.addEventListener("mouseout", () => {
  
  cardsContainer.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("card-content");
    cardContent.style.opacity = 1;
  });
  cardsContainer.querySelectorAll(".card-content").forEach((cardContent) => {
    cardContent.style.opacity = 1;
  });
});





document.addEventListener("DOMContentLoaded", function () {
  const navCheck = document.getElementById("nav_check");
  const navCloseBtn = document.querySelector(".navCloseBtn");
  const body = document.body;

  navCloseBtn.addEventListener("click", function () {
    navCheck.checked = false;
    body.classList.remove("nav-open");
  });

  navCheck.addEventListener("change", function () {
    if (navCheck.checked) {
      body.classList.add("nav-open");
    } else {
      body.classList.remove("nav-open");
    }
  });
});


// // GSAP
// const tl = gsap.timeline ({
//   defaults: { duration: 0.75, ease: "Power3.easeout" },
// });

// tl.fromTo(
//   ".word-1",
//   { x: "100%", opacity: 0 },
//   { x: "0%", opacity: 1 },
//   "<20%"
// );

// tl.fromTo(
//   ".word-2",
//   { y: "100%", opacity: 0 },
//   { y: "0%", opacity: 1 },
//   "<20%"
// );

// tl.fromTo(
//   ".word-3",
//   { x: "-100%", opacity: 0 },
//   { x: "0%", opacity: 1 },
//   "<20%"
// );

// tl.fromTo(
//   ".text-2",
//   { y: "100%", opacity: 0 },
//   { y: "0%", opacity: 1 },
//   "<20%"
// );
// tl.fromTo(".word-4", {}, {});
// tl.fromTo(".word-5", {}, {});
// tl.fromTo(".word-6", {}, {});

// tl.fromTo(
//     ".img",
//     { duration: 0.5, x: "70%", width: "0%" },
//     { x: "0%", width: "100%", delay: 0.3, duration: 1 }
// );
