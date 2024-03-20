<template>
    <div class="flex flex-row min-h-screen">
        <div class="w-3/4 h-screen bg-orange-50">
            <div class = "flex mx-10 mt-6 justify-start">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 .409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                </div>
                <div class="flex self-center text-3xl ml-2 font-semibold text-yellow-900 font-serif">
                    待鉴定画作
                </div>
            </div>
            <div class = "flex flex-col mx-10 my-6 w-1/1 h-1/2 border-yellow-800 rounded-2xl border-4 bg-orange-100">
                <div class = "mx-10 mt-10 mb-3 bg-transparent overflow-auto touch-auto">
                    <img :src="case_Image" alt="" class = "scale-100 hover:scale-150" />
                </div>
                <div class="flex justify-start">
                    <button class = "mx-10 mb-5 w-16 px-3 py-3 bg-stone-500 bg-opacity-20 rounded-xl">
                        <RouterLink :to="{'name': 'test'}">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                            </svg>
                        </RouterLink>
                    </button>
                    <button class = "mb-5 px-5 py-3 bg-stone-500 bg-opacity-20 rounded-xl">
                        <RouterLink :to="{'name': 'analyze'}">
                            <div class="text-xl font-bold">
                                查看详情
                            </div>
                        </RouterLink>
                    </button>
                </div>
            </div>
            <div class = "grid grid-cols-5 gap-6 mx-10 mt-6">
                <div class="col-span-2 ">
                    <div class="flex justify-start">
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                        </svg>
                        </div>

                        <div class="flex self-center text-3xl ml-2 font-semibold text-yellow-900 font-serif">
                            待鉴定信息
                        </div>
                    </div>


                    <div>
                       <div class = "flex flex-col my-6 w-1/1 h-60 border-yellow-800 rounded-2xl border-4 bg-orange-100 px-6 py-6">
                            <div>
                                <p class="underline underline-offset-8 text-xl text-yellow-900 mb-2">尚待鉴定的信息, to be defined</p>
                                <p class="underline underline-offset-8 text-xl text-yellow-900 mb-2">尚待鉴定的信息, to be defined</p>
                                <p class="underline underline-offset-8 text-xl text-yellow-900 mb-2">尚待鉴定的信息, to be defined</p>
                                <p class="underline underline-offset-8 text-xl text-yellow-900 mb-2">尚待鉴定的信息, to be defined</p>
                                <p class="underline underline-offset-8 text-xl text-yellow-900 mb-2">尚待鉴定的信息, to be defined</p>

                            </div>
                       </div>
                    </div>
                </div>

                

                <div class="col-span-3">
                    <div class="flex justify-start">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                            </svg>

                        </div>

                        <div class="flex self-center text-3xl ml-2 font-semibold text-yellow-900 font-serif">
                            画作基本特征
                        </div>
                    </div>

                    <div>
                        <div class = "flex flex-col my-6 w-1/1 h-60 border-yellow-800 rounded-2xl border-4 bg-orange-100 px-6 py-6">
                            <div class="flex flex-row gap-2">
                                <div class="basis-1/6 bg-yellow-600 text-white text-center rounded-full">材料</div>
                                <div class="basis-1/6 bg-yellow-600 text-white text-center rounded-full">形制</div>
                                <div class="basis-1/6 bg-yellow-600 text-white text-center rounded-full">题材</div>
                                <div class="basis-1/6 bg-yellow-600 text-white text-center rounded-full">技法</div>
                                <div class="basis-1/6 bg-yellow-600 text-white text-center rounded-full">设色</div>
                            </div>
                            <Sankey/>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <div class="w-1/4 h-screen bg-orange-100">
            <div class = "flex mx-10 mt-6 justify-start">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>                        
                </div>
                <div class="flex self-center text-3xl ml-2 font-semibold text-yellow-900 font-serif">
                    鉴定细节
                </div>
            </div>
            <div class = "mx-10 my-4 shadow-[0_0_10px_rgba(0,0,0,0.10)] bg-white rounded-xl border-yellow-800 border-2 flex justify-start">
                <textarea class="mx-4 my-4 resize-none focus:outline-none border-0 text-xl"></textarea>
                <button class="mx-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </div>
            <div class = "flex mx-10 my-2 h-1/1">
                <div class="grid grid-cols-2 gap-4 mx-10 overflow-auto touch-auto">
                    <div class="text-center px-3 py-10 bg-white bg-opacity-60 rounded-lg"><img :src="Men" alt="" class = "" /></div>
                    <div class="text-center px-3 py-10 bg-white bg-opacity-60 rounded-lg"><img :src="Seal" alt="" class = "" /></div>
                    <div class="text-center px-3 py-10 bg-white bg-opacity-60 rounded-lg"><img :src="Mt1" alt="" class = "" /></div>
                    <div class="text-center px-3 py-10 bg-white bg-opacity-60 rounded-lg"><img :src="Mt2" alt="" class = "" /></div>
                    <div class="text-center px-3 py-10 bg-white bg-opacity-60 rounded-lg"><img :src="Mt3" alt="" class = "" /></div>
                    <div class="text-center px-3 py-10 bg-white bg-opacity-60 rounded-lg"><img :src="Mt4" alt="" class = "" /></div>
                    <div class="text-center px-3 py-10 bg-white bg-opacity-60 rounded-lg"><img :src="Mt5" alt="" class = "" /></div>
                    <div class="text-center px-3 py-10 bg-white bg-opacity-60 rounded-lg"><img :src="Mt6" alt="" class = "" /></div>
                    <div class="text-center px-3 py-10 bg-white bg-opacity-60 rounded-lg"><img :src="Tr1" alt="" class = "" /></div>
                    <div class="text-center px-3 py-10 bg-white bg-opacity-60 rounded-lg"><img :src="Tr2" alt="" class = "" /></div>
                    <div class="text-center px-3 py-10 bg-white bg-opacity-60 rounded-lg"><img :src="Tr3" alt="" class = "" /></div>
                    <div class="text-center px-3 py-10 bg-white bg-opacity-60 rounded-lg"><img :src="Tr4" alt="" class = "" /></div>
                    <div class="text-center px-3 py-10 bg-white bg-opacity-60 rounded-lg"><img :src="House" alt="" class = "" /></div>
                    <div class="text-center px-3 py-10 bg-white bg-opacity-60 rounded-lg"><img :src="Tb" alt="" class = "" /></div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import case_Image from '@/assets/case1/case_清晰版_new.png'
import heatmap from '../components/Heatmap.vue'
import Sankey from '../components/Sankey.vue'
import Men from '@/assets/case1/人物.png'
import Seal from '@/assets/case1/印.png'
import Mt1 from '@/assets/case1/山1.png'
import Mt2 from '@/assets/case1/山2.png'
import Mt3 from '@/assets/case1/山3.png'
import Mt4 from '@/assets/case1/山4.png'
import Mt5 from '@/assets/case1/山5.png'
import Mt6 from '@/assets/case1/山6.png'
import Tr1 from '@/assets/case1/树1.png'
import Tr2 from '@/assets/case1/树2.png'
import Tr3 from '@/assets/case1/树3.png'
import Tr4 from '@/assets/case1/树4.png'
import House from '@/assets/case1/楼阁.png'
import Tb from '@/assets/case1/题跋.png'

export default{
    name: 'detail',

    components: {
        heatmap,
        Sankey,
    },

    data() {
      return {
        case_Image,
        Men,
        Seal,
        Mt1,
        Mt2,
        Mt3,
        Mt4,
        Mt5,
        Mt6,
        Tr1,
        Tr2,
        Tr3,
        Tr4,
        House,
        Tb
      }
    },
}
</script>