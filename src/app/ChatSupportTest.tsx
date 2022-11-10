import React, { useContext, useState } from 'react';
import { Web3Provider } from '@ethersproject/providers';
import { Chat } from '@pushprotocol/uiweb';
import { EnvContext, Web3Context } from './context';

export type ChatProps = {
  provider: Web3Provider;
  supportAddress: string;
  greetingMsg?: string;
  modalTitle?: string;
  primaryColor?: string;
  apiKey?: string;
  env?: string;
};

export const ChatSupportTest = () => {
  const { account } = useContext<any>(Web3Context);
  const { env } = useContext<any>(EnvContext);
  return (
    <Chat
      account={account}
      supportAddress="0xA80a1dfBC68BcCda4777d8607B9dCc6AdC6Cde7e"
      apiKey={process.env.REACT_APP_CHAT_DEV_API_KEY}
      env={env}
    />
  );
};
