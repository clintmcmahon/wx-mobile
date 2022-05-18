import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const WxLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    cardBackgroundColor: "#ffffff",
    heat: "#e74a3b",
    cold: "#4e73df",
    dark: "#5a5c69"
  },
};

export const WxDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
  },
};
