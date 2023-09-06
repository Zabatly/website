import { AnimatePresence } from '@tamagui/animate-presence';
import { ArrowLeft, ArrowRight } from '@tamagui/lucide-icons';
import { useState } from 'react';
// TODO: Add dynamaic images from database
// @ts-ignore
import photo1 from './img/birthday.jpg';
// @ts-ignore
import photo2 from './img/engagement.jpg';
import { tokens } from '@tamagui/themes';
export const images = [photo1, photo2];
import {
  Paragraph,
  XStack,
  Card,
  H2,
  Button,
  Image,
  Stack,
  YStack,
} from '@my/ui';
import {
  Dimensions,
  PanResponder,
  StyleSheet,
  Animated,
  Text,
  View,
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
// import Carousel from 'react-native-reanimated-carousel';
// import { Platform, ScrollView } from 'react-native';
import { DraggableScrollView } from './draggableScroll';

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

/*
const YStackEnterable = styled(YStack, {
  variants: {
    isLeft: { true: { x: -300, opacity: 0 } },
    isRight: { true: { x: 300, opacity: 0 } },
  } as const,
});
*/
interface CarouselCard {
  image: string;
}

function DemoCard(props: CarouselCard) {
  return (
    <Card
      w={300}
      h={200}
      marginRight={'$3'}
      elevate
      size="$6"
      bordered
      animation={'bouncy'}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
    >
      <Card.Footer padded>
        <XStack flex={1} />
      </Card.Footer>
      <Card.Background>
        <Image
          opacity={0.8}
          width={500}
          height={300}
          alignSelf="center"
          resizeMode="cover"
          source={{ uri: props.image }}
        />
      </Card.Background>
    </Card>
  );
}
interface venueSlider {
  image: string;
}

export function VenueSlider({ image }: venueSlider) {
  const data = [
    { id: 1, title: 'Party', desc: '', source: require('./img/venue.jpg') },
    {
      id: 2,
      title: 'Engagement',
      desc: '',
      source: require('./img/venue.jpg'),
    },
    { id: 3, title: 'Sports', desc: '', source: require('./img/venue.jpg') },
    { id: 4, title: 'Formal', desc: '', source: require('./img/venue.jpg') },
    { id: 5, title: 'View More', desc: '', source: require('./img/venue.jpg') },
  ];
  const [[page, direction], setPage] = useState([0, 0]);
  //  const media = useMedia();
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const enterVariant =
    direction === 1 || direction === 0 ? 'isRight' : 'isLeft';
  const exitVariant = direction === 1 ? 'isLeft' : 'isRight';
  return (
    <XStack padding="$2" $gtSm={{ padding: '$6' }}>
      <DraggableScrollView showsHorizontalScrollIndicator={false}>
        {data.map((venueObject) => {
          return <DemoCard key={venueObject.id} image={image} />;
        })}
      </DraggableScrollView>
      {/*
<DraggableScrollView
        data={data}
        renderItem={({ item }: any) => (
          <DemoCard
            key={item.id}
            title={item.title}
            desc=""
            buttonName="View"
            image={item.source}
          />
        )}
        keyExtractor={(item: Item): any => item.id}
        removeClippedSubviews={true} // Unmount components when outside of window
        initialNumToRender={3} // Render 3 items initially
        maxToRenderPerBatch={1} // Render 1 item per batch
        updateCellsBatchingPeriod={100} // Increase time between renders
        windowSize={3} // Set window size to 3
      />
        */}
    </XStack>
  );
  /*
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
      */
}
