let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let onceDone = false;
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current++;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  document.addEventListener("scroll", function (e) {
    if (window.scrollY > 350 && !onceDone) {
      counter("count1", 0, 30, 4000);
      counter("count2", 0, 4, 4000);
      counter("count3", 0, 15, 4000);
      counter("count4", 0, 950, 4000);
      onceDone = true;
    }
  });
});
