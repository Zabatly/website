import { Paragraph, XStack, Stack, Button } from '@my/ui';
import { LmAvatar } from '@tamagui-extras/core';
import { MessageSquare, X, Send } from '@tamagui/lucide-icons';
import React, { useState } from 'react';
import { Card, Input, ScrollView, YStack } from 'tamagui';
interface ChatMessageInt {
  authorName: string;
  message: string;
  side: 'left' | 'right';
  date: Date;
}

export function ChatWidget() {
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
    <XStack
      h={400}
      w={'25%'}
      pos={'absolute'}
      bottom={20}
      right={40}
      zi={999}
      alignItems={'flex-end'}
      jc={'space-between'}
    >
      <Stack h={500} w={'90%'}>
        {showChat && (
          <Card
            enterStyle={{
              opacity: 0,
            }}
            animation={'lazy'}
            elevate
            bordered
            h={'100%'}
            w={'90%'}
          >
            <Card.Header padding={'$2'} backgroundColor={'$blue6'}>
              <XStack space={'$3'} alignItems="center">
                <LmAvatar letter="Z" />
                <Paragraph size={'$5'}>Zabatly Bot</Paragraph>
              </XStack>
            </Card.Header>
            <YStack w={'100%'} f={0.8} padding={'$1'}>
              <ScrollView>
                <ChatMessage
                  authorName="Zabatly Bot"
                  side="left"
                  message="Hello There!"
                  date={new Date()}
                />
                <ChatMessage
                  authorName="Youssef Elmarakshy"
                  side="right"
                  message="Hi"
                  date={new Date()}
                />
                <ChatMessage
                  authorName="Youssef Elmarakshy"
                  side="right"
                  message="Lorrem Ipsum Lorrem Ipsum Lorrem Ipsum Lorrem Ipsum Lorrem Ipsum Lorrem Ipsum"
                  date={new Date()}
                />
                <ChatMessage
                  authorName="Youssef Elmarakshy"
                  side="right"
                  message="Hi"
                  date={new Date()}
                />
                <ChatMessage
                  authorName="Youssef Elmarakshy"
                  side="right"
                  message="Hi"
                  date={new Date()}
                />
              </ScrollView>
            </YStack>
            <Card.Footer>
              <Input
                w={'90%'}
                theme={'gray'}
                size={'$4'}
                placeholder="Start Chatting.."
                borderRadius={0}
                focusStyle={{ outlineWidth: 0, borderWidth: 0 }}
                onChangeText={setCurrentMessage}
                value={currentMessage}
              />
              <Button
                backgroundColor={'$gray2'}
                size={'$4'}
                borderRadius={0}
                borderWidth={0}
                focusStyle={{ outlineWidth: 0, borderWidth: 0 }}
                icon={<Send />}
                onPress={() => {
                  if (currentMessage.length > 0) {
                  }
                }}
              />
            </Card.Footer>
          </Card>
        )}
      </Stack>
      <Button
        elevate
        elevation={3}
        onPress={() => setShowChat(!showChat)}
        theme={'blue'}
        size="$6"
        circular
        icon={showChat ? <X /> : <MessageSquare />}
      />
    </XStack>
  );
}
