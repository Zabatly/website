import { AnimatePresence } from '@tamagui/animate-presence';
import { ArrowLeft, ArrowRight } from '@tamagui/lucide-icons';
import { useState } from 'react';
import { Button, Image, XStack, YStack, styled, useMedia } from 'tamagui';

// TODO: Add dynamaic images from database
// @ts-ignore
import photo1 from './img/birthday.jpg';
// @ts-ignore
import photo2 from './img/engagement.jpg';
import { tokens } from '@tamagui/themes';
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
  const media = useMedia();
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
      backgroundColor="red"
      position="relative"
      height={300}
      $gtXs={{
        w: 600,
      }}
      $gtMd={{
        w: 650,
      }}
      width={400}
      alignItems="center"
      alignSelf="center"
    >
      <AnimatePresence enterVariant={enterVariant} exitVariant={exitVariant}>
        {
          // @ts-ignore
          <YStackEnterable
            key={page}
            animation="bouncy"
            fullscreen
            x={0}
            opacity={1}
          >
            <Image
              resizeMethod={'scale'}
              resizeMode={'stretch'}
              source={images[imageIndex]}
              width={media.gtXs ? 650 : 400}
              height={300}
            />
          </YStackEnterable>
        }
      </AnimatePresence>

      <Button
        icon={ArrowLeft}
        size="$4"
        position="absolute"
        left={25}
        circular
        elevate
        onPress={() => paginate(-1)}
      />
      <Button
        icon={ArrowRight}
        size="$4"
        position="absolute"
        right={25}
        circular
        elevate
        onPress={() => paginate(1)}
      />
    </XStack>
  );
}
