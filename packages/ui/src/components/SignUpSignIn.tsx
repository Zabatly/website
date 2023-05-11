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

interface signData {
  email: string;
  password: string;
  username: string;
}

export const SignUpSignInComponent: React.FC<Props> = ({
  type,
  handleOAuthWithPress,
  handleEmailWithPress,
}) => {
  async function handleFormData(data: signData) {
    setLoading(true);
    const signResponse = await handleEmailWithPress(data.email, data.password);
    console.log(signResponse);
  }
  const theme = useThemeNameState();
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);
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
      <LmFormRhfProvider
        shouldUseNativeValidation={false}
        defaultValues={{
          name: '',
          email: '',
          password: '',
        }}
        mode="onTouched"
      >
        <YStack theme={'gray'} space>
          <LmInputRhf
            direction={langDirection}
            name="email"
            placeholder={t('auth.email') as string}
            textContentType="emailAddress"
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Email is not correct',
              },
            }}
          />
          {type == 'sign-up' && (
            <LmInputRhf
              direction={langDirection}
              name="username"
              placeholder={t('auth.username') as string}
              textContentType="username"
              required={true}
              rules={{
                required: 'Username is required',
                minLength: {
                  value: 3,
                  message: 'Minimum username length is 3 characters',
                },
                maxLength: {
                  value: 36,
                  message: 'Maximum username length is 36 characters',
                },
              }}
            />
          )}
          <LmInputRhf
            name="password"
            direction={langDirection}
            placeholder={t('auth.password') as string}
            isPassword={true}
            secureTextEntry={true}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Minimum password length is 8 characters',
              },
              maxLength: {
                value: 256,
                message: 'Maximum password length is 256 characters',
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d).+$/,
                message:
                  'Password should contain at least one Capital letter and one number',
              },
            }}
          />
          {/* <Input
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
          */}
          <LmSubmitButtonRhf
            loading={loading}
            direction={langDirection}
            theme={'blue'}
            hoverStyle={{ opacity: 0.8 }}
            onHoverIn={() => {}}
            onHoverOut={() => {}}
            focusStyle={{ scale: 0.975 }}
            onSubmit={handleFormData}
          >
            {type === 'sign-up' ? t('auth.signup') : t('auth.signin')}
          </LmSubmitButtonRhf>
        </YStack>

        {/* sign up button */}
      </LmFormRhfProvider>
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
