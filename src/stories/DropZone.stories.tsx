/* eslint-disable @typescript-eslint/naming-convention */

import { useState, useEffect, useCallback } from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import DropZone from '../components/DropZone';

export const Main = () => {
  const label = text('label', 'lorem ipsum dolor');
  const diabled = boolean('diabled', false);
  const accept = text('accept', '*');
  const multiple = boolean('multiple', false);

  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState<string>('');

  const onDrop = useCallback((event: any, files: File[]) => {
    const [_file] = files;
    setFile(_file);
    action('onDrop')(event, files);
  }, []);

  const createURL = async (_file: File) => {
    const _url = URL.createObjectURL(_file);
    setUrl(_url);
  };

  const revokeURL = async (_url: string) => {
    URL.revokeObjectURL(_url);
    setUrl('');
  };

  useEffect(() => {
    if (file) createURL(file);
    return () => {
      if (url) revokeURL(url);
    };
  }, [file]);

  return (
    <div>
      <DropZone
        label={label}
        onDrop={onDrop}
        disabled={diabled}
        accept={accept}
        multiple={multiple}
      />
      <iframe
        title="DropZone"
        src={url}
      />
    </div>
  );
};

export default {
  title: 'DropZone',
};
