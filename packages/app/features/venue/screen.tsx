import 'intl';
import 'intl/locale-data/jsonp/en';
import {
  Paragraph,
  YStack,
  XStack,
  H2,
  H4,
  H5,
  Stack,
  Card,
  ScrollView,
  useMedia,
  Button,
  Separator,
  Tabs,
  TabsContentProps,
  SizableText,
  isWeb,
  YGroup,
  ListItem,
} from '@my/ui';
import { AppBar } from '@my/ui/src/components/AppBar';
import { AppShell } from '@my/ui/src/components/AppShell';
import { VenueSlider } from '@my/ui/src/components/VenueSlider';
import {
  MapPin,
  Users,
  Expand,
  Star,
  CheckCircle,
  Check,
  Dot,
} from '@tamagui/lucide-icons';
import { LmDatepicker } from '@tamagui-extras/date';
import React from 'react';
import { createParam } from 'solito';
import { PriceTag } from '@my/ui/src/components/PriceTag';

const { useParam } = createParam<{ id: string }>();
// TODO: Rest of venue details.., dynamic pricing based on dates choosen, reserve to order page, link pages to prisma database..
const TabsContent = (props: TabsContentProps) => {
  return (
    <Tabs.Content
      backgroundColor="$background"
      key="tab3"
      padding="$2"
      flex={1}
      borderRadius="$2"
      borderTopLeftRadius={0}
      borderTopRightRadius={0}
      {...props}
    >
      {props.children}
    </Tabs.Content>
  );
};

const HorizontalTabs = ({ venueData, venueFeatures }: any) => {
  return (
    <Tabs
      defaultValue="tab1"
      orientation="horizontal"
      flexDirection="column"
      height={200}
      borderRadius="$4"
    >
      <Tabs.List
        separator={<Separator vertical />}
        disablePassBorderRadius="bottom"
        aria-label="Venue Reservation Information"
      >
        <Tabs.Tab flex={1} value="tab1">
          <SizableText fontFamily="$body">Features</SizableText>
        </Tabs.Tab>
        <Tabs.Tab flex={1} value="tab2">
          <SizableText fontFamily="$body">Host Rules</SizableText>
        </Tabs.Tab>
        <Tabs.Tab flex={1} value="tab3">
          <SizableText fontFamily="$body">Cancellation Policy</SizableText>
        </Tabs.Tab>
      </Tabs.List>
      <Separator />
      <TabsContent value="tab1">
        <Paragraph fontWeight={'600'}>
          Amenities available on the venue.
        </Paragraph>
        <XStack
          flexWrap={'wrap'}
          justifyContent="space-between"
          paddingTop={10}
        >
          {/*venueFeatures.forEach((feature) => {
            <Stack w={'50%'} paddingBottom={'$3'}>
              <XStack space="$2">
                <CheckCircle />
                <Paragraph>{feature}</Paragraph>
              </XStack>
            </Stack>;
          })}*/}
        </XStack>
      </TabsContent>

      <TabsContent value="tab2">
        <YStack>
          <YGroup height={100}>
            <ScrollView showsVerticalScrollIndicator>
              {venueData.rules}
              <YGroup.Item>
                <XStack alignItems="center" space="$1">
                  <Dot /> <Paragraph>Rule#1</Paragraph>
                </XStack>
              </YGroup.Item>
              <YGroup.Item>
                <XStack alignItems="center" space="$1">
                  <Dot /> <Paragraph>Rule#1</Paragraph>
                </XStack>
              </YGroup.Item>
            </ScrollView>
          </YGroup>
        </YStack>
      </TabsContent>

      <TabsContent value="tab3">
        <Paragraph fontWeight={'500'}>{venueData.policy}</Paragraph>
      </TabsContent>
    </Tabs>
  );
};

import { trpc } from 'app/utils/trpc';

export function VenueScreen() {
  const media = useMedia();

  const [id] = useParam('id');
  if (!id) return null;
  console.log(id);
  {
    /*
    TODO: DO this for real... & translation...
 const firstQuery = useQuery(['getFirstData']);

  const secondQuery = useQuery(['getSecondData', firstQuery.data?.id], {
    enabled: !!firstQuery.data?.id,
  });
  */
  }
  const { isLoading, isLoadingError, data } =
    trpc.venue.getVenue.useQuery('Nile Palace');
  if (isLoading) return <H4>Loading Venue Data...</H4>;
  if (isLoadingError) return <H4>Loading Error....</H4>;
  if (!data) return <H4>Loading Error</H4>;
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
          <VenueSlider />
          <XStack
            $gtSm={{ flexDirection: 'row', padding: '$6' }}
            flexDirection="column"
            w={'100%'}
            backgroundColor={'$backgroundSoft'}
            space="$2"
          >
            <YStack $gtSm={{ w: '50%' }} paddingHorizontal={'$2'}>
              <H2>{data.name}</H2>
              <XStack
                justifyContent="flex-start"
                flexWrap={'wrap'}
                space="$3"
                paddingVertical={'$2'}
              >
                <XStack space={'$1'}>
                  <MapPin color={'#1363ff'} />
                  <Paragraph fontWeight={'500'}>{data.cityID}</Paragraph>
                </XStack>
                <XStack space={'$1'}>
                  <Users color={'#1363ff'} />
                  <Paragraph fontWeight={'500'}>
                    {data.capacity} People
                  </Paragraph>
                </XStack>
                <XStack space={'$1'}>
                  <Expand color={'#1363ff'} />
                  <Paragraph fontWeight={'500'}>
                    {data.space} {'m\u00B2'}
                  </Paragraph>
                </XStack>
                <XStack space={'$1'}>
                  <Star color="#FFA500" fill={'#FFA500'} />
                  <Paragraph fontWeight={'500'}>{data.rating}</Paragraph>
                </XStack>
              </XStack>
              <Separator
                alignSelf="stretch"
                outlineColor={'white'}
                marginVertical={5}
                marginBottom={10}
              />
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
                      <PriceTag price={data.price!} discount={0.4} />
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
                <Paragraph fontWeight={'600'}>{data.description}</Paragraph>
                <Separator
                  alignSelf="stretch"
                  outlineColor={'white'}
                  marginVertical={10}
                />
                <HorizontalTabs venueData={data} />
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
                    <PriceTag price={data.price!} discount={0.4} />
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
        </YStack>
      </YStack>
    </AppShell>
  );
}
