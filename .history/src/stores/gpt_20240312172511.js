import axios from 'axios'
const MSGlist = [
  {
            "role": "user",
            "content": "你好"
        },
]

export async function* getChatgpt_Multurn_qa(messages) {
        const apiKey = "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"
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "post",
        // signal: AbortSignal.timeout(8000),
        // 开启后到达设定时间会中断流式输出
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          stream: true,
          messages: messages,
        }),
      });
      
      console.log(response);

      if(!response.ok){
        console.log(messages);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body.getReader();
      let decoder = new TextDecoder();
      let resultData = '';

      while (true){
        const { done, value } = await reader.read();
    if (done) break;
    resultData += decoder.decode(value);
    while (resultData.includes('\n')) {
      const messageIndex = resultData.indexOf('\n');
      const message = resultData.slice(0, messageIndex);
      resultData = resultData.slice(messageIndex + 1);
      if (message.startsWith('data: ')) {
        const jsonMessage = JSON.parse(message.substring(5));
        if (resultData.includes('[DONE]')) {
          break
        }
        const createdID = jsonMessage.created
        yield {
          content: jsonMessage.choices[0]?.delta?.content || '',
          role: "assistant",
          id: createdID
        };
      }
    }
      }
  }