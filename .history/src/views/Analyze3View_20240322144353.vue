<template>
    <div class="flex flex-row min-h-screen">
       <div class="w-1/3 h-screen bg-orange-100">
        <button class="mx-10 my-10 bg-yellow-700 px-10 py-3 font-bold text-white rounded-3xl text-xl bg-opacity-75">
           <RouterLink :to="{'name': 'detail3'}">
              返回
           </RouterLink>
        </button>
        <div class = "h-4/5 w-1/1 bg-transparent mx-10 relative">
           <img :src="case_Image" alt="" class = "scale-100 absolute" ref="urlInfo" @load="urlInfo"/>
           <button v-for="(area, index) in bbox1" :key="index"
           class="absolute border-4 border-dashed border-white border-opacity-50"
           :style="{
              left: ((area.bbox[0]-area.bbox[2]/2) * imgwidth) + 'px', 
              top: ((area.bbox[1]-area.bbox[3]/2) * imgheight) + 'px', 
              width: (area.bbox[2] * imgwidth) + 'px', 
              height: (area.bbox[3] * imgheight) + 'px',
              }"
           v-on:click="this.chosen = index"
           >
              <div v-if="this.chosen == index" class = "w-full h-full bg-white bg-opacity-25"></div>
              <p v-if="this.chosen == index" class="absolute -top-8 whitespace-nowrap text-lg text-white">{{ area.object[0] }}</p>
           </button>
        </div>
       </div>

       <div class="w-2/3 h-screen bg-orange-100">
        <div class = "flex mx-10 mt-10 justify-start">
               <div>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                   </svg>                        
               </div>
               <div class="flex self-center text-3xl ml-2 font-semibold text-yellow-900 font-serif">
                   鉴定细节分析
               </div>
           </div>

           <div class = "flex flex-col mx-10 my-6 w-1/1 h-4/5 border-yellow-800 rounded-2xl border-4 bg-orange-50 relative">
              <div class = "grid grid-cols-2 gap-4 mx-10 h-2/3">
                 <div class = "px-4 py-10 h-1/1">
                    <div class = "flex justify-start">
                       <div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                          </svg>                        
                       </div>
                       <div class="flex self-center text-3xl ml-2 font-semibold text-yellow-900 font-serif">
                          分析结论
                       </div>
                    </div>
                    <div class="flex justify-center border-yellow-800 border-dashed rounded-2xl border-4 mr-4 mt-4 h-60 py-2">
                       <div class = "w-2/3 h-1/1 relative" ref="getInfo">
                          <heatmap v-if="bbox1[chosen].object[0] == '印章'"/>
                          <heatmap2 v-if="bbox1[chosen].object[0] == '人物'"/>
                          <heatmap3 v-if="bbox1[chosen].object[0] == '山石'"/>
                          <heatmap4 v-if="bbox1[chosen].object[0] == '树木'"/>
                          <heatmap5 v-if="bbox1[chosen].object[0] == '楼阁'"/>
                          <heatmap6 v-if="bbox1[chosen].object[0] == '走兽'"/>
                          <heatmap7 v-if="bbox1[chosen].object[0] == '花'"/>
                          <heatmap8 v-if="bbox1[chosen].object[0] == '题跋'"/>
                          <div class = "absolute border-4 border-dashed border-red-900 border-opacity-50"
                          :style="{
                                left: ((bbox1[chosen].bbox[0]-bbox1[chosen].bbox[2]/2) * 204) + 'px', 
                                top: ((bbox1[chosen].bbox[1]-bbox1[chosen].bbox[3]/2) * 200) + 'px', 
                                width: (bbox1[chosen].bbox[2] * 204) + 'px', 
                                height: (bbox1[chosen].bbox[3] * 200) + 'px',
                                }"
                          >
                          </div>
                       </div>
                    </div>
                    <div class = "flex text-left mx-4 my-4 text-yellow-800">根据热力图的分析，待鉴定画作中印章的位置并不在梁楷作品中印章出现频率较高的区域。这一点可能表明画作与梁楷的典型印章放置习惯不吻合，从而使这件作品更有可能是伪造的。</div>
                 </div>
                 <div class = "px-4 py-10 h-1/1">
                    <div class = "flex justify-start">
                       <div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                          </svg>                        
                       </div>
                       <div class="flex self-center text-3xl ml-2 font-semibold text-yellow-900 font-serif">
                          分析结论
                       </div>
                    </div>
                    <div class="flex border-yellow-800 border-dashed rounded-2xl border-4 mr-4 mt-4 h-60">
                       <!-- relationship here -->
                       <imgLink1 v-if="chosen == 0"/>
                       <imgLink2 v-if="chosen == 1"/>
                    </div>
                    <div class = "flex text-center mx-4 my-4 text-yellow-800">这里是一些描述性的文字</div>
                 </div>
              </div>
              <div class = "h-1/5 mx-10">
                 <div class = " px-4 flex justify-start">
                       <div>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                          </svg>                        
                       </div>
                       <div class="flex self-center text-3xl ml-2 font-semibold text-yellow-900 font-serif">
                          分析结论
                       </div>
                    </div>
                    <div class = "flex text-center mx-4 my-4 text-xl text-yellow-800 underline underline-offset-8">这里是一些描述性的文字</div>
              </div>
              <div class="absolute bottom-4 right-48 bg-yellow-700 px-10 py-2 font-bold text-white rounded-3xl text-xl bg-opacity-75" @click.prevent = "last()">上一个</div>
              <div class="absolute bottom-4 right-10 bg-yellow-700 px-10 py-2 font-bold text-white rounded-3xl text-xl bg-opacity-75" @click.prevent = "next()">下一个</div>
           </div>
       </div>
    </div>
