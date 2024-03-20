<template>
     <div class="flex flex-row min-h-screen">
        <div class="w-1/3 h-screen bg-orange-100">
         <button class="mx-10 my-10 bg-yellow-700 px-10 py-3 font-bold text-white rounded-3xl text-xl bg-opacity-75">
            <RouterLink :to="{'name': 'detail'}">
               返回
            </RouterLink>
         </button>
         <div class = "h-4/5 w-1/1 bg-transparent mx-10">
            <img :src="case_Image" alt="" class = "scale-100" />
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
               <div class = "grid grid-cols-2 gap-4 mx-10 h-1/2">
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
                     <div class="flex border-yellow-800 border-dashed rounded-2xl border-4 mr-4 mt-4 h-2/3">
                        <!-- Heatmap here -->
                     </div>
                     <div class = "flex text-center mx-4 my-4 text-lg text-yellow-800">这里是一些描述性的文字</div>
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
                     <div class="flex border-yellow-800 border-dashed rounded-2xl border-4 mr-4 mt-4 h-2/3">
                        <!-- relationship here -->
                     </div>
                     <div class = "flex text-center mx-4 my-4 text-lg text-yellow-800">这里是一些描述性的文字</div>
                  </div>
               </div>
               <div class = "h-2/5 mx-10 bg-white">
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
               <div class="absolute bottom-4 right-55 bg-yellow-700 px-10 py-2 font-bold text-white rounded-3xl text-xl bg-opacity-75">上一个</div>
               <div class="absolute bottom-4 right-10 bg-yellow-700 px-10 py-2 font-bold text-white rounded-3xl text-xl bg-opacity-75">上一个</div>
            </div>
        </div>
     </div>
</template>

<script>
import case_Image from '@/assets/case1/case_清晰版_new.png'
export default{
    name: 'AnalyzeView',

    components: {
    },

    data() {
      return {
        case_Image,
      }
    },
}
</script>