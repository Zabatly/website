import { YStack, Paragraph, XStack, Button, Image, Separator } from 'tamagui';
import { Link } from 'solito/link';
import { useTranslation } from 'app/utils/i18n';
import { OAuthStrategy } from '@clerk/types';
import { useThemeNameState } from 'app/utils/themeState';
import {
  LmFormRhfProvider,
  LmSubmitButtonRhf,
  LmInputRhf,
} from '@tamagui-extras/form';

interface Props {
  type: 'sign-up' | 'sign-in';
  handleOAuthWithPress: (strategy: OAuthStrategy) => void;
  handleEmailWithPress: (data: signData) => void;
  isAuth: boolean;
}

export interface signData {
  email: string;
  password: string;
  username?: string;
}

export const SignUpSignInComponent: React.FC<Props> = ({
  type,
  handleOAuthWithPress,
  handleEmailWithPress,
  isAuth: isAuthenticating,
}) => {
  const theme = useThemeNameState();
  const { t, i18n } = useTranslation();
  const langDirection = i18n.dir(i18n.language);
  return (
    <YStack
      theme={theme}
      backgroundColor="$background"
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

      {/* email signin/signup option */}
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
              required: t('auth.errors.emailRequired') as string,
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: t('auth.errors.emailValid') as string,
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
                required: t('auth.errors.usernameRequired') as string,
                minLength: {
                  value: 3,
                  message: t('auth.errors.usernameMin') as string,
                },
                maxLength: {
                  value: 36,
                  message: t('auth.errors.usernameMin') as string,
                },
              }}
            />
          )}
          <LmInputRhf
            name="password"
            direction={langDirection}
            placeholder={t('auth.password') as string}
            required={true}
            isPassword={true}
            rules={{
              required: t('auth.errors.passwordRequired') as string,
              minLength: {
                value: 8,
                message: t('auth.errors.passwordMin') as string,
              },
              maxLength: {
                value: 256,
                message: t('auth.errors.passwordMax') as string,
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d).+$/,
                message: t('auth.errors.passwordValid') as string,
              },
            }}
          />
          <LmSubmitButtonRhf
            loading={isAuthenticating}
            direction={langDirection}
            theme={'blue'}
            hoverStyle={{ opacity: 0.8 }}
            onHoverIn={() => {}}
            onHoverOut={() => {}}
            focusStyle={{ scale: 0.975 }}
            onSubmit={handleEmailWithPress}
          >
            {type === 'sign-up' ? t('auth.signup') : t('auth.signin')}
          </LmSubmitButtonRhf>
        </YStack>

        {/* sign up button */}
      </LmFormRhfProvider>

      {/* or sign in, in small and less opaque font */}
      <XStack>
        <Paragraph size="$2" mr="$2" opacity={0.6}>
          {type === 'sign-up' ? t('auth.haveAccount') : t('auth.noAccount')}
        </Paragraph>
        <Link href={type === 'sign-up' ? '/signin' : '/signup'}>
          <Paragraph
            color={'$blue9Light'}
            cursor={'pointer'}
            size="$2"
            fontWeight={'700'}
            opacity={0.8}
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
