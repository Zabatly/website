import { Stack } from 'expo-router';
import { SignUpScreen } from 'app/features/signup/screen';
export default function () {
  return (
    <>
      <Stack.Screen
        options={{
          presentation: 'fullScreenModal',
          headerTitle: 'Signup',
          headerShown: true,
        }}
      />
      <SignUpScreen />
    </>
  );
}
