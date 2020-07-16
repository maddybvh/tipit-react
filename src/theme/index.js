const palette = {
  black: "#000000",
  white: "#FFFFFF",
  darkestGray: "#252525",
  red: "#FF0000",
  blue: "#0000EE",
  pink: "#F35A69",
  gray: "#d3d3d3",
  darkGray: "#828282",
};

export const colors = {
  text: palette.black,
  clear: palette.red,
  link: palette.blue,
  background: palette.white,
  row: palette.gray,
  inputBorder: palette.darkGray,
};

export const themedColors = {
  default: {
    ...colors,
  },
  light: {
    ...colors,
  },
  dark: {
    ...colors,
    text: palette.white,
    background: palette.darkestGray,
    link: palette.pink,
    clear: palette.pink,
    row: palette.darkGray,
  },
};
