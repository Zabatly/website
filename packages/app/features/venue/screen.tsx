import {
  Paragraph,
  YStack,
  XStack,
  H2,
  H4,
  Stack,
  Card,
  ScrollView,
} from '@my/ui';
import { AppBar } from '@my/ui/src/components/AppBar';
import { AppShell } from '@my/ui/src/components/AppShell';
import { VenueSlider } from '@my/ui/src/components/VenueSlider';
import { MapPin, Users, Expand } from '@tamagui/lucide-icons';
import { LmDatepicker } from '@my/ui/src/components/datePicker/LmDatePicker';
import React from 'react';
import { createParam } from 'solito';

const { useParam } = createParam<{ id: string }>();

export function VenueScreen() {
  const [id] = useParam('id');

  return (
    <AppShell>
      <AppBar />
      <YStack f={1} paddingVertical={10} alignItems="center">
        <LmDatepicker
          isRangePicker
          popoverProps={{
            sheetProps: {
              dismissOnOverlayPress: true,
              hideHandle: false,
              snapPoints: [85, 50, 25],
              fullScreen: false,
            },
          }}
        />
        {/*
               <YStack
          $gtSm={{
            w: '60%',
          }}
          w={'100%'}
          paddingHorizontal={'$4'}
          space={'$4'}
          overflow="hidden"
          alignItems="center"
        >
          <ScrollView>
            <VenueSlider />
            <XStack
              $gtSm={{ flexDirection: 'row' }}
              flexDirection="column"
              w={'100%'}
              backgroundColor={'$backgroundSoft'}
              padding={'$6'}
              space
            >
              <YStack $gtSm={{ w: '50%' }} w={'100%'}>
                <H2>Venue Placeholder</H2>
                <XStack space>
                  <XStack space={'$1'}>
                    <MapPin color={'$blue8'} />
                    <Paragraph fontWeight={'500'}>Madinet Nasr</Paragraph>
                  </XStack>
                  <XStack space={'$1'}>
                    <Users color={'$blue8'} />
                    <Paragraph fontWeight={'500'}>500 People</Paragraph>
                  </XStack>
                  <XStack space={'$1'}>
                    <Expand color={'$blue8'} />
                    <Paragraph fontWeight={'500'}>500 {'m\u00B2'}</Paragraph>
                  </XStack>
                </XStack>
              </YStack>
              <YStack $gtSm={{ w: '50%' }} w={'100%'}>
                <Card bordered elevate paddingHorizontal={'$4'} w={'100%'}>
                  <Card.Header>
                    <H2>Price</H2>
                    <XStack space>
                      <Paragraph
                        color={'#31D843'}
                        fontWeight={'bold'}
                        fontSize={'$5'}
                      >
                        1000 EGP / DAY
                      </Paragraph>

                      <Paragraph
                        color={'grey'}
                        textDecorationLine="line-through"
                        fontSize={'$4'}
                      >
                        1500 EGP
                      </Paragraph>
                      <Paragraph
                        fontWeight={'bold'}
                        color={'#DD1C1A'}
                        fontSize={'$5'}
                      >
                        40% OFF
                      </Paragraph>
                    </XStack>
                  </Card.Header>
                  <Stack alignItems="center" paddingVertical={'$2'}>
                    <Paragraph alignSelf="center">Checkin - Checkout</Paragraph>

                    <LmDatepicker
                      isRangePicker
                      popoverProps={{
                        sheetProps: {
                          dismissOnOverlayPress: true,
                          hideHandle: false,
                          snapPoints: [85, 50, 25],
                          fullScreen: false,
                        },
                      }}
                    />
                  </Stack>
                </Card>
              </YStack>
            </XStack>
          </ScrollView>
        </YStack>
          */}
      </YStack>
    </AppShell>
  );
}
