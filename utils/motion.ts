export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export const slideInFromBottom = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export function fadeInUp(delay: number) {
  return {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };
}

export function scaleIn(delay: number) {
  return {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};
