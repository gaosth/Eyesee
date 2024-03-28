<template>
      <main class="w-screen h-screen bg-orange-100 relative">
          <!-- Right side content here -->
          <div 
            class="absolute top-6 right-0 w-full h-3/5 border-t-0 border-transparent bg-vert-light-gradient bg-transparent overflow-y-auto"
          >
            <div
              class = "group flex flex-col py-3 bg-white rounded-lg mx-16 mt-8"
              v-for="(item, index) in showingList":key = "index"
            >
                  <div class="text-stone-500 text-2xl px-6 font-bold" v-if="messages[index].role === 'user'">User</div>
                  <div class="text-stone-500 text-2xl px-6 font-bold" v-if="messages[index].role === 'assistant'">ArtEyer</div>
                  <div class="text-stone-500 text-xl px-6 leading-relaxed prose"
                    v-if="messages[index].content"
                  >{{messages[index].content}}</div>
                  <div v-else class="text-stone-500 text-xl px-3 leading-relaxed prose font-bold">Now loading..</div>
            </div>
          </div>

          <div class = "absolute bottom-6 w-full border-t-0 border-transparent bg-vert-light-gradient bg-transparent">
            <form class="stretch mx-40 flex flex-row gap-3 pt-2">
              <div class="relative flex h-full flex-1 md:flex-col">
                <div class="flex flex-col w-full py-6 flex-grow md:pl-4 relative border border-black/10 bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.10)]">
                  <textarea 
                    v-model="content"
                    class="m-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-14 focus:ring-0 focus-visible:ring-0 focus:outline-none text-xl" placeholder="Ask me anything">
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

export default{
  name: 'chat',
  setup() {
  },

  data() {
    return {
      messages: [
        {
          "role": "assistant",
          "content": "您好，我是ArtEyer，一个AI古画鉴定助手。我可以帮助您分析画作的真伪。请您上传画作图片，并提供相关信息，如画家名称和您关注的画作细节。您可以问关于画作题材、形制、材质、技法、设色的问题，也可以询问画面中特定物体的位置或笔触细节。现在，我准备好了，您有什么问题吗？",
        },
        {
          "role": "user",
          "content": "这幅画是我在古玩市场上买到的，据说是马远的作品，帮我鉴定一下是否属实。",
        }
      ],
      showingList: [],
      content: '',
      chatnum: 0,
    }
  },

  methods: {
    submit(){
      this.showingList.push(this.messages[this.chatnum])
      this.chatnum = this.chatnum + 1
      this.content = ''
      console.log(this.chatnum)
    }
  }
}



</script>