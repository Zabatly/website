import { YStack } from '@my/ui';
import { useAuth, useSignUp } from 'app/utils/clerk';
import { OAuthStrategy } from '@clerk/types';
import { useRouter } from 'solito/router';
import { SignUpSignInComponent } from '@my/ui/src/components/SignUpSignIn';
// import { useContext } from 'react';
// import { ThemeContext } from 'app/provider/theme/themeContext';
import { Platform } from 'react-native';
import { AppBar } from '@my/ui/src/components/AppBar';
import { AppShell } from '@my/ui/src/components/AppShell';
import { ToastComp } from '@my/ui/src/components/ToastComp';
import { useToastState, useToastController } from '@tamagui/toast';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

interface clerkErrorObject {
  code: string;
  longMessage: string;
  message: string;
  meta: object;
}

interface clerkAuthError {
  errors: clerkErrorObject[];
}

// TODO: React-form-hook
export function SignUpScreen() {
  const { t } = useTranslation();
  const { push } = useRouter();
  const toast = useToastController();
  const [isAuthenticating, setAuthenticating] = useState(false);
  const { isLoaded, signUp, setSession } = useSignUp();
  const { isSignedIn } = useAuth();
  if (!setSession || !isLoaded) return null;
  if (Platform.OS == 'web' && isSignedIn) push('./');
  const handleOAuthSignUpWithPress = async (strategy: OAuthStrategy) => {
    push('/signup/sso-oauth/' + strategy);
    return true;
  };

  const handleEmailSignUpWithPress = async (emailAddress, password) => {
    //console.log('Email', emailAddress, 'Password', password);
    setAuthenticating(true);
    await signUp
      .create({
        emailAddress,
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
    await signUp.prepareEmailAddressVerification();
    push('/signup/email-verification');
  };

  return (
    <AppShell>
      {Platform.OS == 'web' && <AppBar />}
      <YStack f={1} jc="center" ai="center">
        <ToastComp />
        <SignUpSignInComponent
          type="sign-up"
          handleOAuthWithPress={handleOAuthSignUpWithPress}
          handleEmailWithPress={handleEmailSignUpWithPress}
          isAuth={isAuthenticating}
        />
      </YStack>
    </AppShell>
  );
}
