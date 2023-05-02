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
import React, { useContext } from 'react';
import { Moon, Sun, Settings2, Languages } from '@tamagui/lucide-icons';
import { Logo } from './Logo';
import { useTranslation } from 'app/utils/i18n';
import { useRouter } from 'solito/router';
const disabledBtnStyle = {
  outlineWidth: '$0',
  bw: '$0',
};

function SettingsPopout({
  Name,
  themeName,
  themeToggle,
  ...props
}: PopoverProps & {
  Name?: string;
  themeName?: string;
  themeToggle?: any;
}) {
  const isDark = themeName == 'dark';
  const { t } = useTranslation();
  return (
    <Popover size="$6" allowFlip {...props}>
      <Popover.Trigger asChild>
        <Button
          backgroundColor={'$backgroundTransparent'}
          outlineColor="transparent"
          focusStyle={disabledBtnStyle as any}
          pressStyle={disabledBtnStyle as any}
          icon={<Settings2 />}
        />
      </Popover.Trigger>
      <Popover.Content
        width={300}
        paddingVertical={'$5'}
        paddingHorizontal={'$5'}
        borderWidth={1}
        borderColor="$borderColor"
        enterStyle={{ x: 0, y: -10, opacity: 0 }}
        exitStyle={{ x: 0, y: -10, opacity: 0 }}
        x={0}
        y={0}
        opacity={1}
        animation={[
          'quick',
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
        elevate
      >
        <Popover.Arrow borderWidth={1} borderColor="$borderColor" />
        <YStack w={'100%'} margin={'$0'}>
          <YGroup separator={<Separator />}>
            <YGroup.Item>
              <LocalePopover placement="left" Name="right-popover" />
              {/* <ListItem title="Locale:" subTitle="Second subtitle" />*/}
            </YGroup.Item>
            <YGroup.Item>
              <Button
                focusStyle={disabledBtnStyle as any}
                pressStyle={disabledBtnStyle as any}
                icon={isDark ? <Sun /> : <Moon />}
                onPress={() => themeToggle()}
              >
                {isDark ? t('lightMode') : t('darkMode')}
              </Button>
            </YGroup.Item>
          </YGroup>
        </YStack>
      </Popover.Content>
    </Popover>
  );
}

function LocalePopover({ Name, ...props }: PopoverProps & { Name?: string }) {
  const { t, i18n } = useTranslation();
  const { push } = useRouter();
  return (
    <Popover size="$6" allowFlip {...props}>
      <Popover.Trigger asChild>
        <Button
          borderBottomLeftRadius={0}
          borderBottomRightRadius={0}
          focusStyle={disabledBtnStyle as any}
          pressStyle={disabledBtnStyle as any}
          icon={<Languages />}
        >
          {t('changeLocale')}
        </Button>
      </Popover.Trigger>
      <Popover.Content
        paddingVertical={'$5'}
        paddingHorizontal={'$5'}
        borderWidth={1}
        borderColor="$borderColor"
        enterStyle={{ x: 0, y: -10, opacity: 0 }}
        exitStyle={{ x: 0, y: -10, opacity: 0 }}
        x={0}
        y={0}
        opacity={1}
        animation={[
          'quick',
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
        elevate
      >
        <YStack w={'100%'} margin={'$0'}>
          <YGroup separator={<Separator />}>
            <YGroup.Item>
              <Button
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
            </YGroup.Item>
          </YGroup>
        </YStack>
      </Popover.Content>
    </Popover>
  );
}

export function AppBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

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
          {/* 
             <Button
            backgroundColor={'$backgroundTransparent'}
            focusStyle={disabledBtnStyle as any}
            pressStyle={disabledBtnStyle as any}
            onPress={() => toggleTheme()}
            icon={theme == 'light' ? <Moon /> : <Sun />}
          />
          <Button
            borderRadius={'50%'}
            backgroundColor={'$backgroundTransparent'}
            outlineColor="transparent"
            focusStyle={disabledBtnStyle as any}
            pressStyle={disabledBtnStyle as any}
            icon={<Settings2 />}
          />
         
         */}
          <SettingsPopout
            themeName={theme}
            themeToggle={toggleTheme}
            Name="bottom-popover"
          />
        </XStack>
      </XStack>
    </XStack>
    /*
    <XStack
      backgroundColor={'$background'}
      elevation={'$1'}
      py={'$2'}
      my={0}
      w={'100%'}
      h={'$8'}
      bbc={'$borderColorHover'}
      paddingHorizontal="$2"
      alignItems="center"
      bbw="$1"
      space={5}
      paddingTop={'$2'}
    >
      <Logo />
      <Separator
        borderColor={'$borderColorHover'}
        alignSelf="stretch"
        h={'$1'}
        w={'$1'}
        vertical
        marginVertical={10}
        marginHorizontal={20}
      />
      <Paragraph></Paragraph>
    </XStack>
    */
  );
}
