import {
  Paragraph,
  XStack,
  YStack,
  Separator,
  Tokens,
  Button,
  Popover,
  PopoverProps,
  Adapt,
  Group,
  ListItem,
  XGroup,
  YGroup,
} from '@my/ui';
import { Platform } from 'react-native';
import { ThemeContext } from 'app/provider/theme/themeContext';
import React, { useContext, useState } from 'react';
import { Moon, Sun, Settings2, Languages } from '@tamagui/lucide-icons';
import { Logo } from './Logo';
import { useTranslation } from 'app/utils/i18n';
import { useRouter } from 'solito/router';
import { CustomPopOver } from './CustomPopover';
const disabledBtnStyle = {
  outlineWidth: '$0',
  bw: '$0',
};

export function AppBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme == 'dark';
  const { t, i18n } = useTranslation();
  const { push } = useRouter();
  const langDirection = i18n.dir(i18n.language);
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
          <Separator
            borderColor={'$borderColorHover'}
            alignSelf="stretch"
            h={'$1'}
            w={'$1'}
            vertical
            marginVertical={10}
            marginHorizontal={5}
          />
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
              <YGroup>
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
                        if (Platform.OS !== 'web') {
                          return i18n.changeLanguage(lang);
                        }
                        push('/', undefined, { locale: lang });
                      }}
                    >
                      {i18n.language == 'en' ? t('arabic') : t('english')}
                    </Button>
                  </CustomPopOver>
                </YGroup.Item>
                <YGroup.Item>
                  <Button
                    theme={'blue'}
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
              </YGroup>
            </YStack>
          </CustomPopOver>
        </XStack>
      </XStack>
    </XStack>
  );
}
