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
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  PanResponder,
  ScrollView,
  StyleSheet,
  Animated,
  Text,
  View,
} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import { Platform } from 'react-native';
const { width: windowWidth } = Dimensions.get('window');
// const PAGE_WIDTH = Platform.OS == 'web' ? window.innerWidth : windowWidth;
const COUNT = 3;

interface CarouselCard {
  title: string;
  desc: string;
  buttonName: string;
  cardWidth: number;
}

function DemoCard(props: CarouselCard) {
  return (
    <Card
      w={props.cardWidth}
      animation={'bouncy'}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
      elevate
      size="$5"
      bordered
      marginHorizontal={'$6'}
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
      <Card.Background>
        <Image
          resizeMode="cover"
          alignSelf="center"
          source={{
            width: 300,
            height: 300,
            uri: 'https://picsum.photos/200/300',
          }}
        />
      </Card.Background>
    </Card>
  );
}

const data = [
  { id: 1, title: 'Item 1', desc: '', buttonName: 'View' },
  { id: 2, title: 'Item 2', desc: '', buttonName: 'View' },
  { id: 3, title: 'Item 3', desc: '', buttonName: 'View' },
  { id: 4, title: 'Item 4', desc: '', buttonName: 'View' },
  { id: 5, title: 'Item 5', desc: '', buttonName: 'View' },
];

export function CategoriesSlider() {
  const [containerWidth, setContainerWidth] = useState(0);
  const renderItem = ({ index }) => (
    <XStack space={'$2'}>
      <DemoCard
        title={data[index].title}
        desc={data[index].desc}
        buttonName={data[index].buttonName}
        cardWidth={250}
      />
      <DemoCard
        title={data[index].title}
        desc={data[index].desc}
        buttonName={data[index].buttonName}
        cardWidth={250}
      />
      <DemoCard
        title={data[index].title}
        desc={data[index].desc}
        buttonName={data[index].buttonName}
        cardWidth={250}
      />
    </XStack>
  );

  const onLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width / 3);
  };

  console.log(containerWidth);
  return (
    <XStack backgroundColor={'red'} onLayout={onLayout}></XStack>
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
