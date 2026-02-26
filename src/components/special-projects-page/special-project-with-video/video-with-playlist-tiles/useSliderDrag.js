import { useRef, useState } from "react";

export const useSliderDrag = ({ setActiveVideoUrl }) => {
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const isPointerDownRef = useRef(false);
  const didDragRef = useRef(false);

  const onSliderPointerDown = event => {
    const slider = event.currentTarget;
    isPointerDownRef.current = true;
    didDragRef.current = false;
    dragStartXRef.current = event.clientX;
    dragStartScrollLeftRef.current = slider.scrollLeft;
    setIsDragging(true);

    slider.setPointerCapture?.(event.pointerId);
  };
  const onSliderPointerMove = event => {
    if (!isPointerDownRef.current) return;

    const slider = event.currentTarget;
    const deltaX = event.clientX - dragStartXRef.current;

    if (Math.abs(deltaX) > 4) {
      didDragRef.current = true;
    }

    slider.scrollLeft = dragStartScrollLeftRef.current - deltaX;
  };

  const onSliderPointerUp = event => {
    isPointerDownRef.current = false;
    setIsDragging(false);
    event.currentTarget.releasePointerCapture?.(event.pointerId);

    if (didDragRef.current) {
      setTimeout(() => {
        didDragRef.current = false;
      }, 0);
    }
  };

  const onThumbnailClick = url => {
    if (didDragRef.current) return;
    setActiveVideoUrl(url);
  };

  return {
    isDragging,
    onSliderPointerDown,
    onSliderPointerMove,
    onSliderPointerUp,
    onThumbnailClick,
  };
};
