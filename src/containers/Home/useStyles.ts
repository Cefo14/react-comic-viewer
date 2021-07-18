import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },

  constainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',

    '& > *:not(:last-child)': {
      paddingBottom: theme.spacing(4),
    },
  },
}));

export default useStyles;
