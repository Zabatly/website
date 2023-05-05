import { useState } from 'react';
import {
  YStack,
  Paragraph,
  XStack,
  Button,
  Input,
  Image,
  Stack,
  Separator,
} from 'tamagui';
import { Link } from 'solito/link';
import { OAuthStrategy } from '@clerk/types';

interface Props {
  type: 'sign-up' | 'sign-in';
  handleOAuthWithPress: (strategy: OAuthStrategy) => void;
  handleEmailWithPress: (emailAddress, password) => void;
}

export const SignUpSignInComponent: React.FC<Props> = ({
  type,
  handleOAuthWithPress,
  handleEmailWithPress,
}) => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return (
    <YStack
      borderRadius="$10"
      space
      px="$7"
      py="$6"
      w={350}
      shadowColor={'#00000020'}
      shadowRadius={26}
      shadowOffset={{ width: 0, height: 4 }}
      bg="$background"
    >
      <Paragraph size="$5" fontWeight={'700'} opacity={0.8} mb="$1">
        {type === 'sign-up' ? 'Create your account' : 'Log in to your account'}
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
      <XStack ai="center" width="100%" alignItems="center">
        <Separator
          bc={'$borderColorHover'}
          vertical={false}
          marginRight={'$4'}
        />
        <Paragraph size="$3" opacity={0.5}>
          OR
        </Paragraph>
        <Separator
          bc={'$borderColorHover'}
          vertical={false}
          marginLeft={'$4'}
        />
      </XStack>

      {/* email sign up option */}
      <Input
        textContentType="emailAddress"
        placeholder="Email"
        value={emailAddress}
        onChangeText={setEmailAddress}
      />
      {type == 'sign-up' && (
        <Input
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          textContentType="username"
        />
      )}
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        textContentType="password"
        secureTextEntry
      />

      {/* sign up button */}
      <Button
        themeInverse
        onPress={() => {
          handleEmailWithPress(emailAddress, password);
        }}
        hoverStyle={{ opacity: 0.8 }}
        onHoverIn={() => {}}
        onHoverOut={() => {}}
        focusStyle={{ scale: 0.975 }}
      >
        {type === 'sign-up' ? 'Sign up' : 'Sign in'}
      </Button>

      {/* or sign in, in small and less opaque font */}
      <XStack>
        <Paragraph size="$2" mr="$2" opacity={0.4}>
          {type === 'sign-up'
            ? 'Already have an account?'
            : 'Don’t have an account?'}
        </Paragraph>
        <Link href={type === 'sign-up' ? '/signin' : '/signup'}>
          <Paragraph
            cursor={'pointer'}
            size="$2"
            fontWeight={'700'}
            opacity={0.5}
            hoverStyle={{ opacity: 0.4 }}
          >
            {type === 'sign-up' ? 'Sign in' : 'Sign up'}
          </Paragraph>
        </Link>
      </XStack>
    </YStack>
  );
};
