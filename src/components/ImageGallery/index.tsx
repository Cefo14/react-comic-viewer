import {
  FunctionComponent,
  useEffect,
  memo,
} from 'react';
import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import Lightbox from 'react-image-lightbox';

import useOpen from '../../hooks/useOpen';
import useCursor from '../../hooks/useCursor';

import IImageGalleryProps from './IImageGalleryProps';

import 'react-image-lightbox/style.css';
import useStyles from './useStyles';

const ImageGallery: FunctionComponent<IImageGalleryProps> = ({
  images = [],
  disabled = false,
}) => {
  const classes = useStyles();

  const {
    isOpen: lightboxIsOpen,
    open: openLightbox,
    close: closeLightbox,
  } = useOpen();

  const {
    currentCursor,
    setCurrentCursor,
    setTotalCursors,
    prevCursor,
    nextCursor,
    goToPrevCursor,
    goToNextCursor,
  } = useCursor();

  const handleOpenLightbox = (index: number) => () => {
    setCurrentCursor(index);
    openLightbox();
  };

  useEffect(() => {
    setTotalCursors(images.length);
  }, [images.length]);

  return (
    <>
      <Grid
        container
        spacing={2}
        data-testid="ImageGallery"
      >
        {
          images.map((image, index) => (
            <Grid
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              item
              sm={4}
              xs={4}
            >
              <button
                type="button"
                onClick={handleOpenLightbox(index)}
                className={clsx(
                  classes.imageButton,
                  { [classes.disableImageButton]: disabled },
                )}
                disabled={disabled}
              >
                <img
                  alt={image}
                  src={image}
                  className={classes.image}
                />
              </button>
            </Grid>
          ))
        }
      </Grid>
      {
        lightboxIsOpen && (
          <Lightbox
            mainSrc={images[currentCursor]}
            nextSrc={images[nextCursor]}
            prevSrc={images[prevCursor]}
            onCloseRequest={closeLightbox}
            onMovePrevRequest={goToPrevCursor}
            onMoveNextRequest={goToNextCursor}
          />
        )
      }
    </>
  );
};

export default memo(ImageGallery);
