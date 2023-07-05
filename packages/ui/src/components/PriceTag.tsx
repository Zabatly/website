import { Paragraph, XStack } from '@my/ui';
import React from 'react';

interface PriceTag {
  price: number;
  discount?: number;
}

export function PriceTag({ price, discount }: PriceTag) {
  return (
    <XStack>
      <Paragraph
        color={discount ? '#31D843' : ''}
        fontWeight={'bold'}
        fontSize={'$5'}
      >
        {price} EGP / DAY
      </Paragraph>
      {discount && (
        <>
          <Paragraph
            color={'grey'}
            textDecorationLine="line-through"
            fontSize={'$4'}
            marginHorizontal="$2"
          >
            {(price * discount).toFixed(0)} EGP
          </Paragraph>
          <Paragraph fontWeight={'bold'} color={'#DD1C1A'} fontSize={'$5'}>
            {discount * 100}% OFF
          </Paragraph>
        </>
      )}
    </XStack>
  );
}
