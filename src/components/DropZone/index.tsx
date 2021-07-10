/* eslint-disable react/jsx-props-no-spreading */

import { FunctionComponent, memo, useCallback } from 'react';
import { useDropzone, FileRejection, DropEvent } from 'react-dropzone';
import clsx from 'clsx';

import Typography from '@material-ui/core/Typography';

import IDropZoneProps from './IDropZoneProps';

import useStyles from './useStyles';

const DropZone: FunctionComponent<IDropZoneProps> = ({
  label = '',
  onDrop = () => {},
  disabled = false,
  accept = '*',
  multiple = false,
}) => {
  const classes = useStyles();

  const handleOnDrop = useCallback(
    (
      acceptedFiles: File[],
      fileRejections: FileRejection[],
      event: DropEvent,
    ) => {
      onDrop(event, acceptedFiles);
    },
    [onDrop],
  );

  const {
    getRootProps,
    getInputProps,
  } = useDropzone({
    onDrop: handleOnDrop,
    disabled,
    accept,
    multiple,
  });

  return (
    <div
      className={clsx(
        'd-flex-v-center-h-center',
        classes.container,
        { [classes.disableContainer]: disabled },
      )}
      {...getRootProps()}
      aria-label="DropZone"
      data-testid="DropZone"
    >
      <input
        {...getInputProps()}
      />
      <Typography
        variant="h4"
        align="center"
        className={clsx({ [classes.disableLabel]: disabled })}
      >
        { label }
      </Typography>
    </div>
  );
};

export default memo(DropZone);
