var n=document.querySelector(".main-nav"),s=document.querySelector(".button-toogle"),e=document.querySelector(".main-nav__list");n.classList.remove("main-nav--nojs");s.classList.remove("button-toogle--nojs");e.classList.remove("main-nav__list--nojs");s.addEventListener("click",()=>{n.classList.contains("main-nav--closed")?(n.classList.remove("main-nav--closed"),n.classList.add("main-nav--opened")):(n.classList.add("main-nav--closed"),n.classList.remove("main-nav--opened"))});
