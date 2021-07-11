import { useState, useCallback, useMemo } from 'react';

const useCursor = (currentCursorParam = 0, totalCursorsParam = 0) => {
  const [currentCursor, setCurrentCursor] = useState(currentCursorParam);
  const [totalCursors, setTotalCursors] = useState(totalCursorsParam);

  const prevCursor = useMemo<number>(() => (
    (currentCursor - 1) % totalCursors
  ), [currentCursor, totalCursors]);

  const nextCursor = useMemo<number>(() => (
    (currentCursor + 1) % totalCursors
  ), [currentCursor, totalCursors]);

  const goToPrevCursor = useCallback(() => {
    setCurrentCursor(prevCursor);
  }, [prevCursor]);

  const goToNextCursor = useCallback(() => {
    setCurrentCursor(nextCursor);
  }, [nextCursor]);

  return {
    currentCursor,
    setCurrentCursor,
    totalCursors,
    setTotalCursors,
    prevCursor,
    nextCursor,
    goToPrevCursor,
    goToNextCursor,
  };
};

export default useCursor;
