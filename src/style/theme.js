import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const WxLightTheme = {
  ...DefaultTheme,
  h1Size: 28,
  h1FontWeight: "regular",
  colors:{
    ...DefaultTheme.colors
  }
};

export const WxDarkTheme = {
  ...DarkTheme,
  colors:{
   ...DarkTheme.colors
  }
}
