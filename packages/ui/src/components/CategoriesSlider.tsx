import { Paragraph, XStack, Card, H2, Image } from '@my/ui';
import React from 'react';
import { DraggableScrollView } from './draggableScroll';
import { trpc } from 'app/utils/trpc';
import { H4 } from 'tamagui';
import { useTranslation } from 'app/utils/i18n';

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

export function CategoriesSlider() {
  console.log('re-render');
  const { t, i18n } = useTranslation();
  const { isLoading, isLoadingError, data } =
    trpc.venue.getVenueCategories.useQuery(5, {
      refetchOnWindowFocus: false,
    });
  if (isLoadingError || !data) return <H4>ERROR LOAD</H4>;
  console.log(data);
  return (
    <DraggableScrollView showsHorizontalScrollIndicator={false}>
      {data.map((category) => {
        return (
          <DemoCard
            key={category.id}
            title={i18n.language == 'en' ? category.name : category.ar_name}
            desc=""
            buttonName=""
            image={category.imageURL}
          />
        );
      })}
    </DraggableScrollView>
  );
}
