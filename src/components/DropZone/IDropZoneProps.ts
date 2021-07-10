import { DropEvent } from 'react-dropzone';

interface IDropZoneProps {
  label?: string
  onDrop?: (event: DropEvent, files: File[]) => void
  disabled?: boolean
  accept?: string | string[]
  multiple?: boolean
}

export default IDropZoneProps;
