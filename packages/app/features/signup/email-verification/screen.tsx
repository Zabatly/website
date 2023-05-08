/* this page is just one input for email verification */
import { useState } from 'react';
import {
  Button,
  Input,
  XStack,
  YStack,
  H2,
  Separator,
  Paragraph,
  H4,
} from '@my/ui';
import { useAuth, useSignUp } from 'app/utils/clerk';
import { useRouter } from 'solito/router';
import { trpc } from 'app/utils/trpc';
import { AppShell } from '@my/ui/src/components/AppShell';
import { MailQuestion } from '@tamagui/lucide-icons';
import { Platform } from 'react-native';

export function EmailVerificationScreen() {
  const { push } = useRouter();
  const [verificationCode, setVerificationCode] = useState('');
  const createUserMutation = trpc.user.create.useMutation();

  const { signUp, setSession } = useSignUp();
  const { isSignedIn } = useAuth();
  if (!signUp) return null;
  if (Platform.OS == 'web' && isSignedIn) return push('/');

  const handleEmailVerificationOnPress = async () => {
    /* verify the email */
    await signUp.attemptEmailAddressVerification({ code: verificationCode });

    if (signUp.status === 'complete') {
      const { createdSessionId } = signUp;
      if (createdSessionId) {
        await setSession(createdSessionId);
      }
      /* add user id and email into our database */
      /*
      createUserMutation.mutate({
        id: signUp.createdUserId!,
        email: signUp.emailAddress!,
      });
      */
      push('/');
    } else alert('Invalid verification code');
  };
  return (
    <AppShell>
      <YStack flex={1} jc="center" ai="center" space>
        <YStack
          $gtSm={{
            w: '45%',
          }}
          br={'$2'}
          alignItems="center"
          backgroundColor={'$backgroundSoft'}
          padding={'$6'}
          w="100%"
        >
          <XStack marginTop={'$2'}>
            <MailQuestion size={'$4'} />
          </XStack>

          <H4 textAlign="center" marginVertical={'$4'}>
            VERIFY YOUR EMAIL ADDRESS
          </H4>
          <Separator w={'50%'} theme={'gray'} marginBottom={'$4'} />
          <YStack alignItems="center" marginVertical={'$2'}>
            <Paragraph>A verification code has been sent to</Paragraph>
            {signUp && signUp.emailAddress && (
              <Paragraph marginBottom={'$4'} fontWeight={'bold'}>
                {signUp.emailAddress}
              </Paragraph>
            )}
            <Paragraph>
              Please check your inbox and enter the verification code below to
              verify your email.
            </Paragraph>
          </YStack>
          <Input
            $gtSm={{
              w: '40%',
            }}
            w={'90%'}
            marginVertical={'$4'}
            textContentType="oneTimeCode"
            placeholder="Verification code"
            onChangeText={(text) => {
              setVerificationCode(text);
            }}
          />

          {/* button for submitting */}
          <Button
            $gtSm={{
              w: '40%',
            }}
            w={'90%'}
            size={'$4'}
            onPress={() => {
              handleEmailVerificationOnPress();
            }}
          >
            Submit
          </Button>
        </YStack>
      </YStack>
    </AppShell>
  );
}
