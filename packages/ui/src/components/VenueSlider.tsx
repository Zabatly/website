import { AnimatePresence } from '@tamagui/animate-presence';
import { ArrowLeft, ArrowRight } from '@tamagui/lucide-icons';
import { useState } from 'react';
import { Button, Image, XStack, YStack, styled } from 'tamagui';

// @ts-ignore
import photo1 from './img/birthday.jpg';
// @ts-ignore
import photo2 from './img/engagement.jpg';
export const images = [photo1, photo2];
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};
const YStackEnterable = styled(YStack, {
  variants: {
    isLeft: { true: { x: -300, opacity: 0 } },
    isRight: { true: { x: 300, opacity: 0 } },
  } as const,
});
export function VenueSlider() {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const enterVariant =
    direction === 1 || direction === 0 ? 'isRight' : 'isLeft';
  const exitVariant = direction === 1 ? 'isLeft' : 'isRight';
  return (
    <XStack
      overflow="hidden"
      backgroundColor="#000"
      position="relative"
      height={300}
      $gtXs={{
        w: 600,
      }}
      $gtMd={{
        w: 780,
      }}
      width={400}
      alignItems="center"
    >
      <AnimatePresence enterVariant={enterVariant} exitVariant={exitVariant}>
        <YStackEnterable
          key={page}
          animation="bouncy"
          fullscreen
          x={0}
          opacity={1}
        >
          <Image
            source={{ uri: images[imageIndex], width: 780, height: 300 }}
          />
        </YStackEnterable>
      </AnimatePresence>

      <Button
        icon={ArrowLeft}
        size="$5"
        position="absolute"
        left={30}
        circular
        elevate
        onPress={() => paginate(-1)}
      />
      <Button
        icon={ArrowRight}
        size="$5"
        position="absolute"
        right="$4"
        circular
        elevate
        onPress={() => paginate(1)}
      />
    </XStack>
  );
}
