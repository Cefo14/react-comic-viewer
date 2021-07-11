import {
  FunctionComponent,
  memo,
} from 'react';
import clsx from 'clsx';

import IImageButtonProps from './IImageButtonProps';

import useStyles from './useStyles';

const ImageButton: FunctionComponent<IImageButtonProps> = ({
  image = '',
  onClick,
  disabled = false,
}) => {
  const classes = useStyles();

  return (
    <button
      data-testid="ImageButton"
      type="button"
      onClick={onClick}
      className={clsx(
        classes.imageButton,
        { [classes.disableImageButton]: disabled },
      )}
      disabled={disabled}
    >
      <img
        alt={image}
        src={image}
        className={classes.image}
      />
    </button>
  );
};

export default memo(ImageButton);
