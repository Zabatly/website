import {
  H2,
  H4,
  Paragraph,
  ScrollView,
  Separator,
  XStack,
  YStack,
} from '@my/ui';
import { AppBar } from '@my/ui/src/components/AppBar';
import { AppShell } from '@my/ui/src/components/AppShell';
import { VenueCard } from '@my/ui/src/components/VenueCard';
import { trpc } from 'app/utils/trpc';
import React from 'react';
import { createParam } from 'solito';

type searchQuery = {
  type: string;
  value: string;
};
const { useParam } = createParam<searchQuery>();

export function SearchScreen() {
  const [value] = useParam('value');
  const [type] = useParam('type');

  const { isLoading: locationLoading, data: cityData } =
    trpc.venue.getVenuesByCity.useQuery(value!, {
      enabled: type == 'location',
    });
  const { isLoading: nameLoading, data: nameData } =
    trpc.venue.getVenue.useQuery(value!, {
      enabled: type == 'name',
    });

  const { isLoading: categoryLoading, data: categoryData } =
    trpc.venue.getVenuesByCategoryName.useQuery(value!, {
      enabled: type == 'category',
    });
  return (
    <AppShell>
      <AppBar />
      <YStack
        padding="$2"
        f={1}
        backgroundColor={'$backgroundStrong'}
        alignItems="center"
      >
        <ScrollView $gtSm={{ w: '60%', padding: '$4' }} w="100%">
          <H2>Search Results For {value?.toUpperCase()}</H2>
          <Separator
            alignSelf="stretch"
            outlineColor={'white'}
            marginVertical={10}
          />
          <XStack w={'100%'} flexWrap="wrap" gap="$4">
            {cityData?.map((venue) => {
              return (
                <VenueCard
                  key={venue.id}
                  name={venue?.name!}
                  desc={venue?.description!}
                  price={venue?.price!}
                  enName={venue?.name!}
                  location={venue?.cities.name!}
                  imageURL={venue.categories.imageURL!}
                  category={venue?.categories.name!}
                  rating={venue?.rating!}
                  capacity={venue?.capacity!}
                  language={'en'}
                />
              );
            })}
            {categoryData?.map((venue) => {
              return (
                <VenueCard
                  key={venue.id}
                  name={venue?.name!}
                  desc={venue?.description!}
                  price={venue?.price!}
                  enName={venue?.name!}
                  location={venue?.cities.name!}
                  imageURL={venue.categories.imageURL!}
                  category={venue?.categories.name!}
                  rating={venue?.rating!}
                  capacity={venue?.capacity!}
                  language={'en'}
                />
              );
            })}
            {nameData && (
              <VenueCard
                key={nameData.id}
                name={nameData?.name!}
                desc={nameData?.description!}
                price={nameData?.price!}
                enName={nameData?.name!}
                location={nameData?.cities.name!}
                imageURL={nameData.categories.imageURL!}
                category={nameData?.categories.name!}
                rating={nameData?.rating!}
                capacity={nameData?.capacity!}
                language={'en'}
              />
            )}
          </XStack>
        </ScrollView>
      </YStack>
    </AppShell>
  );
}
