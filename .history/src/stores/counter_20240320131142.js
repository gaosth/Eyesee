import axios from 'axios'

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

      if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body.getReader();
      let decoder = new TextDecoder();
      let resultData = '';

      while (true){
        const { done, value } = await reader.read();
        //console.log(done,value)
    if (done) break;
    //console.log("man!")
    resultData += decoder.decode(value);
    while (resultData.includes('\n')) {
      const messageIndex = resultData.indexOf('\n');
      const message = resultData.slice(0, messageIndex);
      resultData = resultData.slice(messageIndex + 1);
      // console.log(resultData)

      let len = resultData.split('\n').length
      if (message.startsWith('data: ')) {
        const jsonMessage = JSON.parse(message.substring(5));
        //console.log(len)
        //console.log(resultData)
        if (resultData.includes('[DONE]') && len == 4) {
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
