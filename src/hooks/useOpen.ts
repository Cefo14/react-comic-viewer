import { useState, useCallback } from 'react';

const useOpen = (isOpenParam = false) => {
  const [isOpen, setIsOpen] = useState(isOpenParam);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    open,
    close,
  };
};

export default useOpen;
