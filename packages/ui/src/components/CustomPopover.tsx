import { Popover, PopoverContentProps, PopoverProps } from 'tamagui';
import { ReactNode } from 'react';
import { CustomSheet, CustomSheetProps } from './CustomSheet';

export type CustomPopoverProps = PopoverProps & {
  trigger?: ReactNode;
  hideArrow?: boolean;
  contentProps?: PopoverContentProps;
  isBouncy?: boolean;
  sheetProps?: CustomSheetProps;
};

export function CustomPopOver({
  trigger,
  children,
  hideArrow,
  contentProps,
  isBouncy = true,
  sheetProps,
  ...popoverProps
}: CustomPopoverProps) {
  return (
    <Popover size="$6" {...popoverProps}>
      <Popover.Trigger asChild>{trigger}</Popover.Trigger>
      <Popover.Adapt when={'sm'} platform="touch">
        <CustomSheet {...sheetProps}>
          <Popover.Adapt.Contents />
        </CustomSheet>
      </Popover.Adapt>

      <Popover.Content
        borderWidth={1}
        borderColor="$borderColor"
        {...(isBouncy && {
          enterStyle: { x: 0, y: -10, opacity: 0 },
          exitStyle: { x: 0, y: -10, opacity: 0, pointerEvents: 'none' },
          x: 0,
          y: 0,
          o: 1,
          animation: [
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ],
        })}
        elevate
        padding={contentProps?.padding || 0}
        {...contentProps}
      >
        {children}
      </Popover.Content>
    </Popover>
  );
}
