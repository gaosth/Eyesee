<template>
  <main>
    <RouterView />
  </main>
</template>

<script>
import axios from 'axios'
import { chat } from './stores/gpt';
import { ref } from 'vue';
let isTalking = ref(false);
let messageContent = ref("");
const messageList = ref([
    {
      role: "system",
      content: "你是 ChatGPT，OpenAI 训练的大型语言模型，尽可能简洁地回答。",
    },
    {
      role: "assistant",
      content: `你好，我是AI语言模型，我可以提供一些常用服务和信息，例如：

1. 翻译：我可以把中文翻译成英文，英文翻译成中文，还有其他一些语言翻译，比如法语、日语、西班牙语等。

2. 咨询服务：如果你有任何问题需要咨询，例如健康、法律、投资等方面，我可以尽可能为你提供帮助。

3. 闲聊：如果你感到寂寞或无聊，我们可以聊一些有趣的话题，以减轻你的压力。

请告诉我你需要哪方面的帮助，我会根据你的需求给你提供相应的信息和建议。`,
    },
    ]);

export default{
  name: 'chat',

  data() {
    return {
      content: '',
      messageList: [],
    }
  },

  setup() {
  },

  methods: {
    async sendChatMessage(content) {
      console.log('sendChatMessage')
      try {
        isTalking.value = true;
        if (messageList.value.length === 2) {
        messageList.value.pop();
        }
        messageList.value.push({ role: "user", content });
        clearMessageContent();
        messageList.value.push({ role: "assistant", content: "" });

        const { body, status } = await chat(messageList.value);
        console.log(body)
        console.log(status)
      } catch (error) {
        console.log(error)
      } finally {
        isTalking.value = false;
      }
    },
    
    clearMessageContent() {
      messageContent.value = "";
    },
  }

}
</script>