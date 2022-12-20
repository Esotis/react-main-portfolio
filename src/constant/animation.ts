export const HomeSocialMotion = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 2,
    },
  },
};

export const HomeImageMotion = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2.5,
    },
  },
};

export const HomeDataMotion = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
      type: "spring",
      bounce: 0.5,
    },
  },
};

export const InfoMotion = {
  hidden: {
    opacity: 0.3,
    scale: 0,
  },
  visible: (time: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: time,
    },
  }),
};

export const FrontEndMotion = {
  hidden: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};

export const BackEndMotion = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};

export const SkillChildrenMotion = {
  hidden: {
    y: "-50%",
    opacity: 0,
  },
  visible: (time: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: time,
    },
  }),
};
