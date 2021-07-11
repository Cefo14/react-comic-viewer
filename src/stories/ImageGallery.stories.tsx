import { useMemo } from 'react';
import { number, boolean } from '@storybook/addon-knobs';

import ImageGallery from '../components/ImageGallery';

export const Main = () => {
  const totalImages = number('images', 9);
  const disabled = boolean('disabled', false);

  const images = useMemo(() => (
    new Array(totalImages)
      .fill(undefined)
      .map((value, index) => (
        `https://dummyimage.com/600x400/000/ffffff?text=image+${index + 1}`
      ))
  ), [totalImages]);

  return (
    <ImageGallery
      images={images}
      disabled={disabled}
    />
  );
};

export default {
  title: 'ImageGallery',
};
