import { createTheme } from "@mui/material";

/* Create a theme instance.
 * DOCS: https://mui.com/material-ui/customization/default-theme/#main-content
 */
const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
  palette: {
    primary: {
      main: "#d32f2f",
    },
    secondary: {
      main: "#222222",
    },
    //Add your custom props...
    gray: {
      900: "#111111",
      800: "#444444",
      700: "##666666",
      600: "#969696",
      200: "#eeeeee",
      100: "#f5f5f5",
    },
    custonButtonColor: {
      main: "#B008FF",
      contrastText: "#FFFFFF",
    },
  },
});

export default theme;
