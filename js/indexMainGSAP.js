console.log("Hello");
let tl = gsap.timeline({ ease: "power4.inOut" });

tl.to(".from-left .tile", {
  duration: 0.4,
  width: "100%",
  left: "0%",
  delay: 0.2,
  stagger: 0.05,
})
  .to(".from-left .tile", {
    duration: 0.4,
    width: "100%",
    left: "100%",
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
  .from(".nav-item", { opacity: 0, duration: 0.5, stagger: 0.1 })
  .set(".from-left .tile", { left: "0", width: "0" })
  .from(
    ".pager2",
    {
      y: "+100%",
      ease: "sine.in",
      duration: 1,
    },
    2
  );
//specify the ending position of the animation, we want it do go out of the page completely
// and thus, doing left=0, meaning stay at left, and width at 0, to remove the animation , and its visibility , or you can just say left :100%
