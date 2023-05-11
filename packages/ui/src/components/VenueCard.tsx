import { Button, Card, H4, XStack, Image, Paragraph, YStack } from '@my/ui';
import { StarFill } from '@tamagui-extras/core';
import React from 'react';
import { Hash, MapPin } from '@tamagui/lucide-icons';
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
      <YStack flex={1} paddingHorizontal={'$1.5'}>
        <Image
          width={350}
          height={175}
          alignSelf="center"
          resizeMode="cover"
          source={{
            uri: 'https://images.squarespace-cdn.com/content/v1/5ada74b8e17ba3c5359136a4/1599702204937-WOF9RU65Q89UHML5TITE/building-a-wedding-venue.jpg',
          }}
          marginBottom={'$2'}
        />
        <XStack justifyContent="space-between" space>
          <H4>Weird Venue</H4>
          <XStack>
            <Paragraph>
              <StarFill />
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
    </Card>
  );
}
