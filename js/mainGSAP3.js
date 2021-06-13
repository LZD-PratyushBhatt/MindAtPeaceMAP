console.log("hiiii");
let tl = gsap.timeline({ ease: "power4.inOut" }); //Inside brackets defaults options are there

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
  .set(".from-top .tile", { top: "0", height: "0" })
  .from(".title", {
    x: "+100vw",
    duration: 0.8,
    ease: "sine.out",
    opacity:0
  },2)
  .from(".about2-section-box", {
    x: "-100vw",
    duration: 0.8,
    ease: "sine.out",
  },2)

let t2 = gsap.timeline();
  t2.from(
    ".dev",
    {
      opacity: 0,
      duration: 2,
      stagger: 0.5,
      ease: "sine.in",
      delay:5
    }
  );
