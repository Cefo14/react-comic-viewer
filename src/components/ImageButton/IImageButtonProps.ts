import { BaseSyntheticEvent } from 'react';

interface IImageButtonProps {
  image?: string
  onClick?: (event: BaseSyntheticEvent) => void;
  disabled?: boolean
}

export default IImageButtonProps;
