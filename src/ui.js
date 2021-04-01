const colors = {
  dark0: "#181725",
  dark1: "#513B56",
  dark2: "#525174",
  light1: "#348AA7",
  light2: "#5DD39E",
  light3: "#BCE784",
  white: "#FFFFFF",
  white2: "#F0F0F0",
  black: "#000000",
  gray: "#7C7C7C",
  gray2: "#F2F3F2",
  gray3: "#EBEBEB",
  gray4: "#BEBEBE",
  orange: "#F3603F",
};

/**
value         |0px     600px    960px    1280px   1920px
key           |xs      sm       md       lg       xl
screen width  |--------|--------|--------|--------|-------->
range         |   xs   |   sm   |   md   |   lg   |   xl
 */

// mobile first
const screenSizes = {
  xs: "0px",
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
};
const screenMediaQueries = {
  // default*
  xs: `@media only screen and (max-width: ${screenSizes.xs})`,
  sm: `@media only screen and (min-width: ${screenSizes.sm})`,
  md: `@media only screen and (min-width: ${screenSizes.md})`,
  lg: `@media only screen and (min-width: ${screenSizes.lg})`,
  xl: `@media only screen and (min-width: ${screenSizes.xl})`,
};

export { colors, screenSizes, screenMediaQueries };
