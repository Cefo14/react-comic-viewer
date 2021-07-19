import { BaseSyntheticEvent } from 'react';

interface IAppBarProps {
  title?: string
  files?: File[]
  isLoading?: boolean
  onSelectFile?: (event: BaseSyntheticEvent, index: Number) => void
  onDownloadFile?: (event: BaseSyntheticEvent, index: Number) => void
  onDeleteFile?: (event: BaseSyntheticEvent, index: Number) => void
}

export default IAppBarProps;
