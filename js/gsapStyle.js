gsap.from(".logo-main", {
    delay:0.5,
  duration: 1,
  x: "-100vw",
  ease: "sine.out",
});
gsap.from(".nav-item",{delay:1,opacity:0, duration:1,stagger:0.1})

gsap.from(".pager2",{
    delay:1,
    y:"100vh",
    ease:"sine.in",
    duration:1
})