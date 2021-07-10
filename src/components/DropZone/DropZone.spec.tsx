import 'jest-extended';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import faker from 'faker';

import DropZone from '.';

const waitForRender = async (rerender: any, ui: JSX.Element) => {
  await act(() => waitFor(() => rerender(ui)));
};

describe('DropZone Component', () => {
  let label: string;
  let onDrop: jest.Mock;
  let disabled: boolean;
  let accept: string;
  let multiple: boolean;

  beforeEach(() => {
    label = faker.random.word();
    onDrop = jest.fn();
    disabled = false;
    accept = '*';
    multiple = false;
  });

  describe('when has no props', () => {
    it('should render the component', () => {
      render(<DropZone />);
      const element = screen.queryByLabelText('DropZone');
      expect(element).toBeInTheDocument();
    });
  });

  describe('when has render props', () => {
    it('should render the component with props', () => {
      render((
        <DropZone
          label={label}
          onDrop={onDrop}
          disabled
          accept="text/plain"
          multiple={multiple}
        />
      ));

      const element = screen.queryByLabelText('DropZone');
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent(label);

      expect(element?.outerHTML).toMatch(/disable/ig);
      expect(element?.outerHTML).toMatch(/text\/plain/ig);
    });
  });

  describe('when drop valid file', () => {
    it('should onDrop fireEvent', async () => {
      const ui = (
        <DropZone
          label={label}
          onDrop={onDrop}
          disabled={disabled}
          accept={accept}
          multiple={multiple}
        />
      );
      const { container, rerender } = render(ui);

      const input = container.querySelector('input[type="file"]') as Element;
      expect(input).toBeInTheDocument();

      fireEvent.change(input, {
        target: {
          files: [new File([''], 'image.png', { type: 'image/png' })],
        },
      });

      await waitForRender(rerender, ui);

      expect(onDrop).toHaveBeenCalled();
    });
  });
});
