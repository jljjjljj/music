import Chat, { Bubble, useMessages } from "@chatui/core";
import "@chatui/core/dist/index.css";
import axios from "axios";
import { useState } from "react";
const openapiKey = import.meta.env.VITE_OPENAI_API_KEY;
const initialMessages = [
  {
    type: "text",
    content: { text: `前面的区域，以后再来探索吧!` },
    user: { avatar: "/img/avatar.png" },
  },
  {
    type: "image",
    content: {
      picUrl: "/img/logo.png",
    },
  },
];

// 默认快捷短语，可选
const defaultQuickReplies = [
  {
    name: "联系人工服务",
    isNew: true,
    isHighlight: true,
  },
  {
    name: "打爆你的狗头",
    isNew: true,
  },
  //   {
  //     name: '短语2',
  //     isHighlight: true,
  //   },
  //   {
  //     name: '短语3',
  //   },
];

const ChatBot = () => {
  // 消息列表
  const { messages, appendMsg, setTyping } = useMessages(initialMessages);
  const [chatMessage, setChatMessage] = useState([]);

  // 发送回调
  function handleSend(type, val) {
    if (type === "text" && val.trim()) {
      // TODO: 发送请求
      appendMsg({
        type: "text",
        content: { text: val },
        position: "right",
      });
      axios
        .post(
          "https://api.openai.com/v1/chat/completions",
          {
            messages: [
              ...chatMessage,
              {
                content:
                  "请你现在请扮演原神里的派蒙并模仿她的说话风格,你很爱吃，喜欢给别人起绰号，你需要熟知原神里的人物设定和背景故事，我会向你发送消息，请直接以派蒙的语气回复我",
                role: "system",
              },
              {
                content: val,
                role: "user",
              },
            ],
            max_tokens: 200,
            n: 1,
            temperature: 0.5,
            //   stop: ['\n'],
            model: "gpt-3.5-turbo",
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${openapiKey}`,
            },
          }
        )
        .then((res) => {
          const response = res.data.choices[0].message.content.trim();
          const newMessages = [
            ...chatMessage,
            { content: val, role: "user" },
            { content: response, role: "system" },
          ];
          setChatMessage(newMessages);
          appendMsg({
            type: "text",
            content: { text: response },
            user: { avatar: "/img/avatar.png" },
          });
        })
        .catch((err) => console.log(err));

      setTyping(true);
    }
  }

  // 快捷短语回调，可根据 item 数据做出不同的操作，这里以发送文本消息为例
  function handleQuickReplyClick(item) {
    handleSend("text", item.name);
  }

  function renderMessageContent(msg) {
    const { type, content } = msg;
    // 根据消息类型来渲染
    switch (type) {
      case "text":
        return <Bubble content={content.text} />;
      case "image":
        return (
          <Bubble type="image">
            <img src={content.picUrl} alt="" />
          </Bubble>
        );
      default:
        return null;
    }
  }

  return (
    <div style={{ height: "100%", boxShadow: "3px 3px 30px 10px #26451a26" }}>
      <Chat
        navbar={{ title: "应急食品" }}
        messages={messages}
        renderMessageContent={renderMessageContent}
        quickReplies={defaultQuickReplies}
        onQuickReplyClick={handleQuickReplyClick}
        onSend={handleSend}
      />
    </div>
  );
};

export default ChatBot;

// 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
