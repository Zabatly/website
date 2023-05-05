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
import React, { Children, useRef, useState } from 'react';
import {
  Dimensions,
  PanResponder,
  StyleSheet,
  Animated,
  Text,
  View,
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import { Platform, ScrollView } from 'react-native';
import { DraggableScrollView } from './draggableScroll';
import { ReactNode } from 'react';
// const PAGE_WIDTH = Platform.OS == 'web' ? window.innerWidth : windowWidth;
const COUNT = 3;

interface CarouselCard {
  title: string;
  desc: string;
  buttonName: string;
  image: string;
}

function DemoCard(props: CarouselCard) {
  return (
    <Card
      w={300}
      marginRight={'$3'}
      elevate
      size="$6"
      bordered
      animation={'bouncy'}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
    >
      <Card.Header padded>
        <H2 color={'#1363ff'}>{props.title}</H2>
        <Paragraph>{props.desc}</Paragraph>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} />
      </Card.Footer>
      <Card.Background>
        <Image
          width={500}
          height={300}
          alignSelf="center"
          resizeMode="cover"
          source={props.image as any}
        />
      </Card.Background>
    </Card>
    /*
    <Card
      w={'40%'}
      marginRight={'1%'}
      animation={'bouncy'}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
      elevate
      size="$6"
      bordered
    >
      <Card.Header padded>
        <H2>{props.title}</H2>
        <Paragraph>{props.desc}</Paragraph>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} />
        <Button theme={'blue'} borderRadius="$10">
          {props.buttonName}
        </Button>
      </Card.Footer>
    </Card>
    */
  );
}
interface Item {
  id: number;
  title: string;
  desc: string;
  source: string;
}
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
interface renderItemProps {
  item: Item;
}
const WebDraggableSlider = () => {
  return (
    <DraggableScrollView
      data={data}
      // @ts-ignore
      renderItem={({ item }: any) => (
        <DemoCard
          key={item.id}
          title={item.title}
          desc=""
          buttonName="View"
          image={item.source}
        />
      )}
      // @ts-ignore
      keyExtractor={(item) => item.id}
      removeClippedSubviews={true} // Unmount components when outside of window
      initialNumToRender={2} // Reduce initial render amount
      maxToRenderPerBatch={1} // Reduce number in each render batch
      updateCellsBatchingPeriod={100} // Increase time between renders
      windowSize={7} // Reduce the window size
    />
  );
};

export function CategoriesSlider() {
  return (
    <WebDraggableSlider />

    /*
    <XStack>
      <Carousel
        vertical={false}
        width={1000}
        height={400}
        windowSize={4}
        autoPlay={false}
        autoPlayInterval={2000}
        data={[...new Array(12).keys()]}
        renderItem={({ index }) => (
          <XStack w={'100%'} gap="$0.75">
            <DemoCard title="Wedding" desc="" buttonName="Check now!" />
            <DemoCard title="Crap" desc="" buttonName="Check now!" />
            <DemoCard title="Crap2" desc="" buttonName="Check now!" />
            <DemoCard title="Crap3" desc="" buttonName="Check now!" />
          </XStack>
        )}
      />
    </XStack>
    */
  );

  /*
         <Carousel
      vertical={false}
      width={1000}
      height={400}
      windowSize={4}
      autoPlay={false}
      autoPlayInterval={2000}
      data={[...new Array(12).keys()]}
      renderItem={({ index }) => (
        <XStack w={'100%'} gap="$0.75">
          <DemoCard
  
            title="Wedding"
            desc=""
            buttonName="Check now!"
          />
          <DemoCard
  
            title="Crap"
            desc=""
            buttonName="Check now!"
          />
          <DemoCard
  
            title="Crap2"
            desc=""
            buttonName="Check now!"
          />
          <DemoCard
  
            title="Crap3"
            desc=""
            buttonName="Check now!"
          />
        </XStack>
      )}
    />
      */
}
