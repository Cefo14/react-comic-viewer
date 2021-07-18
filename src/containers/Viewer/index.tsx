import { useState, useEffect } from 'react';

import Container from '@material-ui/core/Container';

import ImageGallery from '../../components/ImageGallery';

const Viewer = () => {
  const [imagesURL, setImagesURL] = useState<string[]>([]);

  useEffect(() => {
    setImagesURL(
      new Array(9)
        .fill('')
        .map(() => {
          const hexNumber = Math.round(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
          const imageURL = `https://dummyimage.com/600x1000/0000000/${hexNumber}`;
          return imageURL;
        }),
    );
  }, []);

  return (
    <Container>
      <ImageGallery
        images={imagesURL}
      />
    </Container>
  );
};

export default Viewer;
