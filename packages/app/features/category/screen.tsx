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
import { LoadingSpinner } from '@my/ui/src/components/LoadingSpinner';
import { VenueCard } from '@my/ui/src/components/VenueCard';
import { trpc } from 'app/utils/trpc';
import React from 'react';
import { createParam } from 'solito';
type categoriesQuery = {
  id: string;
  name: string;
};
const { useParam } = createParam<categoriesQuery>();

export function CategoryScreen() {
  const [name] = useParam('name');
  const [id] = useParam('id');

  const { isLoading, isLoadingError, data } =
    trpc.venue.getVenuesByCategory.useQuery(parseInt(id!), {
      refetchOnWindowFocus: false,
    });
  if (isLoading) return <LoadingSpinner />;
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
          <H2>{name}</H2>
          <Separator
            alignSelf="stretch"
            outlineColor={'white'}
            marginVertical={10}
          />
          <XStack w={'100%'} flexWrap="wrap" gap="$4">
            {data?.map((venue) => {
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
          </XStack>
        </ScrollView>
      </YStack>
    </AppShell>
  );
}
