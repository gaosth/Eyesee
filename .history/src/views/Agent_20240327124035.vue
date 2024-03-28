<template>
      <main class="w-1/1 h-screen bg-orange-100">
          <!-- Right side content here -->
          <div 
            class="absolute top-6 right-0 w-2/3 h-4/5 border-t-0 border-transparent bg-vert-light-gradient bg-transparent overflow-y-auto"
          >
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
        </main>
</template>

<script>
//vue组件部分代码  
import { ref } from 'vue'
import { getChatgpt_Multurn_qa } from '@/stores/gpt'

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
    }
  },

  methods: {
    async submit(){
      if(!this.content) return
      let chatnum = this.chatnum
      chatnum = chatnum + 1
      console.log("num in messages here: ",chatnum)
      let messages = this.messages
      messages.push({
        "role": "user",
            "content": this.content
      })
      this.content = ''
      let list = []
      const currentDialogId = ref(null)
      console.log(this.content)
      for await (const result of getChatgpt_Multurn_qa(messages,"")) {
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
      //console.log(list[0])
    }
    this.messages = messages
    this.content = ''
    this.chatnum = chatnum + 1
    console.log(this.messages)
    }
  }
}



</script>