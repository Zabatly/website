import {
  Anchor,
  Button,
  H1,
  H3,
  Paragraph,
  Separator,
  XStack,
  YStack,
  Image,
  Input,
  H2,
  Stack,
  Card,
  ScrollView,
  H4,
} from '@my/ui';
import React, { useContext } from 'react';
import { useLink } from 'solito/link';
import { trpc } from '../../utils/trpc';
import { SignedIn, SignedOut, useAuth } from '../../utils/clerk';
import { useRouter } from 'solito/router';
/* 
  if (isLoading) {
    return <Paragraph>Loading...</Paragraph>
  } */

/*
export function HomeScreen() {
  const { signOut } = useAuth();
  const userLinkProps = useLink({
    href: '/user/nate',
  });
  const signInLinkProps = useLink({
    href: '/signin',
  });
  const signUpLinkProps = useLink({
    href: '/signup',
  });

  const { data, isLoading, error } = trpc.entry.all.useQuery();

  useEffect(() => {
    console.log(data);
  }, [isLoading]);
  

  if (error) {
    return <Paragraph>{error.message}</Paragraph>;
  }

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600} px="$3">
        <XStack jc="center" ai="flex-end" fw="wrap" space="$2" mt="$-2">
          <Image
            src="https://raw.githubusercontent.com/chen-rn/CUA/main/apps/nextjs/public/favicon.ico"
            accessibilityLabel="create-universal-app logo"
            width={50}
            height={50}
            mt="$2"
          />
          <H1 ta="center" mt="$2">
            Zabatly
          </H1>
        </XStack>
        <Paragraph ta="center">
          This is a demo for create-universal-app. To read more about the
          philosophy behind it, visit{' '}
          <Anchor
            color="$color12"
            href="https://github.com/chen-rn/create-universal-app"
            target="_blank"
          >
            https://github.com/chen-rn/create-universal-app
          </Anchor>{' '}
          (give it a ⭐️ if you like it!)
        </Paragraph>
        <Paragraph ta="center">
          This template uses Expo, Next, Solito, tRPC, Tamagui, Clerk, and
          Prisma. If you are a beginner and is a little overwhelmed, I have also
          made a{' '}
          <Anchor
            color="$color12"
            href="https://youtu.be/aTEv0-ZBbWk"
            target="_blank"
          >
            video
          </Anchor>{' '}
          explanation on how this template works and how to get started!
        </Paragraph>
        <Separator />
      </YStack>

      <H3 ta="center">Some Demos</H3>
      <YStack p="$2">
        <Paragraph>tRPC Query Demo</Paragraph>
        {data?.map((entry) => (
          <Paragraph opacity={0.5} key={entry.id}>
            {entry.id}
          </Paragraph>
        ))}
      </YStack>

      <XStack space>
        <Button {...userLinkProps} theme={'gray'}>
          User Page(Routing)
        </Button>
      </XStack>

      <SignedOut>
        <XStack space ai="center">
          <Button {...signInLinkProps} theme={'gray'}>
            Sign In(Clerk)
          </Button>
          <Button {...signUpLinkProps} theme={'gray'}>
            Sign Up(Clerk)
          </Button>
        </XStack>
      </SignedOut>

      <SignedIn>
        <Button
          onPress={() => {
            signOut();
          }}
          theme={'red'}
        >
          Sign Out
        </Button>
      </SignedIn>
    </YStack>
  );
}
*/
import { useTranslation } from 'app/utils/i18n';
import { AppBar } from '@my/ui/src/components/AppBar';
import {
  Search,
  Locate,
  Navigation,
  List,
  Pencil,
  Hash,
  Star,
  MapPin,
} from '@tamagui/lucide-icons';
import { CategoriesSlider } from '@my/ui/src/components/CategoriesSlider';
import { useToastController } from '@tamagui/toast';
// import { useThemeNameState } from 'app/utils/themeState';
import { AppShell } from '@my/ui/src/components/AppShell';
import { ToastComp } from '@my/ui/src/components/ToastComp';
import { StarFill } from '@tamagui-extras/core';
import { VenueCard } from '@my/ui/src/components/VenueCard';
import { ChatWidget } from '@my/ui/src/components/ChatWidget';
import { Platform } from 'react-native';
/*
function VenueCard() {
  return (
    //box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    <Card
      w={300}
      h={350}
      size="$6"
      elevate
      bordered
      animation={'bouncy'}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}
      shadowRadius={'$0.2'}
      shadowColor={'rgba(0, 0, 0, 0.24)'}
    >
      <YStack flex={1} paddingHorizontal={'$1.5'}>
        <Image
          width={350}
          height={175}
          alignSelf="center"
          resizeMode="cover"
          source={{
            uri: 'https://images.squarespace-cdn.com/content/v1/5ada74b8e17ba3c5359136a4/1599702204937-WOF9RU65Q89UHML5TITE/building-a-wedding-venue.jpg',
          }}
          marginBottom={'$2'}
        />
        <XStack justifyContent="space-between" space>
          <H4>Weird Venue</H4>
          <XStack>
            <Paragraph>
              <StarFill />
            </Paragraph>
            <Paragraph fontWeight={'bold'}>4.8</Paragraph>
          </XStack>
        </XStack>
        <XStack marginVertical={'$2'} space={'$1.5'}>
          <MapPin />
          <Paragraph fontWeight={'500'}>Cairo, Egypt</Paragraph>
        </XStack>

        <XStack space={'$1.5'}>
          <Button theme={'blue'} size={'$2'} icon={<Hash />}>
            Wedding
          </Button>
          <Button theme={'blue'} size={'$2'} icon={<Hash />}>
            Engagement
          </Button>
        </XStack>
        <XStack marginVertical={'$4'} justifyContent="space-evenly">
          <Paragraph color={'$green9Light'} fontWeight={'bold'} fontSize={'$8'}>
            1000 EGP
          </Paragraph>
          <Paragraph
            color={'grey'}
            textDecorationLine="line-through"
            fontSize={'$4'}
          >
            1500 EGP
          </Paragraph>
          <Paragraph fontWeight={'bold'} color={'$red7Dark'} fontSize={'$5'}>
            40% OFF
          </Paragraph>
        </XStack>
      </YStack>
    </Card>
  );
}
*/
export function HomeScreen() {
  //const theme = useThemeNameState();
  // const isDarkTheme = theme === 'dark';
  const { t, i18n } = useTranslation();
  const langDirection = i18n.dir(i18n.language);
  return (
    <AppShell>
      <AppBar />
      {Platform.OS == 'web' && <ChatWidget />}
      <ScrollView showsHorizontalScrollIndicator={false}>
        <YStack
          direction={langDirection}
          f={1}
          paddingVertical={10}
          alignItems="center"
        >
          <YStack
            $gtSm={{
              w: '60%',
            }}
            w={'100%'}
            paddingHorizontal={'$4'}
            space={'$4'}
            overflow="hidden"
          >
            <H2>{t('latest_venues')}</H2>
            <XStack
              jc="space-between"
              $gtSm={{
                jc: 'flex-start',
              }}
              space={'$2'}
            >
              <Input
                direction={langDirection}
                theme={'gray'}
                f={1}
                $gtSm={{
                  w: '100%',
                }}
                size={'$4.5'}
                placeholder={t('search_venues') as any}
              />
              <Button theme={'blue'} size={'$4.5'} icon={<Search />} />
            </XStack>
            <XStack theme={'blue'} space={'$2'}>
              <ScrollView horizontal space={'$2'}>
                <Button icon={MapPin} size="$3">
                  Location
                </Button>
                <Button icon={List} size="$3">
                  Category
                </Button>
                <Button icon={Pencil} size="$3">
                  Name
                </Button>
                <Button icon={Star} size="$3">
                  Feature
                </Button>
                <Button icon={Hash} size="$3">
                  Wedding
                </Button>
                <Button icon={Hash} size="$3">
                  Sports
                </Button>
              </ScrollView>
            </XStack>
            <Separator alignSelf="stretch" outlineColor={'white'} />
            <H2>{t('featured_categories')}</H2>
            <CategoriesSlider />
            <Separator alignSelf="stretch" outlineColor={'white'} />
            <H2>{t('recommended_venues')}</H2>
            <XStack space>
              <VenueCard key={1} />
            </XStack>
          </YStack>
        </YStack>
      </ScrollView>
    </AppShell>
  );
}
