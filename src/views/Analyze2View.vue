<template>
    <div class="flex flex-row min-h-screen">
       <div class="w-1/3 h-screen bg-orange-100">
        <button class="mx-10 my-10 bg-yellow-700 px-10 py-3 font-bold text-white rounded-3xl text-xl bg-opacity-75">
           <RouterLink :to="{'name': 'detail2'}">
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
                    <div class = "flex text-left mx-4 my-4 text-yellow-800">从图中观察，红色虚线框标识的位置位于一个颜色较深的区域，这表明在该位置上山石在郭熙的作品中出现的频率较高。因此，根据这张热力图，可以说图中山石的位置是符合郭熙的习惯的。</div>
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
                       <imgLink3 v-if="chosen == 2"/>
                       <imgLink4 v-if="chosen == 3"/>
                    </div>
                    <div class = "flex text-left mx-4 my-4 text-yellow-800">这个疑似郭熙作品的山峰切片，可以发现皴法中笔触的粗细、力度以及墨色的运用与李唐的风格有相似之处。笔触显得比较强劲和直接，皴纹之间的对比比较突出，这与李唐的风格相符。郭熙的作品中皴法通常比较含蓄，线条更加流畅，墨色层次更为细腻。</div>
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
                    <div class = "flex text-left mx-4 my-4 text-xl text-yellow-800 underline underline-offset-8">这幅画在题材、材质、技法、和形制上符合郭熙的常见风格，且山石位置符合其作品习惯，但设色和皴法的细节更接近李唐的风格。因此，虽然基本特征与郭熙相符，需深入分析笔触和墨色使用，以确认是否为郭熙真迹。</div>
              </div>
              <div class="absolute bottom-4 right-48 bg-yellow-700 px-10 py-2 font-bold text-white rounded-3xl text-xl bg-opacity-75" @click.prevent = "last()">上一个</div>
              <div class="absolute bottom-4 right-10 bg-yellow-700 px-10 py-2 font-bold text-white rounded-3xl text-xl bg-opacity-75" @click.prevent = "next()">下一个</div>
           </div>
       </div>
    </div>
</template>

<script>
import case_Image from '@/assets/case2/case2.png'
import bbox1 from '@/components/bbox/bbox2.json'
import { ref, onMounted } from 'vue'
import heatmap from '@/components/Heatmap.vue'
import heatmap2 from '@/components/Heatmap2.vue'
import heatmap3 from '@/components/case2/heatmap1.vue'
import heatmap4 from '@/components/case2/heatmap2.vue'
import heatmap5 from '@/components/Heatmap5.vue'
import heatmap6 from '@/components/Heatmap6.vue'
import heatmap7 from '@/components/Heatmap7.vue'
import heatmap8 from '@/components/Heatmap8.vue'
import imgLink1 from '@/components/case2/imgLink1.vue'
import imgLink2 from '@/components/case2/imgLink2.vue'
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