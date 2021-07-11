import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  imageButton: {
    all: 'unset',
    cursor: 'pointer',
  },

  image: {
    display: 'block',
    maxWidth: '100%',
  },

  disableImageButton: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
}));

export default useStyles;
