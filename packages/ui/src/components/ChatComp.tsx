import { Paragraph, YStack, Input, XStack, ScrollView, Button } from '@my/ui';
import { Send } from '@tamagui/lucide-icons';
import { LmAvatar } from './LmAvatar';
import React, { useState } from 'react';
interface ChatMessageInt {
  authorName: string;
  message: string;
  side: 'left' | 'right';
  date: Date;
}
// TODO: Wait For Mosta to send AI API
export function ChatComp() {
  const [showChat, setShowChat] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const formatDate = (date: Date) => {
    return date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
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
          <ChatMessage
            authorName="Youssef Elmarakshy"
            side="right"
            message="Hi"
            date={new Date()}
          />
          <ChatMessage
            authorName="Zabatly Bot"
            side="left"
            message="Hello There, How can i help you?"
            date={new Date()}
          />
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
        />
        <Button
          w={'15%'}
          backgroundColor={'$gray2'}
          size={'$4'}
          borderRadius={0}
          borderWidth={0}
          focusStyle={{ outlineWidth: 0, borderWidth: 0 }}
          icon={<Send />}
        />
      </XStack>
    </>
  );
}
