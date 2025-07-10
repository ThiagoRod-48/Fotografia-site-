gsap.from(".polaroide", {
  y: -35,
  autoAlpha: 0,
  rotation: -15,
  duration: 0.6,
  stagger: 0.15,
  ease: "back.out(1.7)",
  onComplete: () => {
    iniciarClique();
  },
});
