import {
  green,
  blue,
  pink,
} from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: blue,
    error: pink,
  },
});