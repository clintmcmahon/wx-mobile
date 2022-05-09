import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const WxLightTheme = {
  ...DefaultTheme,
  h1Size: 28,
  h1FontWeight: "regular",
  h2Size: 22,
  h3Size: 20,
  colors: {
    ...DefaultTheme.colors,
  },
};

export const WxDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
  },
};
