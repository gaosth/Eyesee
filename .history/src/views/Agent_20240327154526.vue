<template>
      <main class="w-screen h-screen bg-orange-100 relative">
          <!-- Right side content here -->
          <div 
            class="absolute top-6 right-0 w-full h-4/5 border-t-0 border-transparent bg-vert-light-gradient bg-transparent overflow-y-auto"
            ref="messageContainer"
          >
            <div
              class = "group flex flex-col py-3 mx-16 mt-2"
              v-for="(item, index) in showingList":key = "index"
            >
                  <div class = "flex justify-start" v-if="showingList[index].role === 'assistant'">
                    <div class="text-stone-500 text-2xl px-6 font-bold">ArtEyer</div>
                    <div>
                      <div class="text-black text-xl px-6 leading-relaxed rounded-lg bg-white mt-2 py-4 max-w-xl"
                      >
                        <div style="white-space: pre-wrap">{{showingList[index].content}}</div>
                        <div class = "flex justify-start py-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 fill-yellow-50">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                          </svg>
                          <div class="px-2 text-lg text-stone-500">猜你想问--------------------------------------------</div>
                        </div>
                        <div v-if="index == 0">
                          <div class = "text-lg text-stone-500 px-2">
                            1. 上传画作图片，并提供相关信息
                          </div>
                          <div class = "text-lg text-stone-500 px-2">
                            2. 询问画作特征和细节
                          </div>
                          <div class = "text-lg text-stone-500 px-2">
                            3. 查看具体分析内容和图表
                          </div>
                        </div>
                        <div v-if="index == 2">
                          <div class = "text-lg text-stone-500 px-2">
                            1. 了解画作的基本特征
                          </div>
                          <div class = "text-lg text-stone-500 px-2">
                            2. 分析物体的布局位置
                          </div>
                          <div class = "text-lg text-stone-500 px-2">
                            3. 比较物体的笔触
                          </div>
                        </div>
                        <div v-if="index == 4">
                          <div class = "text-lg text-stone-500 px-2">
                            1. 继续分析画作题材
                          </div>
                          <div class = "text-lg text-stone-500 px-2">
                            2. 进一步分析画作技法
                          </div>
                          <button class = "text-lg text-stone-500 px-2" @click.prevent = "sankeyClick()">
                            3. 查看画作基本特征
                          </button>
                        </div>
                      </div>

                      <div class = "px-6 leading-relaxed rounded-lg bg-white mt-2 py-4 max-w-xl h-1/2">
                        <Sankey/>
                      </div>
                    </div>
                  </div>

                  <div
                    v-if="showingList[index].role === 'user'"
                    class = "flex justify-start flex-row-reverse"
                  >
                  <div class="text-stone-500 text-2xl px-6 font-bold">User</div>
                  <div class = "flex flex-col">
                    <div v-if = "index == 1" class="px-6 leading-relaxed rounded-lg bg-yellow-50 mt-2 py-4 max-w-xl"
                      >
                      <img :src="case_Image1" alt=""/>
                    </div>
                    <div class="text-black text-xl px-6 leading-relaxed rounded-lg bg-white mt-2 py-4 max-w-xl"
                      >
                      <div style="white-space: pre-wrap">{{ showingList[index].content }}</div>
                    </div>
                  </div>
                </div>

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
import { ref,watch } from 'vue'
import case_Image1 from '@/assets/case1/case_清晰版_new.png'
import Sankey from '@/components/Sankey.vue'

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
        },
        {
          "role": "assistant",
          "content": "收到了这幅画作的图片。为了鉴定这幅作品是否属于马远，我们可以从以下几个方面来分析：\n\n1.检查画作的基本特征，包括题材、形制、材料、技法和设色；\n2.分析画面中的物体位置，看它们是否符合马远布局的习惯；\n3.观察画作中物体的笔触，与马远真迹的笔触进行比对。\n\n请问您希望从哪个方面入手?是想了解画作的基本特征、分析物体的布局位置，还是比较物体的笔触?您也可以提出具体的问题，如询问某个部分的细节。",
        },
        {
          "role": "user",
          "content": "这幅画的设色符合马远的习惯吗",
        },
        {
          "role": "assistant",
          "content": "根据统计结果，马远的作品中，设色偏好如下：\n\n ● 使用设色最多，有64次；\n ● 次之为淡彩和淡彩-螺青，各有30次；\n ● 水墨也较常见，有29次；\n ● 吴妆出现13次；\n ● 浅设色较少，仅4次；\n ● 重彩非常罕见，只有1次。\n\n待鉴定画作设色为“水墨”。根据数据，马远确实有使用水墨的习惯，因此这幅画在设色方面是符合马远的风格的。您可以在“画作基本特征”模块查看这幅画作的设色特征以及马远对设色的偏好。通过比对画作中的色彩使用与马远的传统设色方法，我们可以判断这幅画作的设色是否符合马远的风格。\n下一步可以继续分析其他方面，如题材、技法等，来进一步判断这幅画作是否为马远的真迹。"
        },
      ],
      showingList: [],
      content: '',
      chatnum: 0,
      case_Image1,
      sankeyshow: 0,
    }
  },

  components: {
        Sankey,
    },

  watch: {
      showingList: {
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
    submit(){
      this.showingList.push(this.messages[this.chatnum])
      this.chatnum = this.chatnum + 1
      this.content = ''
      console.log(this.chatnum)
    },
    sankeyClick(){
      if(this.sankeyshow == 0) this.sankeyshow = 1;
      else this.sankeyshow =0;
      console.log("show or not: ",this.sankeyshow)
    }
  }
}



</script>