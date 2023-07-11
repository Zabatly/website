import { Button, Card, H4, XStack, Image, Paragraph, YStack } from '@my/ui';
import { StarFill } from '@tamagui-extras/core';
import React from 'react';
import {
  MapPin,
  Hash,
  Flame,
  TrendingUp,
  Heart,
  Sparkles,
  User,
} from '@tamagui/lucide-icons';
import { PriceTag } from './PriceTag';
import { useLink } from 'solito/link';
import { useTranslation } from 'app/utils/i18n';
const disabledBtnStyle = {
  outlineColor: 'none',
  outlineWidth: '$0',
  bw: '$0',
  borderColor: 'transparent',
};

interface venueCardDetails {
  enName: string;
  name: string;
  desc: string;
  rating: number;
  price: number;
  category: string;
  capacity: number;
  imageURL: string;
  location: string;
  language: 'ar' | 'en';
}

export function VenueCard(props: venueCardDetails) {
  const { t } = useTranslation();
  const venueLink = useLink({
    href: '/venue/' + props.enName,
  });
  const tagNames = {
    hot: {
      en: 'Hot',
      ar: 'ساخن',
    },
    new: {
      en: 'New',
      ar: 'جديد',
    },
    trending: {
      en: 'Trending',
      ar: 'شائع',
    },
  };

  const allTags = {
    '0': <></>,
    '1': (
      <Button theme={'blue'} size={'$2'} icon={<Flame color={'orange'} />}>
        {tagNames['hot'][props.language]}
      </Button>
    ),
    '2': (
      <Button theme={'blue'} size={'$2'} icon={<TrendingUp color={'green'} />}>
        {tagNames['trending'][props.language]}
      </Button>
    ),
    '3': (
      <Button theme={'blue'} size={'$2'} icon={<Sparkles color={'gold'} />}>
        {tagNames['new'][props.language]}
      </Button>
    ),
    '4': (
      <>
        <Button theme={'blue'} size={'$2'} icon={<Flame color={'orange'} />}>
          {tagNames['hot'][props.language]}
        </Button>
        <Button
          theme={'blue'}
          size={'$2'}
          icon={<TrendingUp color={'green'} />}
        >
          {tagNames['trending'][props.language]}
        </Button>
      </>
    ),
    '5': (
      <>
        <Button theme={'blue'} size={'$2'} icon={<Flame color={'orange'} />}>
          {tagNames['hot'][props.language]}
        </Button>
        <Button theme={'blue'} size={'$2'} icon={<Sparkles color={'gold'} />}>
          {tagNames['new'][props.language]}
        </Button>
      </>
    ),
    '6': (
      <>
        <Button
          theme={'blue'}
          size={'$2'}
          icon={<TrendingUp color={'green'} />}
        >
          {tagNames['trending'][props.language]}
        </Button>
        <Button theme={'blue'} size={'$2'} icon={<Sparkles color={'gold'} />}>
          {tagNames['new'][props.language]}
        </Button>
      </>
    ),
  };
  type tagIdx = '0' | '1' | '2' | '3' | '4' | '5' | '6';
  const tagIndex: string = Math.floor(Math.random() * 7).toString();
  return (
    //box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    <Card
      {...venueLink}
      w={300}
      h={350}
      size="$6"
      elevate
      bordered
      animation={'bouncy'}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
    >
      <Card.Background>
        <Image
          width={350}
          height={175}
          opacity={0.5}
          alignSelf="center"
          resizeMode="cover"
          source={{
            uri: props.imageURL,
          }}
          marginBottom={'$2'}
        />
      </Card.Background>
      <YStack f={1} padding={'$2'}>
        <XStack w={'100%'} h={70} justifyContent="space-between">
          <XStack gap="$2">{allTags[tagIndex as tagIdx]}</XStack>
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
        <XStack w={'100%'} h={100}>
          <YStack w={'50%'} justifyContent="flex-end">
            <H4>{props.name}</H4>
            <XStack space={'$1.5'}>
              <MapPin size={'$1'} />
              <Paragraph fontWeight={'500'}>{props.location}</Paragraph>
            </XStack>
          </YStack>
          <YStack justifyContent="flex-end" alignItems="flex-end">
            <PriceTag price={props.price} />
          </YStack>
        </XStack>
        <XStack marginVertical={'$1.5'} justifyContent="space-between">
          <XStack space="$1">
            <Button theme={'blue'} size={'$2'} icon={<User />}>
              {props.capacity + ' ' + t('venuePage.people')}
            </Button>
            <Button theme={'blue'} size={'$2'} icon={<Hash />}>
              {props.category}
            </Button>
          </XStack>
          <XStack>
            <Paragraph>
              <StarFill color={'#FFD700'} />
            </Paragraph>
            <Paragraph fontWeight={'bold'}>{props.rating}</Paragraph>
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
            {props.desc}
          </Paragraph>
        </YStack>
      </YStack>
    </Card>
  );
}
