import { SignInScreen } from 'app/features/signin/screen';
import { Stack } from 'expo-router';

export default function () {
  // @ts-ignore
  return (
    <>
      <Stack.Screen
        options={{
          presentation: 'fullScreenModal',
          headerTitle: 'Signin',
          headerShown: true,
        }}
      />
      {/* @ts-ignore */}
      <SignInScreen />
    </>
  );
}
