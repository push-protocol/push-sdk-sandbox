import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import * as PUSHAPI from '@pushprotocol/restapi';
import { Link } from 'react-router-dom';
import { Section, SectionItem } from '../components/StyledComponents';
import { ChatViewList } from '@pushprotocol/uiweb';
import { EnvContext, Web3Context } from '../context';
import { usePushChatSocket } from '@pushprotocol/uiweb';
import { MessageInput } from '@pushprotocol/uiweb';

const ChatViewListTest = () => {
  const { account, pgpPrivateKey } = useContext<any>(Web3Context)
  const [chatId, setChatId] = useState<string>();
  const [limit, setLimit] = useState<number>();

  const { env } = useContext<any>(EnvContext);
  const updateChatId = (e: React.SyntheticEvent<HTMLElement>) => {
    setChatId((e.target as HTMLInputElement).value);
  };

  const updateLimit = (e: React.SyntheticEvent<HTMLElement>) => {
    setLimit(parseInt((e.target as HTMLInputElement).value));
  };
  usePushChatSocket();
  return (
    <div>
      <h2>Chat UI Test page</h2>
      <SectionItem style={{ marginTop: 20 }}>
          <label>chat id</label>
          <input
            type="text"
            onChange={updateChatId}
            value={chatId}
            style={{ width: 400, height: 30 }}
          />
        </SectionItem>
        <SectionItem style={{ marginTop: 20 }}>
          <label>limit</label>
          <input
            type="text"
            onChange={updateLimit}
            value={limit}
            style={{ width: 400, height: 30 }}
          />
        </SectionItem>
      {/* <Loader show={isLoading} /> */}

     {chatId && <ChatViewListCard    >
        <ChatViewList chatId={chatId} limit={limit} />

      </ChatViewListCard>}
      {/* <MessageInput chatId='196f58cbe07c7eb5716d939e0a3be1f15b22b2334d5179c601566600016860ac' isConnected={true} /> */}
    </div>
  );
};

export default ChatViewListTest;


const ChatViewListCard = styled(Section)`
height:40vh;

`;