import { ChatProfile } from '@pushprotocol/uiweb';
import { useState } from 'react';
import { SectionItem } from '../components/StyledComponents';

export const ChatProfileTest = () => {
  const [chatId, setChatId] = useState<string>();
  const [style, setStyle] = useState<string>();

  const updateChatId = (e: React.SyntheticEvent<HTMLElement>) => {
    setChatId((e.target as HTMLInputElement).value);
  };

  const updateStyle = (e: React.SyntheticEvent<HTMLElement>) => {
    setStyle((e.target as HTMLInputElement).value);
  };
  return (
    <div>
      <SectionItem style={{ marginTop: 20 }}>
        <label>chat id</label>
        <input
          type="text"
          onChange={updateChatId}
          value={chatId}
          style={{ width: 400, height: 30 }}
        />
      </SectionItem>
      {/* <SectionItem style={{ marginTop: 20 }}>
        <label>Style</label>
        <input
          type="text"
          placeholder="either Info | Preview"
          onChange={updateStyle}
          value={style}
          style={{ width: 400, height: 30 }}
        />
      </SectionItem> */}
     {chatId && <ChatProfile
        // chatId='0x455E5AA18469bC6ccEF49594645666C587A3a71B'
        chatId={chatId}
        // chatId='36baf37e441fdd94e23406c6c716fc4e91a93a9ee68e070cd5b054534dbe09a6'
        style="Info"
      />}
    </div>
  );
};