</template>

<script>
import case_Image from '@/assets/case3/case3.png'
import bbox1 from '@/components/bbox/bbox3.json'
import { ref, onMounted } from 'vue'
import heatmap from '@/components/case3/heatmap3.vue'
import heatmap2 from '@/components/Heatmap2.vue'
import heatmap3 from '@/components/case3/heatmap1.vue'
import heatmap4 from '@/components/case3/heatmap2.vue'
import heatmap5 from '@/components/Heatmap5.vue'
import heatmap6 from '@/components/Heatmap6.vue'
import heatmap7 from '@/components/Heatmap7.vue'
import heatmap8 from '@/components/case3/heatmap4.vue'
import imgLink1 from '@/components/case3/imgLink1.vue'
import imgLink2 from '@/components/case3/imgLink2.vue'
import imgLink3 from '@/components/case2/imgLink3.vue'
import imgLink4 from '@/components/case2/imgLink4.vue'

export default{
   name: 'Analyze2View',

   setup() {
     const getInfo = ref(null)
     onMounted(() => {
        const width = getInfo.value.offsetWidth;
        console.log('宽度：',width)
     }
     );
     return {
        getInfo
     };
   },

   components: {
     heatmap,
     heatmap2,
     heatmap3,
     heatmap4,
     heatmap5,
     heatmap6,
     heatmap7,
     heatmap8,
     imgLink1,
     imgLink2,
     imgLink3,
     imgLink4,
   },

   data() {
     let chosen = 0
     console.log(bbox1.length)
     let imgwidth = 10
     let imgheight = 10
     let hm_width = 10
     let hm_height = 10
     return {
       case_Image,
       bbox1,
       chosen,
       imgwidth,
       imgheight,
       hm_width,
       hm_height
     }
   },

   methods: {
     async next(){
        console.log("This is the number before: ",this.chosen)
        console.log("This is the length of total: ",this.bbox1.length)
        this.chosen = (this.chosen + 1)%this.bbox1.length
        console.log("This is the number after: ",this.chosen)
     },
     async last(){
        console.log("This is the number before: ",this.chosen)
        console.log("This is the length of total: ",this.bbox1.length)
        this.chosen = (this.chosen + this.bbox1.length - 1)%this.bbox1.length
        console.log("This is the number after: ",this.chosen)
        console.log(this.bbox1[this.chosen].object[0])
     },
     urlInfo(e) {
        console.log(e.target.width);
        console.log(e.target.height);
        this.imgwidth = e.target.width;
        this.imgheight = e.target.height;
     },
   },
}
</script>