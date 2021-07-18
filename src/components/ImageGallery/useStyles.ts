import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: 'grid',
    gap: theme.spacing(1),
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 6rem), 1fr))',
  },

  gridItem: {
    gridColumn: 'span 3',
  },
}));

export default useStyles;
