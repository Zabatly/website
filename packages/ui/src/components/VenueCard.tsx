import { Button, Card, H4, XStack, Image, Paragraph, YStack } from '@my/ui';
import { StarFill } from '@tamagui-extras/core';
import React from 'react';
import {
  MapPin,
  Hash,
  Flame,
  TrendingUp,
  Heart,
  HeartOff,
  User,
} from '@tamagui/lucide-icons';
const disabledBtnStyle = {
  outlineColor: 'none',
  outlineWidth: '$0',
  bw: '$0',
  borderColor: 'transparent',
};
export function VenueCard() {
  return (
    //box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    <Card
      w={300}
      h={350}
      size="$6"
      elevate
      bordered
      animation={'bouncy'}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
      shadowRadius={'$0.2'}
      shadowColor={'rgba(0, 0, 0, 0.24)'}
    >
      <Card.Background>
        <Image
          width={350}
          height={175}
          opacity={0.5}
          alignSelf="center"
          resizeMode="cover"
          source={{
            uri: 'https://images.squarespace-cdn.com/content/v1/5ada74b8e17ba3c5359136a4/1599702204937-WOF9RU65Q89UHML5TITE/building-a-wedding-venue.jpg',
          }}
          marginBottom={'$2'}
        />
      </Card.Background>
      <YStack f={1} padding={'$2'}>
        <XStack w={'100%'} h={70}>
          <XStack space={'$2'}>
            <Button
              theme={'blue'}
              size={'$2'}
              icon={<Flame color={'orange'} />}
            >
              Hot
            </Button>
            <Button
              theme={'blue'}
              size={'$2'}
              icon={<TrendingUp color={'green'} />}
            >
              Trending
            </Button>
          </XStack>
          <XStack w={'50%'} paddingHorizontal={'$3'} justifyContent="flex-end">
            <Button
              size={'$2'}
              justifyContent="center"
              outlineColor="transparent"
              focusStyle={disabledBtnStyle as any}
              pressStyle={disabledBtnStyle as any}
              icon={<Heart size={'$1'} />}
              unstyled
            />
          </XStack>
        </XStack>
        <XStack w={'100%'} h={100}>
          <YStack w={'50%'} justifyContent="flex-end">
            <H4>Weird Venue</H4>
            <XStack space={'$1.5'}>
              <MapPin size={'$1'} />
              <Paragraph fontWeight={'500'}>Cairo, Egypt</Paragraph>
            </XStack>
          </YStack>
          <YStack justifyContent="flex-end" alignItems="flex-end">
            <Paragraph fontWeight={'bold'} color={'#DD1C1A'} fontSize={'$5'}>
              40% OFF
            </Paragraph>
            <Paragraph
              color={'grey'}
              textDecorationLine="line-through"
              fontSize={'$4'}
            >
              1500 EGP
            </Paragraph>
            <Paragraph color={'#31D843'} fontWeight={'bold'} fontSize={'$5'}>
              1000 EGP / DAY
            </Paragraph>
          </YStack>
        </XStack>
        <XStack marginVertical={'$1.5'} justifyContent="space-between">
          <XStack space="$1">
            <Button theme={'blue'} size={'$2'} icon={<User />}>
              100 Guests
            </Button>
            <Button theme={'blue'} size={'$2'} icon={<Hash />}>
              Wedding
            </Button>
          </XStack>
          <XStack>
            <Paragraph>
              <StarFill color={'#FFD700'} />
            </Paragraph>
            <Paragraph fontWeight={'bold'}>4.8</Paragraph>
          </XStack>
        </XStack>
        <YStack f={1}>
          <Paragraph
            // @ts-ignore
            numberOfLines={3}
            // @ts-ignore
            ellipsizeMode="tail"
            fontSize={'$4'}
            w={'100%'}
            marginVertical={'$2'}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            laoreet tellus fringilla leo dignissim ultrices. Ut malesuada, justo
            nec scelerisque efficitur, magna libero fringilla elit, eleifend
            vulputate augue risus eu massa. Integer in posuere lorem. Quisque
            laoreet metus nibh, eget sodales ante congue in. Aliquam malesuada
            elementum elementum. Nullam diam dolor, varius ullamcorper eleifend
            sed, auctor sit amet mauris
          </Paragraph>
        </YStack>
      </YStack>
      {/* 
        <YStack backgroundColor={'red'} flex={1} paddingHorizontal={'$1.5'}>
        <XStack justifyContent="space-between" space>
          <H4>Weird Venue</H4>
          <XStack>
            <Paragraph>
              <StarFill color={'#FFD700'} />
            </Paragraph>
            <Paragraph fontWeight={'bold'}>4.8</Paragraph>
          </XStack>
        </XStack>
        <XStack marginVertical={'$2'} space={'$1.5'}>
          <MapPin />
          <Paragraph fontWeight={'500'}>Cairo, Egypt</Paragraph>
        </XStack>

        <XStack space={'$1.5'}>
          <Button theme={'blue'} size={'$2'} icon={<Hash />}>
            Wedding
          </Button>
          <Button theme={'blue'} size={'$2'} icon={<Hash />}>
            Engagement
          </Button>
        </XStack>
        <XStack marginVertical={'$4'} justifyContent="space-evenly">
          <Paragraph color={'$green9Light'} fontWeight={'bold'} fontSize={'$8'}>
            1000 EGP
          </Paragraph>
          <Paragraph
            color={'grey'}
            textDecorationLine="line-through"
            fontSize={'$4'}
          >
            1500 EGP
          </Paragraph>
          <Paragraph fontWeight={'bold'} color={'$red7Dark'} fontSize={'$5'}>
            40% OFF
          </Paragraph>
        </XStack>
      </YStack>
      
      */}
    </Card>
  );
}
