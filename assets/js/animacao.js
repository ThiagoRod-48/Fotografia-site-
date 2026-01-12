gsap.fromTo(
  ".polaroide",
  {
    autoAlpha: 0,
    y: 30,
    rotation: 0,
    x: 0,
  },
  {
    autoAlpha: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "back.out(1.7)",
    x: (i) => {
      if (i === 0) return -30;
      if (i === 2) return 30;
      return 0;
    },
    rotation: (i) => {
      if (i === 0) return -6;
      if (i === 2) return 6;
      return 0;
    },
    onComplete: () => atualizarZIndex(),
  }
);
