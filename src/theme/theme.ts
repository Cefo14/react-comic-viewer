import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },

  typography: {
    fontFamily: "'Bangers', cursive",
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
        fontFamily: "'Bangers', cursive" as any,
      },
    },
  },
});

export default theme;
