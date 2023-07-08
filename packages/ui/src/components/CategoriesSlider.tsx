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
// import Carousel from 'react-native-reanimated-carousel';
//import { Platform, ScrollView } from 'react-native';
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
        <H2>{props.title}</H2>
        <Paragraph>{props.desc}</Paragraph>
      </Card.Header>
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
          source={props.image as any}
        />
      </Card.Background>
    </Card>
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

export function CategoriesSlider() {
  return (
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
  );
}
