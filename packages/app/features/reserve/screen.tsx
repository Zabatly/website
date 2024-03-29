import {
  AnimationKeys,
  Card,
  H4,
  H5,
  Image,
  Paragraph,
  XStack,
  YStack,
  Separator,
  SizableText,
  ScrollView,
} from '@my/ui';
import { AppBar } from '@my/ui/src/components/AppBar';
import { AppShell } from '@my/ui/src/components/AppShell';
import { CalendarHeart, Coins, Users } from '@tamagui/lucide-icons';
import { trpc } from 'app/utils/trpc';
import React, { useState } from 'react';
import { createParam } from 'solito';
import { ToastComp } from '@my/ui/src/components/ToastComp';
import { useToastController } from '@tamagui/toast';
import { useRouter } from 'solito/router';
import {
  LmFormRhfProvider,
  LmSubmitButtonRhf,
  LmInputRhf,
} from '@tamagui-extras/form';
import { LoadingSpinner } from '@my/ui/src/components/LoadingSpinner';
type reserveQuery = {
  startDate: string;
  endDate: string;
  venue: string;
};
const { useParam } = createParam<reserveQuery>();
export function ReserveScreen() {
  const { push } = useRouter();
  const toast = useToastController();
  const [reserving, setReserveState] = useState(false);
  const [reserveStartDate] = useParam('startDate');
  const [reserveEndDate] = useParam('endDate');
  const [venueName] = useParam('venue');
  const totalDays =
    (new Date(reserveEndDate!).getTime() -
      new Date(reserveStartDate!).getTime()) /
    (1000 * 3600 * 24);
  const { isLoading: userDataLoading, data: userData } =
    trpc.user.current.useQuery();

  const createReservation = trpc.reserve.create.useMutation();
  const updateUserDetails = trpc.user.updateDetails.useMutation();
  const { isLoading, isLoadingError, data } = trpc.venue.getVenue.useQuery(
    venueName!,
    {
      refetchOnWindowFocus: false,
    }
  );

  const handleReservation = async (reserveData) => {
    setReserveState(true);
    if (!userData?.firstName || !userData?.lastName) {
      await updateUserDetails.mutateAsync({
        userID: userData?.id!,
        firstName: reserveData.firstName,
        lastName: reserveData.lastName,
        phoneNumber: reserveData.phoneNumber,
        address: reserveData.address,
      });
    }
    await createReservation.mutateAsync({
      userID: userData?.id!,
      venueID: data?.id!,
      guestsNumber: data?.capacity!,
      cost: data?.price! * totalDays,
      endTime: reserveEndDate!,
      startTime: reserveStartDate!,
    });
    toast.show('Successfuly Reserved!', {
      toastType: 'success',
      duration: 3000,
      displayTime: new Date(),
    });
    setTimeout(() => {
      push('/');
    }, 3000);
  };

  if (isLoading || userDataLoading) return <LoadingSpinner />;
  if (isLoadingError) return <H4>Error Has Occurred...</H4>;
  console.log(userData, 'USER DATA');
  return (
    <AppShell>
      <AppBar />
      <ToastComp />
      <YStack
        padding="$2"
        f={1}
        backgroundColor={'$backgroundStrong'}
        alignItems="center"
      >
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          w={'100%'}
          $gtSm={{
            w: '50%',
          }}
        >
          <XStack
            $gtSm={{
              w: '90%',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}
            flexDirection="column-reverse"
            w={'100%'}
            padding={'$4'}
            gap="$2"
            justifyContent="space-between"
          >
            <YStack $gtSm={{ w: '50%' }} w={'100%'}>
              <H4>Reservation Details</H4>
              <Separator
                alignSelf="stretch"
                outlineColor={'white'}
                marginVertical={10}
              />
              <LmFormRhfProvider
                shouldUseNativeValidation={false}
                defaultValues={{
                  firstName: userData?.firstName,
                  lastName: userData?.lastName,
                  address: userData?.address,
                  phoneNumber: userData?.phoneNumber,
                }}
                mode="onTouched"
              >
                <YStack w={'80%'}>
                  <LmInputRhf
                    required
                    theme={'gray'}
                    name="firstName"
                    label={'First Name'}
                    value={userData?.firstName!}
                    placeholder={'Enter First Name'}
                    textContentType="name"
                    rules={{
                      required: 'First Name is required',
                      minLength: {
                        value: 3,
                        message: 'Minimum 3 Characters for First Name',
                      },
                      maxLength: {
                        value: 26,
                        message: 'Maximum of 26 characters for First Name',
                      },
                    }}
                  />

                  <LmInputRhf
                    required
                    theme={'gray'}
                    name="lastName"
                    label={'Last Name'}
                    value={userData?.lastName!}
                    placeholder={'Enter Last Name'}
                    textContentType="familyName"
                    rules={{
                      required: 'Last Name is required',
                      minLength: {
                        value: 3,
                        message: 'Minimum 3 Characters for Last Name',
                      },
                      maxLength: {
                        value: 26,
                        message: 'Maximum of 26 characters for Last Name',
                      },
                    }}
                  />

                  <LmInputRhf
                    required
                    theme={'gray'}
                    name="address"
                    label={'Address'}
                    value={userData?.address!}
                    placeholder={'Enter Address'}
                    textContentType="streetAddressLine1"
                    rules={{
                      required: 'Address is required',
                      minLength: {
                        value: 20,
                        message: 'Minimum 20 Characters for Address',
                      },
                      maxLength: {
                        value: 50,
                        message: 'Maximum of 50 characters for Address',
                      },
                    }}
                  />

                  <LmInputRhf
                    required
                    theme={'gray'}
                    name="phoneNumber"
                    value={userData?.phoneNumber!}
                    label={'Phone Number'}
                    placeholder={'Enter Phone Number'}
                    textContentType="telephoneNumber"
                    rules={{
                      required: 'Phone Number is required',
                      minLength: {
                        value: 8,
                        message: 'Minimum 8 Characters for Phone Number',
                      },
                      maxLength: {
                        value: 8,
                        message: 'Maximum of 8 characters for Phone Number',
                      },
                    }}
                  />
                  <LmSubmitButtonRhf
                    loading={reserving}
                    disabled={reserving}
                    onSubmit={handleReservation}
                    marginVertical={'$4'}
                    theme="blue"
                    fontWeight={'bold'}
                  >
                    Reserve Now
                  </LmSubmitButtonRhf>
                </YStack>
              </LmFormRhfProvider>
            </YStack>
            <Card padding="$4" elevate bordered h={350}>
              <XStack space justifyContent="space-around" width={300}>
                <YStack space="$3" width={200}>
                  <H5>{data?.name}</H5>
                  <Paragraph // @ts-ignore
                    numberOfLines={2}
                    // @ts-ignore
                    ellipsizeMode="tail"
                  >
                    {data?.description}
                  </Paragraph>
                </YStack>
                <Image
                  source={data?.categories.imageURL as any}
                  width={100}
                  height={100}
                />
              </XStack>

              <XStack space="$2" paddingVertical={'$2'}>
                <SizableText>
                  <Users />
                </SizableText>
                <Paragraph>{data?.capacity}</Paragraph>
              </XStack>

              <XStack space="$3.5" paddingVertical={'$1'}>
                <CalendarHeart />
                <Paragraph>
                  {reserveStartDate} - {reserveEndDate}
                </Paragraph>
              </XStack>

              <XStack space="$2" marginTop={'$6'}>
                <Coins />
                <Paragraph fontWeight={'bold'}>
                  {data?.price + 'EGP / DAY *'} {totalDays + 'Days'}
                </Paragraph>
              </XStack>
              <Separator
                alignSelf="stretch"
                outlineColor={'white'}
                marginVertical={10}
              />
              <XStack justifyContent="space-between">
                <Paragraph fontWeight={'bold'}>Total (EGP)</Paragraph>
                <Paragraph fontWeight={'bold'}>
                  {data?.price! * totalDays + 'EGP'}
                </Paragraph>
              </XStack>
            </Card>
          </XStack>
        </ScrollView>
      </YStack>
    </AppShell>
  );
}
