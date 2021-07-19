import 'jest-extended';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import faker from 'faker';

import AppBar from '.';

describe('AppBar Component', () => {
  const waitForDrawerMenu = async () => {
    const openDrawerMenu = screen.getByLabelText('open-drawer-menu');
    expect(openDrawerMenu).toBeInTheDocument();

    fireEvent.click(openDrawerMenu);

    await waitFor(() => {
      const drawerMenu = screen.queryByLabelText('drawer-menu');
      expect(drawerMenu).toBeInTheDocument();
    });
  };

  describe('when has no props', () => {
    it('should render the component', () => {
      render(<AppBar />);
      const element = screen.queryByLabelText('AppBar');
      expect(element).toBeInTheDocument();
    });
  });

  describe('when has title prop', () => {
    it('should render the title into the component', () => {
      const title = faker.random.word();
      render(<AppBar title={title} />);
      const element = screen.getByLabelText('AppBar');
      expect(element).toHaveTextContent(title);
    });
  });

  describe('when is loading', () => {
    it('should render loader component', () => {
      render(<AppBar isLoading />);
      const element = screen.queryByLabelText('loading');
      expect(element).toBeInTheDocument();
    });
  });

  describe('when click open-drawer-menu', () => {
    it('should render drawer-menu', async () => {
      render(<AppBar />);
      await waitForDrawerMenu();
    });
  });

  describe('when have files and drawer-menu is open', () => {
    it('should render a file list', async () => {
      const files = new Array(5)
        .fill(null)
        .map((value, index) => (
          new File([new ArrayBuffer(1)], `file_${index}.txt`)
        ));

      const onSelectFile = jest.fn();
      const onDownloadFile = jest.fn();
      const onDeleteFile = jest.fn();

      render((
        <AppBar
          files={files}
          onSelectFile={onSelectFile}
          onDownloadFile={onDownloadFile}
          onDeleteFile={onDeleteFile}
        />
      ));

      await waitForDrawerMenu();

      const fileListItems = screen.getAllByLabelText('file-list-item');
      const downloadFileButtons = screen.getAllByLabelText('download-file');
      const deleteFilesButtons = screen.getAllByLabelText('delete-file');

      expect(fileListItems.length).toBe(files.length);
      expect(downloadFileButtons.length).toBe(files.length);
      expect(deleteFilesButtons.length).toBe(files.length);

      files.forEach((file, index) => {
        const fileListItem = fileListItems[index];
        const downloadFileButton = downloadFileButtons[index];
        const deleteFilesButton = deleteFilesButtons[index];

        expect(fileListItem).toBeInTheDocument();
        expect(fileListItem).toHaveTextContent(file.name);
        expect(downloadFileButton).toBeInTheDocument();
        expect(deleteFilesButton).toBeInTheDocument();
      });

      const randomFileIndex = Math.round(Math.random() * (fileListItems.length - 1));

      const fileListItem = fileListItems[randomFileIndex];
      const downloadFileButton = downloadFileButtons[randomFileIndex];
      const deleteFilesButton = deleteFilesButtons[randomFileIndex];

      fireEvent.click(fileListItem);
      fireEvent.click(downloadFileButton);
      fireEvent.click(deleteFilesButton);

      expect(onSelectFile).toBeCalledTimes(1);
      expect(onDownloadFile).toBeCalledTimes(1);
      expect(onDeleteFile).toBeCalledTimes(1);

      expect(onSelectFile.mock.calls[0][1]).toBe(randomFileIndex);
      expect(onDownloadFile.mock.calls[0][1]).toBe(randomFileIndex);
      expect(onDeleteFile.mock.calls[0][1]).toBe(randomFileIndex);
    });
  });
});
