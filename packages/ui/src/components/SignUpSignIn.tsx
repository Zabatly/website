import { useState } from 'react';
import {
  YStack,
  Paragraph,
  XStack,
  Button,
  Input,
  Image,
  Stack,
  Separator,
} from 'tamagui';
import { Link } from 'solito/link';
import { useTranslation } from 'app/utils/i18n';
import { OAuthStrategy } from '@clerk/types';
import { useThemeNameState } from 'app/utils/themeState';
import {
  LmFormRhfProvider,
  LmInputRhf,
  LmSubmitButtonRhf,
} from '@tamagui-extras/form';
interface Props {
  type: 'sign-up' | 'sign-in';
  handleOAuthWithPress: (strategy: OAuthStrategy) => void;
  handleEmailWithPress: (emailAddress, password) => void;
}

export const SignUpSignInComponent: React.FC<Props> = ({
  type,
  handleOAuthWithPress,
  handleEmailWithPress,
}) => {
  const theme = useThemeNameState();
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { t, i18n } = useTranslation();
  const langDirection = i18n.dir(i18n.language);

  return (
    <YStack
      theme={theme}
      backgroundColor="$backgroundSoft"
      direction={langDirection}
      borderRadius="$10"
      space
      px="$7"
      py="$6"
      w={350}
      shadowColor={'#00000020'}
      shadowRadius={26}
      shadowOffset={{ width: 0, height: 4 }}
    >
      <Paragraph size="$5" fontWeight={'700'} opacity={0.8} mb="$1">
        {type === 'sign-up' ? t('auth.createAccount') : t('auth.loginAccount')}
      </Paragraph>
      {/* all the oauth sign up options */}
      <XStack jc={'space-around'}>
        {/* 3 buttons, for google, apple, discord */}
        <Button
          size="$5"
          onPress={() => handleOAuthWithPress('oauth_google')}
          hoverStyle={{ opacity: 0.8 }}
          focusStyle={{ scale: 0.95 }}
          borderColor="$gray8Light"
        >
          <Image source={require('./img/google.jpg')} width={20} height={20} />
        </Button>
        <Button
          size="$5"
          onPress={() => handleOAuthWithPress('oauth_facebook')}
          hoverStyle={{ opacity: 0.8 }}
          focusStyle={{ scale: 0.95 }}
          borderColor="$gray8Light"
        >
          <Image
            source={require('./img/facebook.jpg')}
            width={22}
            height={22}
            resizeMode="contain"
          />
        </Button>
      </XStack>
      <XStack theme={'gray'} ai="center" width="100%" alignItems="center">
        <Separator vertical={false} />
        <Paragraph size="$3" opacity={0.5} marginHorizontal={'$4'}>
          {t('auth.or')}
        </Paragraph>
        <Separator vertical={false} />
      </XStack>

      {/* email sign up option */}
      <YStack theme={'gray'} space>
        <Input
          direction={langDirection}
          textContentType="emailAddress"
          placeholder={t('auth.email') as string}
          value={emailAddress}
          onChangeText={setEmailAddress}
        />
        {type == 'sign-up' && (
          <Input
            direction={langDirection}
            placeholder={t('auth.username') as string}
            value={username}
            onChangeText={setUsername}
            textContentType="username"
          />
        )}
        <Input
          direction={langDirection}
          placeholder={t('auth.password') as string}
          value={password}
          onChangeText={setPassword}
          textContentType="password"
          secureTextEntry
        />
      </YStack>

      {/* sign up button */}
      <Button
        direction={langDirection}
        theme={'blue'}
        onPress={() => {
          handleEmailWithPress(emailAddress, password);
        }}
        hoverStyle={{ opacity: 0.8 }}
        onHoverIn={() => {}}
        onHoverOut={() => {}}
        focusStyle={{ scale: 0.975 }}
      >
        {type === 'sign-up' ? t('auth.signup') : t('auth.signin')}
      </Button>

      {/* or sign in, in small and less opaque font */}
      <XStack>
        <Paragraph size="$2" mr="$2" opacity={0.4}>
          {type === 'sign-up' ? t('auth.haveAccount') : t('auth.noAccount')}
        </Paragraph>
        <Link href={type === 'sign-up' ? '/signin' : '/signup'}>
          <Paragraph
            cursor={'pointer'}
            size="$2"
            fontWeight={'700'}
            opacity={0.5}
            hoverStyle={{ opacity: 0.4 }}
            mr={'$1.5'}
          >
            {type === 'sign-up' ? t('auth.signin') : t('auth.signup')}
          </Paragraph>
        </Link>
      </XStack>
    </YStack>
  );
};
