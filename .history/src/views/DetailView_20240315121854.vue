<template>
    <div class="flex flex-row min-h-screen">
        <div class="w-3/4 h-screen bg-orange-50">
            <div class = "flex mx-10 mt-6 justify-start">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 .409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                </div>
                <div class="mt-0.5 text-2xl ml-2 font-bold text-yellow-900">
                    待鉴定画作
                </div>
            </div>
            <div class = "flex mx-10 my-6 h-1/2 border-yellow-800 rounded-2xl border-4">
                <div class = "mx-10 my-10 bg-white overflow-auto touch-auto ">
                    <img :src="case_Image" alt="" class = "" />
                </div
            </div>
        </div>
        <div class="w-1/4 bg-orange-100"></div>
    </div>
</template>

<script>
import case_Image from '@/assets/case1/case_清晰版_new.png'
export default{
    name: 'detail',
    data() {
      return {
        case_Image,
      }
    },
}
</script>