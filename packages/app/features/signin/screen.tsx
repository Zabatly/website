import { YStack } from '@my/ui';
import { useAuth, useSignIn } from 'app/utils/clerk';
import { OAuthStrategy } from '@clerk/types';
import { useRouter } from 'solito/router';
import { SignUpSignInComponent } from '@my/ui/src/components/SignUpSignIn';
import { handleOAuthSignIn } from 'app/utils/auth';
import { ThemeContext } from 'app/provider/theme/themeContext';
import { useContext } from 'react';
import { Platform } from 'react-native';
import { AppBar } from '@my/ui/src/components/AppBar';
import { useThemeNameState } from 'app/utils/themeState';
// import { useThemeNameState } from 'app/utils/themeState';

const getBaseUrl = () => {
  if (typeof window !== 'undefined') return ''; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export function SignInScreen() {
  const { push } = useRouter();
  // const theme = useThemeNameState();
  const theme = useThemeNameState();
  const { isLoaded, signIn, setSession, setActive } = useSignIn();
  const { isSignedIn } = useAuth();
  if (!setSession || !isLoaded) return null;
  if (Platform.OS == 'web' && isSignedIn) push('/');
  const redirectIfSignedIn = async () => {
    if (signIn.status == 'complete') {
      const { createdSessionId } = signIn;
      if (createdSessionId) {
        setActive({ session: createdSessionId });
        push('/');
        console.log(isSignedIn);
      } else {
        console.log('Whats wrong??' + signIn);
      }
    }
  };

  const handleOAuthSignInWithPress = async (strategy: OAuthStrategy) => {
    await handleOAuthSignIn(strategy, setSession, signIn);
    await redirectIfSignedIn();
  };

  const handleEmailSignInWithPress = async (emailAddress, password) => {
    await signIn.create({
      identifier: emailAddress,
      password,
    });

    await redirectIfSignedIn();
  };

  return (
    <YStack
      f={1}
      // backgroundColor={theme == 'dark' ? '#00142F' : '#1363ff'}
      space
      theme={theme}
      backgroundColor="$background"
    >
      {Platform.OS == 'web' && <AppBar />}
      <YStack f={1} jc="center" ai="center">
        <SignUpSignInComponent
          type="sign-in"
          handleOAuthWithPress={handleOAuthSignInWithPress}
          handleEmailWithPress={handleEmailSignInWithPress}
        />
      </YStack>
    </YStack>
  );
}
