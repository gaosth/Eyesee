<template>
  <div class="flex flex-row min-h-screen">
      <div class="w-1/3 bg-orange-50">
          <div class="border-r border-gray-100 flex flex-col py-10 px-14">
              <div class="menu-top mb-8 justify-center grid grid-cols-5 gap-4">
                <div class="main-left col-span-3">
                  <div class="text-center text-2xl text-white rounded-lg bg-stone-500  py-5">ArtMagnifier</div>
                </div>

                <div class="main-center col-span-1">
                </div>

                <button class="main-right col-span-1 flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </button>
              </div>

              <div class="menu-center flex flex-col mb-8 space-y-4 justify-center">
                  <h1 class="text-left text-yellow-900 opacity-25 text-xl font-bold">今天</h1>
                  <button class="px-4 text-left text-2xl text-stone-500 rounded-lg bg-orange-50 py-3 focus:bg-orange-100">chat1</button>
                  <button class="px-4 text-left text-2xl text-stone-500 rounded-lg bg-orange-50 py-3 focus:bg-orange-100">chat2</button>
                  <button class="px-4 text-left text-2xl text-stone-500 rounded-lg bg-orange-50 py-3 focus:bg-orange-100">chat3</button>
                  <button class="px-4 text-left text-2xl text-stone-500 rounded-lg bg-orange-50 py-3 focus:bg-orange-100">chat4</button>

                  <h1 class="text-left text-yellow-900 opacity-25 text-xl font-bold">过去7天</h1>
                  <button class="px-4 text-left text-2xl text-stone-500 rounded-lg bg-orange-50 py-3 focus:bg-orange-100">chat1</button>
                  <button class="px-4 text-left text-2xl text-stone-500 rounded-lg bg-orange-50 py-3 focus:bg-orange-100">chat2</button>
                  <button class="px-4 text-left text-2xl text-stone-500 rounded-lg bg-orange-50 py-3 focus:bg-orange-100">chat3</button>
                  <button class="px-4 text-left text-2xl text-stone-500 rounded-lg bg-orange-50 py-3 focus:bg-orange-100">chat4</button>

              </div>
          </div>
      </div>
      <div class="w-2/3 bg-orange-100">
          <!-- Right side content here -->
          <div class="absolute top-6 right-0 w-2/3 h-4/5 border-t-0 border-transparent bg-vert-light-gradient bg-red-200">

          </div>

          <div class = "absolute bottom-6 right-0 w-2/3 border-t-0 border-transparent bg-vert-light-gradient bg-transparent">
            <form v-on:submit.prevent="submitForm" class="stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6">
              <div class="relative flex h-full flex-1 md:flex-col">
                <div class="flex flex-col w-full py-6 flex-grow md:pl-4 relative border border-black/10 bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.10)]">
                  <textarea v-model="content" class="m-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-14 focus:ring-0 focus-visible:ring-0 focus:outline-none text-lg" placeholder="Ask me anything"></textarea>
                  <button @click="sendChatMessage(content)" class="absolute px-3 py-8 rounded-lg text-gray-500 bottom-1.5 right-1 hover:bg-gray-100 disabled:hover:bg-transparent">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
      </div>
  </div>
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