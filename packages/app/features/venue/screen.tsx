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
  Separator,
  Tabs,
  TabsContentProps,
  YGroup,
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
  Dot,
} from '@tamagui/lucide-icons';
import { LmDatepicker, LmDateRangePickerRhf } from '@tamagui-extras/date';
import React, { useState } from 'react';
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
interface VenueInfoTabs {
  venueData: RouterOutputs['venue']['getVenue'];
}
const HorizontalTabs = ({ venueData }: VenueInfoTabs) => {
  const { t, i18n } = useTranslation();
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
          <Paragraph fontFamily="$body">{t('venuePage.features')}</Paragraph>
        </Tabs.Tab>
        <Tabs.Tab flex={1} value="tab2">
          <Paragraph fontFamily="$body">{t('venuePage.rules')}</Paragraph>
        </Tabs.Tab>
        <Tabs.Tab flex={1} value="tab3">
          <Paragraph fontFamily="$body">{t('venuePage.policy')}</Paragraph>
        </Tabs.Tab>
      </Tabs.List>
      <Separator />
      <TabsContent value="tab1" direction={i18n.dir(i18n.language)}>
        <Paragraph fontWeight={'600'}>{t('venuePage.features_desc')}</Paragraph>
        <XStack
          flexWrap={'wrap'}
          justifyContent="space-between"
          paddingTop={10}
        >
          {venueData?.features.map((feature) => {
            return (
              <Stack
                w={'50%'}
                paddingBottom={'$3'}
                direction={i18n.dir(i18n.language)}
              >
                <XStack space="$2">
                  <CheckCircle />
                  <Paragraph>
                    {
                      feature.featurename[
                        i18n.language == 'en' ? 'name' : 'ar_name'
                      ]
                    }
                  </Paragraph>
                </XStack>
              </Stack>
            );
          })}
        </XStack>
      </TabsContent>

      <TabsContent value="tab2" direction={i18n.dir(i18n.language)}>
        <YStack>
          <YGroup height={100}>
            <ScrollView showsVerticalScrollIndicator>
              {venueData?.[i18n.language == 'en' ? 'rules' : 'ar_rules']
                ?.split('. ')
                .map((rule) => {
                  return (
                    <YGroup.Item>
                      <XStack alignItems="center" space="$1">
                        <Dot /> <Paragraph>{rule}</Paragraph>
                      </XStack>
                    </YGroup.Item>
                  );
                })}
            </ScrollView>
          </YGroup>
        </YStack>
      </TabsContent>

      <TabsContent value="tab3" direction={i18n.dir(i18n.language)}>
        <Paragraph fontWeight={'500'}>
          {venueData?.[i18n.language == 'en' ? 'policy' : 'ar_policy']}
        </Paragraph>
      </TabsContent>
    </Tabs>
  );
};
interface similarVenuesObject {
  similarVenues: number[];
}

const SimilarVenuesSlider = ({ similarVenues }: similarVenuesObject) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const { isLoading, isLoadingError, data } =
    trpc.venue.getSimilarVenues.useQuery(similarVenues, {
      refetchOnWindowFocus: false,
    });
  if (isLoading) return <H4>Loading Similar Venues...</H4>;
  if (isLoadingError) return <></>;
  // console.log(data);
  return (
    <DraggableScrollView>
      <XStack gap="$2">
        {data?.map((similarVenue) => {
          return (
            <VenueCard
              key={similarVenue.id}
              enName={similarVenue.name!}
              name={
                currentLanguage == 'en'
                  ? similarVenue.name!
                  : similarVenue.ar_name!
              }
              desc={
                currentLanguage == 'en'
                  ? similarVenue.description!
                  : similarVenue.ar_description!
              }
              rating={similarVenue.rating!}
              price={similarVenue.price!}
              category={
                currentLanguage == 'en'
                  ? similarVenue.categories.name!
                  : similarVenue.categories.ar_name!
              }
              capacity={similarVenue.capacity!}
              imageURL={similarVenue.categories.imageURL}
              location={
                currentLanguage == 'en'
                  ? similarVenue.cities.name!
                  : similarVenue.cities.ar_name!
              }
              language={currentLanguage == 'en' ? 'en' : 'ar'}
            />
          );
        })}
      </XStack>
    </DraggableScrollView>
  );
};

