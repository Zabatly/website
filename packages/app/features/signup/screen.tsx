import { YStack } from '@my/ui';
import { useAuth, useSignUp } from 'app/utils/clerk';
import { OAuthStrategy } from '@clerk/types';
import { useRouter } from 'solito/router';
import { SignUpSignInComponent } from '@my/ui/src/components/SignUpSignIn';
// import { useContext } from 'react';
// import { ThemeContext } from 'app/provider/theme/themeContext';
import { Platform } from 'react-native';
import { AppBar } from '@my/ui/src/components/AppBar';

// TODO: React-form-hook
export function SignUpScreen() {
  const { push } = useRouter();
  // const { theme } = useContext(ThemeContext);
  const { isLoaded, signUp, setSession } = useSignUp();
  const { isSignedIn } = useAuth();
  if (!setSession || !isLoaded) return null;
  if (Platform.OS == 'web' && isSignedIn) push('./');
  const handleOAuthSignUpWithPress = async (strategy: OAuthStrategy) => {
    push('/signup/sso-oauth/' + strategy);
  };

  const handleEmailSignUpWithPress = async (emailAddress, password) => {
    console.log('Email', emailAddress, 'Password', password);
    await signUp
      .create({
        emailAddress,
        password,
      })
      .catch((err) => console.error('error', err.errors[0].longMessage));
    await signUp.prepareEmailAddressVerification();
    push('/signup/email-verification');
  };

  return (
    <YStack
      f={1}
      // backgroundColor={theme == 'dark' ? '#00142F' : '#1363ff'}
      space
    >
      {Platform.OS == 'web' && <AppBar />}
      <YStack f={1} jc="center" ai="center">
        <SignUpSignInComponent
          type="sign-up"
          handleOAuthWithPress={handleOAuthSignUpWithPress}
          handleEmailWithPress={handleEmailSignUpWithPress}
        />
      </YStack>
    </YStack>
  );
}
