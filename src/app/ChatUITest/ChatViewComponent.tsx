import styled from 'styled-components';

import { Section, SectionItem } from '../components/StyledComponents';

import { ChatViewComponent } from '@pushprotocol/uiweb';
import { useState } from 'react';
import { Checkbox } from '../components/Checkbox';

const ChatViewComponentTest = () => {
  const [chatId, setChatId] = useState<string>();
  const [limit, setLimit] = useState<number>();
  const [emoji, setEmoji] = useState(false);
  const [file, setFile] = useState(false);
  const [gif, setGif] = useState(false);
  // const [isConnected, setIsConnected] = useState(false);
  const [messageInput, setMessageInput] = useState(false);
  const [chatProfile, setchatProfile] = useState(false);
  const [chatViewList, setChatViewList] = useState(false);
  const [chatFilterList, setChatFilterList] = useState<string>();


  const onChangeEmoji = () => {
    setEmoji(!emoji);
  };
  const onChangeGif = () => {
    setGif(!gif);
  };
  const onChangeFile = () => {
    setFile(!file);
  };
  const onChangeisConnected = () => {
    setIsConnected(!isConnected);
  };
   const onChangeMessageInput = () => {
    setMessageInput(!messageInput);
  };
   const onChangeChatProfile = () => {
    setchatProfile(!chatProfile);
  };
  const onChangeChatViewList= () => {
    setChatViewList(!chatViewList);
  };
  const onChangeChatFilterList= () => {
    setChatFilterList(chatFilterList);
  };
  const updateChatId = (e: React.SyntheticEvent<HTMLElement>) => {
    setChatId((e.target as HTMLInputElement).value);
  };

  const updateLimit = (e: React.SyntheticEvent<HTMLElement>) => {
    setLimit(parseInt((e.target as HTMLInputElement).value));
  };
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
      <Checkbox
          id="emoji"
          label="Emoji"
          value={emoji}
          onChange={onChangeEmoji}
        />
         <Checkbox
          id="gif"
          label="gif"
          value={gif}
          onChange={onChangeGif}
        />
         <Checkbox
          id="file"
          label="file"
          value={file}
          onChange={onChangeFile}
        />
         {/* <Checkbox
          id="isConnected"
          label="isConnected"
          value={isConnected}
          onChange={onChangeisConnected}
        /> */}
         <Checkbox
          id="messageInput"
          label="messageInput"
          value={messageInput}
          onChange={onChangeMessageInput}
        />
         <Checkbox
          id="chatProfile"
          label="chatProfile"
          value={chatProfile}
          onChange={onChangeChatProfile}
        />
         <Checkbox
          id="chatViewList"
          label="chatViewList"
          value={chatViewList}
          onChange={onChangeChatViewList}
        />
          <SectionItem style={{ marginTop: 20 }}>
        <label>chatFilterList</label>
        <input
          type="text"
          placeholder='comma separated cid fo messages'
          onChange={onChangeChatFilterList}
          value={chatFilterList}
          style={{ width: 400, height: 30 }}
        />
      </SectionItem>
      {/* <Loader show={isLoading} /> */}
      {chatId && limit && (
        <ChatViewComponentCard>
          <ChatViewComponent
            onClick={() => console.log('BOIIII RETURNNNSSSSS')}
            chatId={chatId}
            limit={limit}
            chatFilterList={chatFilterList ? chatFilterList.split(',') : []}
            emoji={emoji}
            gif={gif}
            file={file}
            // isConnected={isConnected}
            messageInput={messageInput}
            chatProfile={chatProfile}
            chatViewList={chatViewList}
          />
        </ChatViewComponentCard>
      )}
    </div>
  );
};

export default ChatViewComponentTest;

const ChatViewComponentCard = styled(Section)`
  height: 60vh;
`;
//c2d544ad9d1efd5c5a593b143bf8232875c926cf28015564e70ad078b95f807e
