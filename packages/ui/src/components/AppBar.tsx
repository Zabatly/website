import {
  XStack,
  YStack,
  Separator,
  Button,
  H6,
  YGroup,
  Paragraph,
} from '@my/ui';
import { Platform } from 'react-native';
import {
  Moon,
  Sun,
  Settings2,
  Languages,
  LogOut,
  Inbox,
} from '@tamagui/lucide-icons';
import { Logo } from './Logo';
import { useTranslation } from 'app/utils/i18n';
import { useRouter } from 'solito/router';
import { CustomPopOver } from './CustomPopover';
import { useAuth } from 'app/utils/clerk';
import { useLink } from 'solito/link';
import { useThemeToggle, useThemeNameState } from 'app/utils/themeState';
import * as nextRouter from 'next/router';
const disabledBtnStyle = {
  outlineWidth: '$0',
  bw: '$0',
};

export function AppBar() {
  const webRouter = Platform.OS == 'web' ? nextRouter.useRouter() : null;
  const { isLoaded, signOut, isSignedIn } = useAuth();
  const signInLinkProps = useLink({
    href: '/signin',
  });
  const theme = useThemeNameState();
  const isDark = theme == 'dark';
  const toggleTheme = useThemeToggle();
  const { t, i18n } = useTranslation();
  const { push } = useRouter();

  const langDirection = i18n.dir(i18n.language);
  if (!isLoaded) return null;

  return (
    <XStack
      w={'100%'}
      h={'$6'}
      alignItems="center"
      jc={'center'}
      backgroundColor={'$background'}
      bbc={'$borderColorHover'}
      bbw="$1"
      elevation={'$4'}
      py={'$2'}
    >
      <XStack
        $gtSm={{
          w: '60%',
        }}
        w={'100%'}
        alignItems="center"
        jc={'space-between'}
        h={'100%'}
        paddingHorizontal={'$4'}
      >
        <XStack>
          <Logo />
        </XStack>

        <XStack>
          {!isSignedIn && (
            <Button {...signInLinkProps} theme={'blue'}>
              {t('auth.signin')}
            </Button>
          )}

          <Separator
            borderColor={'$borderColorHover'}
            alignSelf="stretch"
            h={'$1'}
            w={'$1'}
            vertical
            marginVertical={10}
            marginHorizontal={5}
          />

          {/* Notifications Tab */}
          {isSignedIn && (
            <CustomPopOver
              isBouncy={true}
              hideArrow={false}
              contentProps={{
                width: 300,
                paddingVertical: '$5',
                paddingHorizontal: '$5',
              }}
              sheetProps={{
                fullScreen: false,
                hideHandle: false,
              }}
              trigger={
                <Button
                  backgroundColor={'$backgroundTransparent'}
                  outlineColor="transparent"
                  focusStyle={disabledBtnStyle as any}
                  pressStyle={disabledBtnStyle as any}
                  icon={<Inbox />}
                />
              }
            >
              <H6 marginBottom={'$2'}>Notifications</H6>
              <YGroup separator={<Separator marginVertical={'$2'} />}>
                <YGroup.Item>
                  <Paragraph>AAA</Paragraph>
                </YGroup.Item>
                <YGroup.Item>
                  <Paragraph>AAA</Paragraph>
                </YGroup.Item>
                <YGroup.Item>
                  <Paragraph>AAA</Paragraph>
                </YGroup.Item>
              </YGroup>
            </CustomPopOver>
          )}

          {/* Settings Tab */}
          <CustomPopOver
            isBouncy={true}
            trigger={
              <Button
                backgroundColor={'$backgroundTransparent'}
                outlineColor="transparent"
                focusStyle={disabledBtnStyle as any}
                pressStyle={disabledBtnStyle as any}
                icon={<Settings2 />}
              />
            }
            contentProps={{
              width: 300,
              paddingVertical: '$5',
              paddingHorizontal: '$5',
            }}
            sheetProps={{
              fullScreen: false,
              hideHandle: false,
            }}
          >
            <YStack w={'100%'} margin={'$0'}>
              <YGroup theme={'blue'}>
                <YGroup.Item>
                  <CustomPopOver
                    placement="left"
                    hideArrow={false}
                    isBouncy={true}
                    trigger={
                      <Button
                        direction={langDirection}
                        focusStyle={disabledBtnStyle as any}
                        pressStyle={disabledBtnStyle as any}
                        icon={<Languages />}
                        borderBottomLeftRadius={'$0'}
                        borderBottomRightRadius={'$0'}
                      >
                        {t('changeLocale')}
                      </Button>
                    }
                  >
                    <Button
                      direction={langDirection}
                      focusStyle={disabledBtnStyle as any}
                      pressStyle={disabledBtnStyle as any}
                      onPress={() => {
                        const lang = i18n.language == 'en' ? 'ar' : 'en';
                        if (webRouter)
                          return push(webRouter.pathname, undefined, {
                            locale: lang,
                          });

                        i18n.changeLanguage(lang);
                      }}
                    >
                      {i18n.language == 'en' ? t('arabic') : t('english')}
                    </Button>
                  </CustomPopOver>
                </YGroup.Item>
                <YGroup.Item>
                  <Button
                    direction={langDirection}
                    hoverStyle={disabledBtnStyle as any}
                    focusStyle={disabledBtnStyle as any}
                    pressStyle={disabledBtnStyle as any}
                    icon={isDark ? <Sun /> : <Moon />}
                    onPress={toggleTheme}
                  >
                    {isDark ? t('lightMode') : t('darkMode')}
                  </Button>
                </YGroup.Item>

                {isSignedIn && (
                  <YGroup.Item>
                    <Button
                      onPress={() => signOut()}
                      direction={langDirection}
                      icon={<LogOut />}
                    >
                      {t('signout')}
                    </Button>
                  </YGroup.Item>
                )}
              </YGroup>
            </YStack>
          </CustomPopOver>
        </XStack>
      </XStack>
    </XStack>
  );
}
