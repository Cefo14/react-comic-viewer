import 'jest-extended';
import {
  render,
  screen,
  fireEvent,
} from '@testing-library/react';
import faker from 'faker';

import ImageButton from '.';

describe('ImageButton Component', () => {
  let image: string;
  let disabled: boolean;

  beforeEach(() => {
    image = faker.image.imageUrl();
    disabled = false;
  });

  describe('when has no props', () => {
    it('should render the component', () => {
      render(<ImageButton />);
      const element = screen.getByTestId('ImageButton');
      expect(element).toBeInTheDocument();
    });
  });

  describe('when have image', () => {
    it('should render the component with image', () => {
      render((
        <ImageButton
          image={image}
          disabled={disabled}
        />
      ));

      const element = screen.getByTestId('ImageButton');

      const img = element.querySelectorAll('img');
      expect(img).not.toBeEmpty();
    });
  });

  describe('when is disabled', () => {
    it('should render the component with disabled actions', () => {
      render((
        <ImageButton
          image={image}
          disabled
        />
      ));

      const element = screen.getByTestId('ImageButton');
      expect(element?.outerHTML).toMatch(/disable/ig);
    });
  });

  describe('when onClick', () => {
    it('should call onClick event', () => {
      const onClick = jest.fn();
      render(<ImageButton onClick={onClick} />);

      const element = screen.getByTestId('ImageButton');

      fireEvent.click(element);
      expect(onClick).toBeCalledTimes(1);
    });
  });
});
