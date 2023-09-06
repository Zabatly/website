import { useEffect, useState } from 'react';
import { useSignUp, useUser } from 'app/utils/clerk';
import { handleOAuthSignUp } from 'app/utils/auth';
import { createParam } from 'solito';
import { OAuthStrategy } from '@clerk/types';
import { useRouter } from 'solito/router';
import { trpc } from 'app/utils/trpc';
import { Platform } from 'react-native';

type oauthQuery = {
  strategy: OAuthStrategy;
  status: 'fail' | 'success';
};
const { useParam } = createParam<oauthQuery>();

export function SSOOAuthScreen() {
  const { push } = useRouter();
  const { isLoaded, signUp, setActive } = useSignUp();
  const [strategy] = useParam('strategy');
  const [oauthStatus] = useParam('status');
  const { user, isSignedIn } = useUser();

  const createUserMutation = trpc.user.create.useMutation();
  const currentUser = trpc.user.current.useQuery();

  const createUserInDatabase = async (userId, username, emailAddress) => {
    await createUserMutation.mutate({
      clerkID: userId,
      username: username,
      email: emailAddress,
    });
  };

  useEffect(() => {
    if (!strategy || !setActive) return;
    if (isSignedIn && user && currentUser) {
      //in this case, we are assuming that if the user is signedin
      //and they currently don't have a database entry
      //then they are signing up for the first time
      //this is kind of a hack, but it works for now
      createUserInDatabase(
        user.id,
        user.username ? user.username : '',
        user.primaryEmailAddress!.emailAddress
      );
      push('/');
    } else {
      if (Platform.OS == 'web' && oauthStatus == 'fail') {
        console.log('oauthStatus: ' + oauthStatus);
        push('/signup/?status=fail');
        return;
      }
      handleOAuthSignUp(strategy, setActive as any, signUp as any);
    }
  }, [signUp, isLoaded, setActive]);
  return <></>;
}
