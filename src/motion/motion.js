export const transition = {
  ease: 'easeOut',
};

export const pageVariants = {
  hidden: { opacity: 0, y: '2em' },
  visible: { opacity: 1, y: 0 },
  transition,
};

export const menuVariants = {
  open: { opacity: 1, pointerEvents: 'auto', y: 0 },
  closed: { opacity: 0, pointerEvents: 'none', y: '-2em' },
};

export const variantItems = {
  visible: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
    },
  }),
  hidden: { opacity: 0 },
};

export const pageExit = {
  opacity: 0,
  y: '2em',
};
