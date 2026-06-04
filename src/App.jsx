import React, { useState, useCallback, useEffect } from 'react';
import slides from './data/slides.json';
import SlideViewer from './components/SlideViewer';
import PdfExport from './components/PdfExport';

function App() {
  const [slideIndex, setSlideIndex] = useState(0);

  const goPrev = useCallback(() => {
    setSlideIndex((i) => Math.max(0, i - 1));
  }, []);

  const goNext = useCallback(() => {
    setSlideIndex((i) => Math.min(slides.length - 1, i + 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  const currentSlide = slides[slideIndex];

  return (
    <>
      <SlideViewer
        slide={currentSlide}
        slideIndex={slideIndex}
        total={slides.length}
        onPrev={goPrev}
        onNext={goNext}
      />
      <PdfExport />
    </>
  );
}

export default App;
