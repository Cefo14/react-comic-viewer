import {
  FunctionComponent,
  useEffect,
  memo,
} from 'react';

import Grid from '@material-ui/core/Grid';
import Lightbox from 'react-image-lightbox';

import ImageButton from '../ImageButton';

import useOpen from '../../hooks/useOpen';
import useCursor from '../../hooks/useCursor';

import IImageGalleryProps from './IImageGalleryProps';

import 'react-image-lightbox/style.css';

const ImageGallery: FunctionComponent<IImageGalleryProps> = ({
  images = [],
  disabled = false,
}) => {
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
        data-testid="ImageGallery"
        container
        spacing={2}
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
              <ImageButton
                image={image}
                onClick={handleOpenLightbox(index)}
                disabled={disabled}
              />
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
