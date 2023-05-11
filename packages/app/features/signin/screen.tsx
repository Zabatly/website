import { YStack } from '@my/ui';
import { useAuth, useSignIn } from 'app/utils/clerk';
import { OAuthStrategy } from '@clerk/types';
import { useRouter } from 'solito/router';
import { SignUpSignInComponent } from '@my/ui/src/components/SignUpSignIn';
import { handleOAuthSignIn } from 'app/utils/auth';
import { Platform } from 'react-native';
import { AppBar } from '@my/ui/src/components/AppBar';
import { AppShell } from '@my/ui/src/components/AppShell';
import { ToastComp } from '@my/ui/src/components/ToastComp';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useToastController } from '@tamagui/toast';

const getBaseUrl = () => {
  if (typeof window !== 'undefined') return ''; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

interface clerkErrorObject {
  code: string;
  longMessage: string;
  message: string;
  meta: object;
}

interface clerkAuthError {
  errors: clerkErrorObject[];
}

export function SignInScreen() {
  const { t } = useTranslation();
  const { push } = useRouter();
  const toast = useToastController();
  const { isLoaded, signIn, setSession, setActive } = useSignIn();
  const [isAuthenticating, setAuthenticating] = useState(false);
  const { isSignedIn } = useAuth();
  if (!setSession || !isLoaded) return null;
  if (Platform.OS == 'web' && isSignedIn) push('/');
  const redirectIfSignedIn = async () => {
    if (signIn.status == 'complete') {
      const { createdSessionId } = signIn;
      if (createdSessionId) {
        setActive({ session: createdSessionId });
        push('/');
        setAuthenticating(false);
      } else {
        setAuthenticating(false);
      }
    }
  };

  const handleOAuthSignInWithPress = async (strategy: OAuthStrategy) => {
    await handleOAuthSignIn(strategy, setSession, signIn);
    redirectIfSignedIn();
  };

  const handleEmailSignInWithPress = async (emailAddress, password) => {
    try {
      setAuthenticating(true);
      await signIn
        .create({
          identifier: emailAddress,
          password,
        })
        .catch((err: clerkAuthError) => {
          if (err && err.errors[0]?.code) {
            toast.show(t('auth.errors.' + err.errors[0].code), {
              toastType: 'error',
            });
            setAuthenticating(false);
          }
        });

      await redirectIfSignedIn();
    } catch (e) {
      console.log(e.errors);
    }
  };

  return (
    <AppShell>
      {Platform.OS == 'web' && <AppBar />}
      <ToastComp />
      <YStack f={1} jc="center" ai="center">
        <SignUpSignInComponent
          type="sign-in"
          handleOAuthWithPress={handleOAuthSignInWithPress}
          handleEmailWithPress={handleEmailSignInWithPress}
          isAuth={isAuthenticating}
        />
      </YStack>
    </AppShell>
  );
}
