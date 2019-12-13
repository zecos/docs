import {
  green,
  blue,
  pink,
} from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3B4252',
      light: '#D8DEE9',
      dark: '#2E3440',
      // contrastText: '',
    },
    secondary: {
      main: '#434C5E',
      light: '#E5E9F0',
      dark: '#3B4252',
      // contrastText: '',
    },
    error: {
      main: '#BF616A',
      // light: '',
      // dark: '',
      // contrastText: '',
    },
  },
});