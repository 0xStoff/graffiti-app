const theme = "dark";

const colors = {
  dark: {
    primary: "#282E39", //
    secondary: "#BABDC9", //
    background: "#080E1D", //
    red: "#FF7E7E",
    // medium: "#6e6969",
    light: "#CFD7ED", //
    // black: "#000",
    white: "#fff", //
    backgroundLight: "rgba(8, 14, 29, 0.4)",
    backgroundMedium: "rgba(8, 14, 29, 0.7)",
    // dark: "#0c0c0c",
    // danger: "#ff5252",
  },
  light: {
    primary: "#FFFFFF", //
    secondary: "#BABDC9", //
    background: "#FAFBFC", //
    red: "#FF7E7E",

    // medium: "#6e6969",
    light: "#282E39", //
    // black: "#000",
    white: "#000", //
    backgroundLight: "rgba(8, 14, 29, 0.1)",
    backgroundMedium: "rgba(8, 14, 29, 0.1)",
    // dark: "#0c0c0c",
    // danger: "#ff5252",
  },
};

export default theme === "dark" ? colors.dark : colors.light;
