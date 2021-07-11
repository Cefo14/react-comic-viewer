import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import ImageButton from '../components/ImageButton';

export const Main = () => {
  const image = text('image', 'https://dummyimage.com/600x400/000/ffffff?text=image');
  const disabled = boolean('disabled', false);

  return (
    <ImageButton
      image={image}
      disabled={disabled}
      onClick={action('onClick')}
    />
  );
};

export default {
  title: 'ImageButton',
};
