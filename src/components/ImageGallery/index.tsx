import {
  FunctionComponent,
  useEffect,
  memo,
} from 'react';

import Lightbox from 'react-image-lightbox';

import ImageButton from '../ImageButton';

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
      <div className={classes.gridContainer}>
        {
          images.map((image, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={classes.gridItem}
            >
              <ImageButton
                image={image}
                onClick={handleOpenLightbox(index)}
                disabled={disabled}
              />
            </div>
          ))
        }
      </div>
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
