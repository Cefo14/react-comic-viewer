import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

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

const responsiveFontSizesTheme = responsiveFontSizes(theme);

export default responsiveFontSizesTheme;
