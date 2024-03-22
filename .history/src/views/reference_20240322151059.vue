<template>
    <div class="flex flex-row min-h-screen">
        <div class="w-1/3 bg-orange-50">
            <div class="border-r border-gray-100 flex flex-col py-10 px-14">
                <div class="menu-top mb-8 justify-center grid grid-cols-5 gap-4">
                  <div class="main-left col-span-3">
                    <div class="text-center text-2xl text-white rounded-2xl bg-stone-500 font-bold  py-5">ArtMagnifier</div>
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
                    <button class="px-4 text-left text-2xl text-stone-500 rounded-lg bg-orange-50 py-3 focus:bg-orange-100" v-on:click="case_num = 1">MaYuan</button>
                    <button class="px-4 text-left text-2xl text-stone-500 rounded-lg bg-orange-50 py-3 focus:bg-orange-100" v-on:click="case_num = 2">GuoXi</button>
                    <button class="px-4 text-left text-2xl text-stone-500 rounded-lg bg-orange-50 py-3 focus:bg-orange-100" v-on:click="case_num = 3">LiangKai</button>
                    <button class="px-4 text-left text-2xl text-stone-500 rounded-lg bg-orange-50 py-3 focus:bg-orange-100">chat4</button>
  
                    <h1 class="text-left text-yellow-900 opacity-25 text-xl font-bold">过去7天</h1>
                    <button class="px-4 text-left text-2xl text-stone-500 rounded-lg bg-orange-50 py-3 focus:bg-orange-100">chat1</button>
                    <button class="px-4 text-left text-2xl text-stone-500 rounded-lg bg-orange-50 py-3 focus:bg-orange-100">chat2</button>
                    <button class="px-4 text-left text-2xl text-stone-500 rounded-lg bg-orange-50 py-3 focus:bg-orange-100">chat3</button>
                    <button class="px-4 text-left text-2xl text-stone-500 rounded-lg bg-orange-50 py-3 focus:bg-orange-100">chat4</button>
                    <div v-if="apikey == ''" class="px-4 text-left text-2xl text-stone-500 rounded-lg bg-orange-50 mt-20 focus:bg-orange-100">
                      <div class = "shadow-[0_0_10px_rgba(0,0,0,0.10)] bg-white rounded-xl border-yellow-400 border-2 flex justify-start mt-20">
                          <textarea v-model="temp" rows="1" class="mx-4 my-4 resize-none focus:outline-none border-0 text-xl" placeholder="Enter your apikey"></textarea>
                          <button class="mx-3" @click.prevent="saveapi">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                          </button>
                      </div>
                    </div>
  
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
                <RouterLink :to="{'name': 'detail'}" v-if="case_num == 1">
                  <button class = "absolute mx-5 my-5 rounded-lg bg-white bg-opacity-40 text-black text-lg px-5 py-2 font-extrabold">查看详情</button>
                </RouterLink>
                <RouterLink :to="{'name': 'detail2'}" v-if="case_num == 2">
                  <button class = "absolute mx-5 my-5 rounded-lg bg-white bg-opacity-40 text-black text-lg px-5 py-2 font-extrabold">查看详情</button>
                </RouterLink>
                <RouterLink :to="{'name': 'detail3'}" v-if="case_num == 3">
                  <button class = "absolute mx-5 my-5 rounded-lg bg-white bg-opacity-40 text-black text-lg px-5 py-2 font-extrabold">查看详情</button>
                </RouterLink>

                <img :src="case_Image1" alt="" v-if="case_num == 1" class = "static" />
                <img :src="case_Image2" alt="" v-if="case_num == 2" class = "static" />
                <img :src="case_Image3" alt="" v-if="case_num == 3" class = "static" />
              </div>
              <div
                class = "group flex flex-col px-100 py-3 hover:bg-orange-50 rounded-lg mx-8"
                v-for="item in messages"
              >
                <div class="text-stone-500 text-2xl px-3 font-bold" v-if="item.role === 'user'">Me</div>
                <div class="text-stone-500 text-2xl px-3 font-bold" v-if="item.role === 'assistant'">Agent</div>
                <div class="text-stone-500 text-xl px-3 leading-relaxed prose"
                  v-if="item.content && item.role != 'system'"
                >{{item.content}}</div>
                <div v-if="!item.content && item.role != 'system'" class="text-stone-500 text-xl px-3 leading-relaxed prose font-bold">Now loading..</div>
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
  //import { getChatgpt_Multurn_qa } from '@/stores/gpt'
  import { getChatgpt_Multurn_qa } from '@/stores/counter'
  import case_Image1 from '@/assets/case1/case_清晰版_new.png'
  import case_Image2 from '@/assets/case2/case2.png'
  import case_Image3 from '@/assets/case3/case3.png'

  export default{
    name: 'chat',
    setup() {
    },

    data() {
      return {
        messages: [
          {
            "role": "system",
            "content": '我需要你扮演古画鉴定助手ArtEyer，带领用户分析画作的真伪。你的任务是根据用户的提问，知道用户使用系统的不同功能。系统一共有三个功能：功能1：判断画作基本特征是否符合画家习惯；功能2：判断画面中物体位置是否符合画家习惯；功能3：判断画面物体的笔触是否与画家真迹相似。由于3个功能相对应的，分别可以给出3种答复：答复1：请在“画作基本特征”模块查看待鉴定画作的特征和画家对不同基本特征的偏好。答复2：请选择你想查看的物体，并观察热力图，判断该物体位置是否符合画家习惯。答复3：请选择你想查看的物体，观察该物体与画家真迹中的同样物体笔触是否相似。请根据用户的提问判断应该使用哪个功能，并给出对应答复。注意根据用户的具体问题修改答复。例如：-	用户提问：我想知道这幅画中的山峰是不是马远的真迹。-	ArtEyer应回答：【功能3】请在图像中点击你想查看的山峰，观察这座山峰与马远真迹中的山峰是否相似。-	用户提问：这幅画的印章位置正确吗？-	ArtEyer应回答：【功能2】请在图像中点击印章，并观察热力图，判断该印章的位置是否在热力图中偏红色的区域。-	用户提问：梁楷会画重彩的山水画吗？-	ArtEyer应回答：【功能1】请在“画作基本特征”模块查看梁楷对主题和设色的偏好。 在每次的回答后，用一段话提示用户接下来可以问什么。 注意：1.	当用户提到“构图”相关问题时，应该回复【功能2】，因为构图是与物体位置有关的。2.	【功能1】中包括的基本特征只有“题材”“形制”“材质”“技法”“设色”这5项。3.	其中，“技法”指全图的技法，如果用户问到具体物体的技法，应回复【功能3】。 除了这个任务外，你还有一个初始任务：介绍自己的功能，并提示用户上传图片，提供相关信息，同时提升用户可以问哪些问题。现在，你明白你需要完成的任务了吗？如果明白的话，请你开始扮演ArtEyer，我将开始扮演用户。',
            }
        ],
        currentDialogId: '',
        list: [],
        content: '',
        chatnum: 1,
        case_Image1,
        case_Image2,
        case_Image3,
        case_num: 1,
        temp: '',
        apikey: '',
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
        for await (const result of getChatgpt_Multurn_qa(messages,this.apikey)) {
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
      },

      saveapi(){
        this.apikey = this.temp;
        console.log(this.apikey)
        this.temp = ''
      }
    }
  }
  
  

  </script>