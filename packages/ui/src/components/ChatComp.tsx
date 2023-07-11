import { Paragraph, YStack, Input, XStack, ScrollView, Button } from '@my/ui';
import { Send } from '@tamagui/lucide-icons';
import { LmAvatar } from './LmAvatar';
import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
interface ChatMessageInt {
  authorName: string;
  message: string;
  side: 'left' | 'right';
  date: Date;
}
// TODO: Wait For Mosta to send AI API

export function ChatComp() {
  const [authorName, setAuthorName] = useState<string>('');
  const [handlingChatMessage, setHandleChatMessage] = useState(false);
  const [messages, setMessages] = useState<ChatMessageInt[]>([]);
  const [showChat, setShowChat] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const apiURL =
    Platform.OS == 'web'
      ? 'localhost'
      : Constants.manifest?.debuggerHost?.split(':')[0];
  const formatDate = (date: Date) => {
    return date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };

  const handleChatMessage = () => {
    if (currentMessage != '' && !handlingChatMessage) {
      setHandleChatMessage(true);

      console.log(currentMessage, ' Sending to Bot');
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          authorName: 'Youssef Elmarakshy',
          date: new Date(),
          side: 'right',
          message: currentMessage,
        },
      ]);
      console.log(apiURL);
      fetch(`http://${apiURL}:5000/Chat`, {
        method: 'POST',
        body: JSON.stringify({ type: 'en', message: currentMessage }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              authorName: 'Zabatly Bot',
              date: new Date(),
              side: 'left',
              message: data,
            },
          ]);
        })
        .catch((error) => {
          console.log(error);
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              authorName: 'Zabatly Bot',
              date: new Date(),
              side: 'left',
              message: 'Error Occurred, Try again later.',
            },
          ]);
        });
      setCurrentMessage('');
      setHandleChatMessage(false);
    }
  };

  const ChatMessage = ({ authorName, message, side, date }: ChatMessageInt) => {
    const messageStyle = {
      ...(side === 'left'
        ? {
            borderBottomLeftRadius: 0,
            backgroundColor: '$blue6',
          }
        : {
            borderBottomRightRadius: 0,
            backgroundColor: '$blue10',
          }),
    };
    return (
      <XStack
        jc={side == 'left' ? 'flex-start' : 'flex-end'}
        padding={'$2'}
        space={'$3.5'}
        margin={2}
      >
        {side == 'left' && <LmAvatar letter="Z" size={'$3'} />}
        <YStack
          alignItems={side == 'left' ? 'flex-start' : 'flex-end'}
          space={'$2'}
          maxWidth={'90%'}
        >
          <XStack space={'$2'}>
            <Paragraph fontSize={'$4'}>{authorName}</Paragraph>
            <Paragraph color={'$gray10'} fontSize={'$1'} fontStyle="italic">
              {formatDate(date)}
            </Paragraph>
          </XStack>

          <Paragraph
            fontSize={'$2'}
            borderRadius={5}
            padding={'$2'}
            paddingHorizontal={'$3.5'}
            {...messageStyle}
          >
            {message}
          </Paragraph>
        </YStack>
      </XStack>
    );
  };
  return (
    <>
      <YStack f={1} padding={'$1'}>
        <ScrollView>
          {messages.map((messageObject) => {
            return (
              <ChatMessage
                key={(Math.random() * 10000).toFixed(0)}
                {...messageObject}
              />
            );
          })}
        </ScrollView>
      </YStack>
      <XStack>
        <Input
          w={'85%'}
          theme={'gray'}
          size={'$4'}
          placeholder="Start Chatting.."
          borderRadius={0}
          focusStyle={{ outlineWidth: 0, borderWidth: 0 }}
          onChangeText={setCurrentMessage}
          value={currentMessage}
          disabled={handlingChatMessage}
          onSubmitEditing={handleChatMessage}
        />
        <Button
          w={'15%'}
          backgroundColor={'$gray2'}
          size={'$4'}
          borderRadius={0}
          borderWidth={0}
          focusStyle={{ outlineWidth: 0, borderWidth: 0 }}
          icon={<Send />}
          disabled={handlingChatMessage}
          onPress={handleChatMessage}
        />
      </XStack>
    </>
  );
}
