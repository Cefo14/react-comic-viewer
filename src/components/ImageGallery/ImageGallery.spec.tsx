import 'jest-extended';
import {
  render,
  screen,
} from '@testing-library/react';
import faker from 'faker';

import ImageGallery from '.';

describe('ImageGallery Component', () => {
  let images: string[];
  let disabled: boolean;

  beforeEach(() => {
    images = new Array(9).fill(undefined).map(() => faker.image.imageUrl());
    disabled = false;
  });

  describe('when has no props', () => {
    it('should render the component', () => {
      render(<ImageGallery />);
      const element = screen.getByTestId('ImageGallery');
      expect(element).toBeInTheDocument();
    });
  });

  describe('when have images', () => {
    it('should render the component with images', () => {
      render((
        <ImageGallery
          images={images}
          disabled={disabled}
        />
      ));

      const element = screen.getByTestId('ImageGallery');

      const imgs = element.querySelectorAll('img');
      expect(imgs.length).toBe(images.length);
    });
  });

  describe('when is disabled', () => {
    it('should render the component with disabled actions', () => {
      render((
        <ImageGallery
          images={images}
          disabled
        />
      ));

      const element = screen.getByTestId('ImageGallery');
      expect(element?.outerHTML).toMatch(/disable/ig);
    });
  });
});
