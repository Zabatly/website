import { H1, H4, H2, Separator, XStack, YStack } from '@my/ui';
import { AppBar } from '@my/ui/src/components/AppBar';
import { AppShell } from '@my/ui/src/components/AppShell';
import { LmAvatar } from '@my/ui/src/components/LmAvatar';
import { VenueCard } from '@my/ui/src/components/VenueCard';
import { DraggableScrollView } from '@my/ui/src/components/draggableScroll';
import { ChevronLeft } from '@tamagui/lucide-icons';
import { useAuth, useUser } from 'app/utils/clerk';
import { trpc } from 'app/utils/trpc';
import React from 'react';
import { createParam } from 'solito';
import { useLink } from 'solito/link';

const { useParam } = createParam<{ id: string }>();

interface reservationsSliderObject {
  userID: number;
}
const ReservationsSlider = (props: reservationsSliderObject) => {
  const { isLoading, data } = trpc.reserve.getReservations.useQuery(
    props.userID
  );
  if (isLoading) return <H4>Loading Recently Reserved venues...</H4>;
  return (
    <>
      {data && (
        <>
          <H2>Recently Reserved</H2>
          <Separator
            alignSelf="stretch"
            outlineColor={'white'}
            marginVertical={10}
          />
        </>
      )}
      <DraggableScrollView>
        <XStack gap="$2">
          {data?.map((reservation) => {
            return (
              <VenueCard
                key={reservation.id}
                name={reservation.venues?.name!}
                desc={reservation.venues?.description!}
                price={reservation.venues?.price!}
                enName={reservation.venues?.name!}
                location={reservation.venues?.cities.name!}
                imageURL={reservation.venues?.categories.imageURL!}
                category={reservation.venues?.categories.name!}
                rating={reservation.venues?.rating!}
                capacity={reservation.venues?.capacity!}
                language={'en'}
              />
            );
          })}
        </XStack>
      </DraggableScrollView>
    </>
  );
};

export function UserDetailScreen() {
  const [id] = useParam('id');
  const { user } = useUser();
  const { isLoading, data } = trpc.user.current.useQuery();
  const linkProps = useLink({ href: '/' });
  if (isLoading) return <H4>Loading User Data...</H4>;
  return (
    <AppShell>
      <AppBar />
      <YStack f={1} ai="center" padding="$6" space="$6">
        <YStack $gtSm={{ w: '60%' }} w={'100%'} space>
          <XStack gap="$4" ai={'center'}>
            <LmAvatar size={'$10'} src={user?.profileImageUrl} />
            <H2>
              {user?.username?.toUpperCase() || user?.firstName?.toUpperCase()}
            </H2>
          </XStack>
          <ReservationsSlider userID={data?.id!} />
        </YStack>
      </YStack>
    </AppShell>
  );
}
