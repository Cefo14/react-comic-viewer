import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(1),
    zIndex: 999,
  },

  textContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: theme.spacing(2),
  },

  listContainer: {
    width: '250px',
  },
}));

export default useStyles;
