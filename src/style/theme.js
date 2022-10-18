import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const WxLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    cardBackgroundColor: "#ffffff",
    heat: "#E63946",
    cold: "#457B9D",
    dark: "#1D3557",
    linkBlue: "#0000EE",
  },
};

export const WxDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    linkBlue: "#0000EE",
  },
};
