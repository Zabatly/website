import { AppShell } from '@my/ui/src/components/AppShell';
import { Paragraph, XStack } from '@my/ui';
import React from 'react';
import { ChatComp } from '@my/ui/src/components/ChatComp';

export function ChatScreen() {
  return (
    <AppShell>
      <XStack
        space={'$4'}
        alignItems="center"
        paddingVertical={'$2'}
        borderBottomColor={'$borderColorFocus'}
        borderBottomWidth={'$1'}
        jc={'center'}
      >
        <Paragraph size={'$5'}>Zabatly Support Bot</Paragraph>
      </XStack>
      <ChatComp />
    </AppShell>
  );
}
