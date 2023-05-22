import { Paragraph, YStack, XStack, Button } from '@my/ui';
import { ToastViewport, Toast, useToastState } from '@tamagui/toast';
import React from 'react';
import { AlertTriangle, X, Check } from '@tamagui/lucide-icons';
declare module '@tamagui/toast' {
  interface CustomData {
    toastType: 'error' | 'success' | 'warning';
    displayTime: Date;
  }
}
const ToastStructure = () => {
  const currentToast = useToastState();
  const toastTypes = {
    warning: {
      icon: <AlertTriangle color={'white'} />,
      background: '#FFA500',
    },
    error: {
      icon: <X color={'white'} />,
      background: '#B22222',
    },
    success: {
      icon: <Check color={'white'} />,
      background: '#32CD32',
    },
  };
  if (!currentToast) return null;
  if (
    new Date().getTime() - new Date(currentToast.displayTime).getTime() >=
    currentToast.duration!
  )
    return null;
  return (
    <Toast
      key={currentToast.id}
      duration={currentToast.duration}
      enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
      exitStyle={{ opacity: 0, scale: 1, y: -20 }}
      y={0}
      opacity={1}
      scale={1}
      animation="quick"
      viewportName={currentToast.viewportName}
      backgroundColor={toastTypes[currentToast.toastType].background}
    >
      <XStack alignItems="center" space>
        {toastTypes[currentToast.toastType].icon}
        <YStack>
          <Toast.Title color={'white'}>{currentToast.title}</Toast.Title>
          {!!currentToast.message && (
            <Toast.Description color={'white'}>
              {currentToast.message}
            </Toast.Description>
          )}
        </YStack>
      </XStack>
    </Toast>
  );
};

export function ToastComp() {
  return <ToastStructure />;
}
