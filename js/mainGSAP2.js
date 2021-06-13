console.log("hiiii");
let tl = gsap.timeline({ ease: "power4.inOut" });

tl.to(".from-top .tile", {
  duration: 0.4,
  height: "100%",
  top: "0%",
  delay: 0.2,
  stagger: 0.05,
})
  .to(".from-top .tile", {
    duration: 0.4,
    height: "100%",
    top: "100%",
    delay: 0.2,
    stagger: -0.05,
  })
  .from(
    ".logo-main",
    {
      duration: 1,
      x: "-100vw",
      ease: "sine.out",
    },
    1
  )
  .from(".nav-item", { opacity: 0, duration: 1, stagger: 0.1 })
  .set(".from-top .tile", { top: "0", height: "0" });