import { trpc } from 'app/utils/trpc';
import { RouterOutputs } from 'app/utils/trpc.web';
import { VenueCard } from '@my/ui/src/components/VenueCard';
import { useAuth } from 'app/utils/clerk';
import { Link } from 'solito/link';
import { LmFormRhfProvider, LmSubmitButtonRhf } from '@tamagui-extras/form';
import { useRouter } from 'solito/router';
import { useTranslation } from 'app/utils/i18n';
import { useEffect } from 'react';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import { DraggableScrollView } from '@my/ui/src/components/draggableScroll';
export function VenueScreen() {
  const { t, i18n } = useTranslation();
  const langDirection = i18n.dir(i18n.language);
  const apiURL =
    Platform.OS == 'web'
      ? 'localhost'
      : Constants.manifest?.debuggerHost?.split(':')[0];
  const [similarVenues, setSimilarVenues] = useState<number[]>([]);
  const [reserving, setReserveStatus] = useState(false);
  const media = useMedia();
  const { push } = useRouter();
  const { isSignedIn } = useAuth();
  const [id] = useParam('id');
  const currentDate = new Date();
  if (!id || parseInt(id)) return push('/');

  const { isLoading, isLoadingError, data } = trpc.venue.getVenue.useQuery(id, {
    refetchOnWindowFocus: false,
  });

  const handleReservation = (data) => {
    setReserveStatus(true);
    if (data.startDate && data.endDate) {
      push({
        pathname: '/reserve',
        query: {
          startDate: new Date(data.startDate).toLocaleString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: '2-digit',
          }),
          endDate: new Date(data.endDate).toLocaleString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: '2-digit',
          }),
          venue: id,
        },
      });
    } else {
      setReserveStatus(false);
    }
  };

  useEffect(() => {
    fetch(`http://${apiURL}:5000/recommend`, {
      method: 'POST',
      body: JSON.stringify({ message: id }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data: number[]) => {
        console.log(data);
        setSimilarVenues(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
        <ScrollView showsVerticalScrollIndicator={false}>
          <YStack
            $gtSm={{
              w: '60%',
            }}
            w={'100%'}
            space={'$4'}
            overflow="hidden"
            paddingHorizontal={0}
            direction={langDirection}
          >
            <VenueSlider image={data.categories.imageURL} />
            <XStack
              $gtSm={{ flexDirection: 'row', padding: '$6' }}
              flexDirection="column"
              w={'100%'}
              backgroundColor={'$backgroundSoft'}
              space="$2"
            >
              <YStack $gtSm={{ w: '50%' }} paddingHorizontal={'$2'}>
                <H2>{data[i18n.language == 'en' ? 'name' : 'ar_name']}</H2>
                <XStack
                  justifyContent="flex-start"
                  flexWrap={'wrap'}
                  space="$3"
                  paddingVertical={'$2'}
                >
                  <XStack space={'$1'}>
                    <MapPin color={'#1363ff'} />
                    <Paragraph fontWeight={'500'}>
                      {data.cities[i18n.language == 'en' ? 'name' : 'ar_name']}
                    </Paragraph>
                  </XStack>
                  <XStack space={'$1'}>
                    <Users color={'#1363ff'} />
                    <Paragraph fontWeight={'500'}>
                      {data.capacity} {t('venuePage.people')}
                    </Paragraph>
                  </XStack>
                  <XStack space={'$1'}>
                    <Expand color={'#1363ff'} />
                    <Paragraph fontWeight={'500'}>
                      {data.space} {t('venuePage.space')} {/*'m\u00B2'*/}
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
                        <H2>{t('venuePage.price')}</H2>
                        <PriceTag price={data.price!} discount={0.4} />
                      </Card.Header>
                      {isSignedIn ? (
                        <LmFormRhfProvider
                          shouldUseNativeValidation={true}
                          mode="onSubmit"
                          defaultValues={{
                            startDate: currentDate,
                            endDate: new Date(
                              currentDate.getTime() + 2 * 24 * 60 * 60 * 1000
                            ),
                          }}
                        >
                          <Stack paddingVertical={'$2'}>
                            <Paragraph
                              fontWeight={'bold'}
                              $gtSm={{ paddingHorizontal: '$8' }}
                            >
                              {t('venuePage.checkin')} -{' '}
                              {t('venuePage.checkout')}
                            </Paragraph>
                            <LmDateRangePickerRhf
                              start={'startDate'}
                              end={'endDate'}
                              isRangePicker
                              required
                              popoverProps={{
                                sheetProps: {
                                  dismissOnOverlayPress: true,
                                  hideHandle: false,
                                  snapPoints: [85, 50, 25],
                                  fullScreen: false,
                                },
                              }}
                              onChange={(data) => {
                                console.log('Changed...');
                                console.log(data.startDate, data.endDate);
                              }}
                              rules={{
                                required: t('venuePage.date_select') as string,
                              }}
                            />
                          </Stack>
                          <LmSubmitButtonRhf
                            loading={reserving}
                            onSubmit={handleReservation}
                            marginVertical={'$2'}
                            theme="blue"
                            fontWeight={'bold'}
                          >
                            {t('venuePage.reserve')}
                          </LmSubmitButtonRhf>
                        </LmFormRhfProvider>
                      ) : (
                        <XStack marginVertical={'$2'} space="$1">
                          <Paragraph>{t('venuePage.please')}</Paragraph>
                          <Link href={'/signin'}>
                            <Paragraph color={'$blue9Light'} fontWeight={'500'}>
                              {t('venuePage.signin')}
                            </Paragraph>
                          </Link>
                          <Paragraph>{t('venuePage.reserveStart')}</Paragraph>
                        </XStack>
                      )}
                    </Card>
                  </YStack>
                )}
                <YStack
                  justifyContent="flex-start"
                  w={'100%'}
                  paddingVertical={'$2'}
                  direction={langDirection}
                >
                  <H4 fontWeight={'400'} color={'#1363ff'}>
                    {t('venuePage.description')}
                  </H4>
                  <Paragraph fontWeight={'600'}>
                    {
                      data[
                        i18n.language == 'en' ? 'description' : 'ar_description'
                      ]
                    }
                  </Paragraph>
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
                      <H2>{t('venuePage.price')}</H2>
                      <PriceTag price={data.price!} discount={0.4} />
                    </Card.Header>

                    {isSignedIn ? (
                      <LmFormRhfProvider
                        shouldUseNativeValidation={true}
                        mode="onSubmit"
                        defaultValues={{
                          startDate: currentDate,
                          endDate: new Date(
                            currentDate.getTime() + 2 * 24 * 60 * 60 * 1000
                          ),
                        }}
                      >
                        <Stack paddingVertical={'$2'}>
                          <Paragraph
                            fontWeight={'bold'}
                            $gtSm={{ paddingHorizontal: '$8' }}
                          >
                            {t('venuePage.checkin')} - {t('venuePage.checkout')}
                          </Paragraph>
                          <LmDateRangePickerRhf
                            start={'startDate'}
                            end={'endDate'}
                            isRangePicker
                            required
                            popoverProps={{
                              sheetProps: {
                                dismissOnOverlayPress: true,
                                hideHandle: false,
                                snapPoints: [85, 50, 25],
                                fullScreen: false,
                              },
                            }}
                            onChange={(data) => {
                              console.log('Changed...');
                              console.log(data.startDate, data.endDate);
                            }}
                            rules={{
                              required: t('venuePage.date_select') as string,
                            }}
                          />
                        </Stack>
                        <LmSubmitButtonRhf
                          loading={reserving}
                          onSubmit={handleReservation}
                          marginVertical={'$2'}
                          theme="blue"
                          fontWeight={'bold'}
                        >
                          {t('venuePage.reserve')}
                        </LmSubmitButtonRhf>
                      </LmFormRhfProvider>
                    ) : (
                      <XStack marginVertical={'$2'} space="$1">
                        <Paragraph>{t('venuePage.please')}</Paragraph>
                        <Link href={'/signin'}>
                          <Paragraph color={'$blue9Light'} fontWeight={'500'}>
                            {t('venuePage.signin')}
                          </Paragraph>
                        </Link>
                        <Paragraph>{t('venuePage.reserveStart')}</Paragraph>
                      </XStack>
                    )}
                  </Card>
                </YStack>
              )}
            </XStack>
            <YStack paddingHorizontal="$6">
              <H2>{t('similar_venues')}</H2>
              <Separator
                alignSelf="stretch"
                outlineColor={'white'}
                marginVertical={5}
                marginBottom={10}
              />
              <SimilarVenuesSlider similarVenues={similarVenues} />
            </YStack>
          </YStack>
        </ScrollView>
      </YStack>
    </AppShell>
  );
}
