export let contactCard1: any, contactCard2: any, contactCard3: any, contactCard4: any;

export const animationAlternateLeft = (targets: any) => ({
  targets,
  translateX: [-1000, 1],
  direction: "alternate",
});
export const animationAlternateRight = (targets: any) => ({
  targets,
  translateX: [1000, 1],
  direction: "alternate",
});

export let gradientCard: any, titleAnimate: any, infoAnimate: any, linkAnimate: any;

export const textAnimation = (targets: any) => ({
  targets,
  translateX: [350, 1],
  direction: "alternate",
  loop: true,
});