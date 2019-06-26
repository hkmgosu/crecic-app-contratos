import { createMuiTheme } from '@material-ui/core/styles';
import blue from "@material-ui/core/colors/blue";
import deePurple from "@material-ui/core/colors/deepPurple";
import red from "@material-ui/core/colors/red";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[200],
      main: blue[500],
      dark: blue[800]
    },
    secondary: {
      light: deePurple[300],
      main: deePurple[500],
      dark: deePurple[700]
    },
    error: {
      light: red[300],
      main: red[500],
      dark: red[700]
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default theme;