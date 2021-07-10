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

  disableContainer: {
    borderColor: theme.palette.text.disabled,
    cursor: 'no-drop',
  },

  disableLabel: {
    color: theme.palette.text.disabled,
  },
}));

export default useStyles;
