import { YStack } from '@my/ui';
import { useAuth, useSignUp } from 'app/utils/clerk';
import { OAuthStrategy } from '@clerk/types';
import { useRouter } from 'solito/router';
import {
  SignUpSignInComponent,
  signData,
} from '@my/ui/src/components/SignUpSignIn';
import { Platform } from 'react-native';
import { AppBar } from '@my/ui/src/components/AppBar';
import { AppShell } from '@my/ui/src/components/AppShell';
import { ToastComp } from '@my/ui/src/components/ToastComp';
import { useToastState, useToastController } from '@tamagui/toast';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { createParam } from 'solito';
type signupQuery = {
  status: 'fail' | 'success';
  type: 'acc_unk';
};
const { useParam } = createParam<signupQuery>();
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
  const [authStatus] = useParam('status');
  const [signupError] = useParam('type');
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
  };

  if (authStatus == 'fail') {
    console.log('Failed all day');
    toast.show(
      t(
        'auth.errors.' + signupError
          ? 'form_identifier_not_found'
          : 'form_identifier_exists'
      ),
      {
        toastType: 'error',
        duration: 3000,
        displayTime: new Date(),
      }
    );
  }

  const handleEmailSignUpWithPress = async ({
    email,
    username,
    password,
  }: signData) => {
    setAuthenticating(true);
    await signUp
      .create({
        emailAddress: email,
        username: username,
        password: password,
      })
      .catch((err: clerkAuthError) => {
        if (err && err.errors[0]?.code) {
          toast.show(t('auth.errors.' + err.errors[0].code), {
            toastType: 'error',
            duration: 3000,
            displayTime: new Date(),
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
