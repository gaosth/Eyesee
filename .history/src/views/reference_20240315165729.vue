<template>
    <div class="flex flex-row min-h-screen">
        <div class="w-1/3 bg-orange-50">
            <div class="border-r border-gray-100 flex flex-col py-10 px-14">
                <div class="menu-top mb-8 justify-center grid grid-cols-5 gap-4">
                  <div class="main-left col-span-3">
                    <div class="text-center text-2xl text-white rounded-2xl bg-stone-500  py-5">ArtMagnifier</div>
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
            <div 
              class="absolute top-6 right-0 w-2/3 h-4/5 border-t-0 border-transparent bg-vert-light-gradient bg-transparent overflow-y-auto"
              ref="messageContainer"
            >

              <div class="group flex flex-col px-10 py-10 hover:bg-orange-50 rounded-lg ml-8 mr-60">
                <RouterLink :to="{'name': 'detail'}">
                  <button class = "absolute mx-5 my-5 rounded-lg bg-white bg-opacity-40 text-black text-lg px-5 py-2 font-extrabold">查看详情</button>
                </RouterLink>
                <img :src="case_Image" alt="" class = "static" />
              </div>
              <div
                class = "group flex flex-col px-100 py-3 hover:bg-orange-50 rounded-lg mx-8"
                v-for="item in messages"
              >
                <div class="text-stone-500 text-2xl px-3 font-bold" v-if="item.role === 'user'">Me</div>
                <div class="text-stone-500 text-2xl px-3 font-bold" v-if="item.role === 'assistant'">Agent</div>
                <div class="text-stone-500 text-xl px-3 leading-relaxed prose"
                  v-if="item.content"
                >{{item.content}}</div>
                <div v-else class="text-stone-500 text-xl px-3 leading-relaxed prose font-bold">Now loading..</div>
              </div>
            </div>
  
            <div class = "absolute bottom-6 right-0 w-2/3 border-t-0 border-transparent bg-vert-light-gradient bg-transparent">
              <form class="stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6">
                <div class="relative flex h-full flex-1 md:flex-col">
                  <div class="flex flex-col w-full py-6 flex-grow md:pl-4 relative border border-black/10 bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.10)]">
                    <textarea 
                      v-model="content"
                      class="m-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-14 focus:ring-0 focus-visible:ring-0 focus:outline-none text-lg" placeholder="Ask me anything">
                    </textarea>
                    <button 
                      @click.prevent = "submit()"
                      class="absolute px-3 py-8 rounded-lg text-gray-500 bottom-1.5 right-1 hover:bg-gray-100 disabled:hover:bg-transparent">
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
  //vue组件部分代码  
  import { ref, watch } from 'vue'
  import { getChatgpt_Multurn_qa } from '@/stores/gpt'
  import case_Image from '@/assets/case1/case_清晰版_new.png'

  export default{
    name: 'chat',
    setup() {
    },

    data() {
      return {
        messages: [],
        currentDialogId: '',
        list: [],
        content: '',
        chatnum: 0,
        case_Image,
      }
    },

    watch: {
      messages: {
        handler(newVal, oldName) {
        /**
         * 页面更新完毕后再将页面滚动到底部
         */
        this.$nextTick(() => {
          this.$refs.messageContainer.scrollTop =
          this.$refs.messageContainer.scrollHeight;
        });
        },
        deep: true,
        immediate: true,
      },
    },

    methods: {
      async submit(){
        let chatnum = this.chatnum
        chatnum = chatnum + 1
        console.log("这是第几轮对话",chatnum)
        let messages = this.messages
        messages.push({
          "role": "user",
              "content": this.content
        })
        this.content = ''
        let list = []
        const currentDialogId = ref(null)
        console.log(this.content)
        for await (const result of getChatgpt_Multurn_qa(messages)) {
        // 如果返回的结果 ID 与当前对话 ID 相同，则将聊天机器人的回复拼接到当前对话中
        // console.log(list)
        if (result.id === currentDialogId.value) {
          const index = list.findIndex(item => item.id === currentDialogId.value)
          const dialog = list[index]
          dialog.content = dialog.content + result.content
          messages[chatnum].content = dialog.content
          // console.log(dialog.content)
        } else {
          currentDialogId.value = result.id
          list.push({
            content: result.content,
            role: "assistant",
            id: result.id,
            timestamp: Date.now()
          })
          messages.push({
            role: "assistant",
            content: result.content
          })
        }
        console.log(list[0])
      }
      this.messages = messages
      this.content = ''
      this.chatnum = chatnum + 1
      console.log(this.messages)
      }
    }
  }
  
  

  </script>