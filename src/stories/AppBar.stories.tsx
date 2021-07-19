import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs';
import { useMemo } from 'react';

import AppBar from '../components/AppBar';

export const Main = () => {
  const title = text('title', 'Title');
  const isLoading = boolean('isLoading', false);
  const totalFiles = number('files', 3);

  const files = useMemo(() => (
    new Array(totalFiles)
      .fill(null)
      .map((value, index) => (
        new File([new ArrayBuffer(1)], `file_${index}.txt`)
      ))
  ), [totalFiles]);

  return (
    <AppBar
      title={title}
      isLoading={isLoading}
      files={files}
      onSelectFile={action('onSelectFile')}
      onDownloadFile={action('onDownloadFile')}
      onDeleteFile={action('onDeleteFile')}
    />
  );
};

export default {
  title: 'AppBar',
};
