import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    border: '2px dashed #000',
    borderColor: theme.palette.text.primary,
    width: '100%',
    height: '25vh',
    borderRadius: '4px',
    cursor: 'pointer',
  },

  centerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
  },

  disableContainer: {
    borderColor: theme.palette.text.disabled,
    cursor: 'no-drop',
  },

  disableLabel: {
    color: theme.palette.text.disabled,
  },
}));

export default useStyles;
