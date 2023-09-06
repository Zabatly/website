import { ScrollViewProps, Sheet } from 'tamagui';
import { PropsWithChildren, useState } from 'react';
import type { SheetProps } from '@tamagui/sheet/src/types';

export type CustomSheetProps = PropsWithChildren<
  SheetProps & {
    hideHandle?: boolean;
    fullScreen?: boolean;
    enableScroll?: boolean;
    scrollviewProps?: ScrollViewProps;
  }
>;

export function CustomSheet({
  hideHandle,
  children,
  fullScreen,
  snapPoints = [85, 50, 25],
  enableScroll,
  scrollviewProps,
  ...sheetProps
}: CustomSheetProps) {
  const [position, setPosition] = useState(0);
  
  return (
    <Sheet
      modal={true}
      dismissOnSnapToBottom
      {...sheetProps}
      snapPoints={fullScreen ? [100, 0] : snapPoints}
      disableDrag={fullScreen || sheetProps.disableDrag}
      position={position}
      onPositionChange={setPosition}
      native
    >
      {!hideHandle && !fullScreen && (
        <Sheet.Handle backgroundColor={'$borderColorFocus'} />
      )}
      <Sheet.Frame
        flex={1}
        padding={'$4'}
        borderRadius={fullScreen ? 0 : undefined}
      >
        {enableScroll ? (
          <Sheet.ScrollView {...scrollviewProps}>{children}</Sheet.ScrollView>
        ) : (
          <>{children}</>
        )}
      </Sheet.Frame>
    </Sheet>
  );
}
