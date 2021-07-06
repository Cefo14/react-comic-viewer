import { FunctionComponent, memo } from 'react';
import { ThemeProvider, } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme';
import IThemeProps from './types/IThemeProps';

const Theme: FunctionComponent<IThemeProps> = ({ children })=> (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    { children }
  </ThemeProvider>
);

export default memo(Theme);
