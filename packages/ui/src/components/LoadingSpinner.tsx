import { YStack, Spinner } from '@my/ui';
import React from 'react';
export const LoadingSpinner = () => {
  return (
    <YStack
      f={1}
      backgroundColor={'$backgroundStrong'}
      ai={'center'}
      jc="center"
    >
      <Spinner size="large" color="$blue9" />
    </YStack>
  );
};
