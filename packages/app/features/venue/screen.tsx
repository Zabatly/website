import 'intl';
import 'intl/locale-data/jsonp/en';
import {
  Paragraph,
  YStack,
  XStack,
  H2,
  H4,
  Stack,
  Card,
  ScrollView,
  useMedia,
  Button,
} from '@my/ui';
import { AppBar } from '@my/ui/src/components/AppBar';
import { AppShell } from '@my/ui/src/components/AppShell';
import { VenueSlider } from '@my/ui/src/components/VenueSlider';
import { MapPin, Users, Expand, Star } from '@tamagui/lucide-icons';
import { LmDatepicker } from '@tamagui-extras/date';
import React from 'react';
import { createParam } from 'solito';
import { PriceTag } from '@my/ui/src/components/PriceTag';

const { useParam } = createParam<{ id: string }>();
// TODO: Rest of venue details.., dynamic pricing based on dates choosen, reserve to order page, link pages to prisma database..
export function VenueScreen() {
  const [id] = useParam('id');
  const media = useMedia();
  return (
    <AppShell>
      <AppBar />
      <YStack
        f={1}
        $gtSm={{
          paddingVertical: 10,
          paddingHorizontal: 0,
        }}
        paddingVertical={0}
        paddingHorizontal={0}
        alignItems="center"
      >
        <YStack
          $gtSm={{
            w: '60%',
          }}
          w={'100%'}
          space={'$4'}
          overflow="hidden"
          paddingHorizontal={0}
        >
          <ScrollView>
            <VenueSlider />
            <XStack
              $gtSm={{ flexDirection: 'row', padding: '$6' }}
              flexDirection="column"
              w={'100%'}
              backgroundColor={'$backgroundSoft'}
              space="$2"
            >
              <YStack $gtSm={{ w: '50%' }} paddingHorizontal={'$2'}>
                <H2>Venue Placeholder</H2>
                <XStack
                  justifyContent="flex-start"
                  flexWrap={'wrap'}
                  space="$3"
                  paddingVertical={'$2'}
                >
                  <XStack space={'$1'}>
                    <MapPin color={'#1363ff'} />
                    <Paragraph fontWeight={'500'}>Madinet Nasr</Paragraph>
                  </XStack>
                  <XStack space={'$1'}>
                    <Users color={'#1363ff'} />
                    <Paragraph fontWeight={'500'}>500 People</Paragraph>
                  </XStack>
                  <XStack space={'$1'}>
                    <Expand color={'#1363ff'} />
                    <Paragraph fontWeight={'500'}>500 {'m\u00B2'}</Paragraph>
                  </XStack>
                  <XStack space={'$1'}>
                    <Star color="#FFA500" fill={'#FFA500'} />
                    <Paragraph fontWeight={'500'}>4.8</Paragraph>
                  </XStack>
                </XStack>
                {(media.xs || media.sm) && (
                  <YStack $gtSm={{ w: '50%', alignItems: 'center' }} w={'100%'}>
                    <Card
                      bordered
                      elevate
                      paddingHorizontal={'$4'}
                      $gtXs={{ w: '80%' }}
                      w={'100%'}
                    >
                      <Card.Header>
                        <H2>Price</H2>
                        <PriceTag price={1000} discount={0.4} />
                      </Card.Header>
                      <Stack paddingVertical={'$2'}>
                        <Paragraph
                          fontWeight={'bold'}
                          $gtSm={{ paddingHorizontal: '$8' }}
                        >
                          Checkin - Checkout
                        </Paragraph>
                        <LmDatepicker
                          isRangePicker
                          inputProps={{
                            alignSelf: 'center',
                          }}
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
                      <Button
                        marginVertical={'$2'}
                        theme="blue"
                        fontWeight={'bold'}
                      >
                        Reserve Now
                      </Button>
                    </Card>
                  </YStack>
                )}
                <YStack
                  justifyContent="flex-start"
                  w={'100%'}
                  paddingVertical={'$2'}
                >
                  <H4 fontWeight={'400'} color={'#1363ff'}>
                    Description
                  </H4>
                  <Paragraph fontWeight={'600'}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Paragraph>
                </YStack>
              </YStack>
              {!media.xs && !media.sm && (
                <YStack $gtSm={{ w: '50%', alignItems: 'center' }} w={'100%'}>
                  <Card
                    bordered
                    elevate
                    paddingHorizontal={'$4'}
                    $gtSm={{ w: '80%' }}
                    w={'100%'}
                  >
                    <Card.Header>
                      <H2>Price</H2>
                      <PriceTag price={1000} discount={0.4} />
                    </Card.Header>
                    <Stack paddingVertical={'$2'}>
                      <Paragraph
                        fontWeight={'bold'}
                        $gtSm={{ paddingHorizontal: '$8' }}
                      >
                        Checkin - Checkout
                      </Paragraph>
                      <LmDatepicker
                        isRangePicker
                        inputProps={{
                          alignSelf: 'center',
                        }}
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
                    <Button
                      marginVertical={'$2'}
                      theme="blue"
                      fontWeight={'bold'}
                    >
                      Reserve Now
                    </Button>
                  </Card>
                </YStack>
              )}
            </XStack>
          </ScrollView>
        </YStack>
      </YStack>
    </AppShell>
  );
}
