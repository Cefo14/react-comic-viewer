import { useCallback } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import DropZone from '../../components/DropZone';

import useStyles from './useStyles';

const Home = () => {
  const classes = useStyles();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onDrop = useCallback((event: any, dropFiles: File[]) => {
    // TODO setFilesStorage([...dropFiles]);
  }, []);

  return (
    <Container className={classes.root}>
      <div className={classes.constainer}>
        <Typography
          variant="h1"
          align="center"
        >
          Comic Viewer
        </Typography>
        <DropZone
          label="Drop or Click To Upload File ( .cbz, .cbr, .pdf )"
          onDrop={onDrop}
          accept={['.cbz', '.cbr', '.pdf']}
          multiple
        />
      </div>
    </Container>
  );
};

export default Home;
