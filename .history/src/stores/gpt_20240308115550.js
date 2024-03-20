import axios from 'axios'
export default{
    async getResponse(messageList){
        console.log("Getting Response")
        
        const apiKey = "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"
        const result = await fetch("https://api.openai.com/v1/chat/completions", {
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
              messages: messageList,
            }),
          });
        return result;
    }
}