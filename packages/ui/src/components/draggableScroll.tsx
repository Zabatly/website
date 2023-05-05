import React, { ComponentProps } from 'react';
import { FlatList } from 'react-native';
import { useDraggableScroll } from 'app/utils/draggableScroll';

export const DraggableScrollView = React.forwardRef<
  FlatList,
  ComponentProps<typeof FlatList>
>(function DraggableScrollView(props, ref) {
  const { refs } = useDraggableScroll<FlatList>({
    outerRef: ref,
    cursor: 'grab', // optional, default
  });

  return (
    <FlatList
      ref={refs}
      horizontal
      showsHorizontalScrollIndicator={false}
      {...props}
    />
  );
});
