import { useEffect, useRef, useMemo, ForwardedRef } from 'react';
import { Platform, findNodeHandle } from 'react-native';
import type { FlatList } from 'react-native';

// Credits: https://github.com/gregberge/react-merge-refs/blob/main/src/index.tsx
function mergeRefs<T = any>(
  refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>
): React.RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };
}

// Credits: https://gist.github.com/nandorojo/92e7301a49a8b9575bb24b3b1ddc19bf#tldr
type Props<Scrollable extends FlatList = FlatList> = {
  cursor?: string;
  outerRef?: ForwardedRef<Scrollable>;
};

export function useDraggableScroll<Scrollable extends FlatList = FlatList>({
  outerRef,
  cursor = 'grab',
}: Props<Scrollable> = {}) {
  const ref = useRef<Scrollable>(null);

  useEffect(() => {
    if (Platform.OS !== 'web' || !ref.current) {
      return;
    }
    const slider = findNodeHandle(ref.current) as unknown as HTMLDivElement;
    if (!slider) {
      return;
    }
    let isDragging = false;
    let isMouseDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const mouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;

      slider.style.cursor = cursor;
    };

    const mouseUp = () => {
      if (isDragging)
        slider.addEventListener('click', (e) => e.stopPropagation(), {
          once: true,
        });

      isMouseDown = false;
      isDragging = false;
      slider.style.cursor = 'default';
    };

    const mouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;

      // Require n pixels momement before start of drag (3 in this case )
      const x = e.pageX - slider.offsetLeft;
      if (Math.abs(x - startX) < 3) return;

      isDragging = true;
      e.preventDefault();
      const walk = x - startX;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);
    window.addEventListener('mousemove', mouseMove);

    return () => {
      slider.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      window.removeEventListener('mousemove', mouseMove);
    };
  }, [cursor]);

  const refs = useMemo(
    () => mergeRefs(outerRef ? [ref, outerRef] : [ref]),
    [ref, outerRef]
  );

  return {
    refs,
  };
}
