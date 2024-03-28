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
                    <div class="flex flex-col">
                      <div class = "px-6 flex flex-col rounded-lg bg-yellow-50 mt-2 py-4 max-w-xl h-80"
                        v-if="index == 6"
                      >
                        <div class="flex justify-start mb-2">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg> 
                            </div>

                            <div class="flex self-center text-2xl ml-2 font-semibold text-yellow-900 font-serif">
                                物体布局
                            </div>

                            <button class = "ml-52 rounded-lg bg-stone-500 bg-opacity-20  px-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                              </svg>
                            </button>
                            <button class = "ml-4 rounded-lg bg-stone-500 bg-opacity-20  px-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
                              </svg>
                            </button>
                        </div>
                        <div class = "mx-28 w-2/5 h-4/5 relative" ref="getInfo">
                            <Heatmap/>
                            <div class = "absolute border-4 border-dashed border-red-900 border-opacity-50"
                            :style="{
                                  left: ((bbox1[1].bbox[0]-bbox1[1].bbox[2]/2) * 211) + 'px', 
                                  top: ((bbox1[1].bbox[1]-bbox1[1].bbox[3]/2) * 230) + 'px', 
                                  width: (bbox1[1].bbox[2] * 211) + 'px', 
                                  height: (bbox1[1].bbox[3] * 230) + 'px',
                                  }"
                            >
                            </div>
                          </div>
                      </div>

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
                        <div v-if="index == 6">
                          <div class = "text-lg text-stone-500 px-2">
                            1. 分析画作笔触细节
                          </div>
                          <div class = "text-lg text-stone-500 px-2">
                            2. 分析画作的色彩以及艺术风格
                          </div>
                          <div class = "text-lg text-stone-500 px-2">
                            3. 查看物体布局热力图详情
                          </div>
                        </div>
                        <div v-if="index == 8">
                          <button class = "text-lg text-stone-500 px-2" @click.prevent = "hmClick()">
                            查看“物体布局”模块
                          </button>
                        </div>
                        <div v-if="index == 10">
                          <button class = "text-lg text-stone-500 px-2" @click.prevent = "partClick()">
                            选择需要分析的部分
                          </button>
                        </div>
                        <div v-if="index == 11">
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
                        <div v-if="index == 13">
                          <button class = "text-lg text-stone-500 px-2" @click.prevent = "detailClick()">
                            笔触细节
                          </button>
                        </div>
                      </div>

                      <div class = "px-6 flex flex-col rounded-lg bg-yellow-50 mt-2 py-4 max-w-xl h-80"
                        v-if="index == 4 && sankeyshow == 1"
                      >
                      <div class="flex justify-start mb-2">
                          <div>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                              </svg>

                          </div>

                          <div class="flex self-center text-2xl ml-2 font-semibold text-yellow-900 font-serif">
                              画作基本特征
                          </div>

                          <button class = "ml-52 rounded-lg bg-stone-500 bg-opacity-20  px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                          </button>
                          <button class = "ml-4 rounded-lg bg-stone-500 bg-opacity-20  px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
                            </svg>
                          </button>
                      </div>

                        <div class="flex flex-row gap-2 mt-2">
                                <div class="basis-1/6 bg-yellow-600 text-white text-center rounded-full">材料</div>
                                <div class="basis-1/6 bg-yellow-600 text-white text-center rounded-full">形制</div>
                                <div class="basis-1/6 bg-yellow-600 text-white text-center rounded-full">题材</div>
                                <div class="basis-1/6 bg-yellow-600 text-white text-center rounded-full">技法</div>
                                <div class="basis-1/6 bg-yellow-600 text-white text-center rounded-full">设色</div>
                        </div>
                        <Sankey/>
                        <div class="flex flex-row gap-2 mb-4">
                                <div class="basis-1/6 bg-yellow-600 bg-opacity-50 text-white text-center rounded-full">绢本</div>
                                <div class="basis-1/6 bg-yellow-600 bg-opacity-50 text-white text-center rounded-full">立轴</div>
                                <div class="basis-1/6 bg-yellow-600 bg-opacity-50 text-white text-center rounded-full">山水</div>
                                <div class="basis-1/6 bg-yellow-600 bg-opacity-50 text-white text-center rounded-full">兼工带写</div>
                                <div class="basis-1/6 bg-yellow-600 bg-opacity-50 text-white text-center rounded-full">淡彩</div>
                        </div>
                      </div>

                      <div class = "px-6 flex flex-col rounded-lg bg-yellow-50 mt-2 py-4 max-w-xl h-80"
                        v-if="index == 8 && hmshow == 1"
                      >
                        <div class="flex justify-start mb-2">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg> 
                            </div>

                            <div class="flex self-center text-2xl ml-2 font-semibold text-yellow-900 font-serif">
                                物体布局
                            </div>

                            <button class = "ml-52 rounded-lg bg-stone-500 bg-opacity-20  px-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                              </svg>
                            </button>
                            <button class = "ml-4 rounded-lg bg-stone-500 bg-opacity-20  px-2">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
                              </svg>
                            </button>
                        </div>
                        <div class = "flex justify-start w-full h-full">
                          <div class = "mx-4 w-2/5 h-4/5 relative" ref="getInfo">
                            <heatmap/>
                            <button v-for="(area, index) in bbox0" :key="index"
                              class="absolute border-2 border-dashed border-red-500"
                              :style="{
                                  left: ((area.bbox[0]-area.bbox[2]/2) * 211) + 'px', 
                                  top: ((area.bbox[1]-area.bbox[3]/2) * 230) + 'px', 
                                  width: (area.bbox[2] * 211) + 'px', 
                                  height: (area.bbox[3] * 230) + 'px',
                                  }"
                              v-on:click="chosen = index"
                              >
                              <div v-if="chosen == index" class = "w-full h-full bg-red-900 bg-opacity-25"></div>
                            </button>
                          </div>

                          <button class = "bg-stone-500 bg-opacity-20 h-1/3 my-16 rounded-full mx-2" @click.prevent = "last()">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                          </button>

                          <div class = "bg-transparent h-4/5 overflow-auto touch-auto">
                              <img :src="img1" alt="" v-if="chosen == 0" class = "scale-150"/>
                              <img :src="img2" alt="" v-if="chosen == 1" class = "scale-100" />
                              <img :src="img3" alt="" v-if="chosen == 2" class = "scale-100" />
                              <img :src="img4" alt="" v-if="chosen == 3" class = "scale-100" />
                              <img :src="img5" alt="" v-if="chosen == 4" class = "scale-100" />
                              <img :src="img6" alt="" v-if="chosen == 5" class = "scale-100" />

                          </div>

                          <button class = "bg-stone-500 bg-opacity-20 h-1/3 my-16 rounded-full mx-2" @click.prevent = "next()">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                          </button>
                        </div>

                      </div>

                      <div class = "px-6 flex flex-col rounded-lg bg-yellow-50 mt-2 py-4 max-w-xl"
                        v-if="index == 10 && partshow == 1"
                      >
                        <div class = "bg-transparent relative">
                          <img :src="case_Image1" alt="" class = "scale-100"/>
                          <button v-for="(area, index) in bbox1" :key="index"
                          class="absolute border-4 border-dashed border-white border-opacity-50"
                          :style="{
                              left: ((area.bbox[0]-area.bbox[2]/2) * 528) + 'px', 
                              top: ((area.bbox[1]-area.bbox[3]/2) * 1060) + 'px', 
                              width: (area.bbox[2] * 528) + 'px', 
                              height: (area.bbox[3] * 1060) + 'px',
                              }"
                          v-on:click="this.chosen1 = index"
                          @click.prevent="moreinfo()"
                          >
                              <div v-if="this.chosen1 == index" class = "w-full h-full bg-white bg-opacity-25"></div>
                              <p v-if="this.chosen1 == index" class="absolute -top-8 whitespace-nowrap text-lg text-white">{{ area.object[0] }}</p>
                          </button>
                        </div>
                      </div>

                      <div class = "px-6 flex flex-col rounded-lg bg-yellow-50 mt-2 py-4 max-w-xl"
                        v-if="index == 13 && detailshow == 1"
                      >
                      <div class="flex justify-start mb-2">
                          <div>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                              </svg>

                          </div>

                          <div class="flex self-center text-2xl ml-2 font-semibold text-yellow-900 font-serif">
                              笔触细节
                          </div>

                          <button class = "ml-52 rounded-lg bg-stone-500 bg-opacity-20  px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                          </button>
                          <button class = "ml-4 rounded-lg bg-stone-500 bg-opacity-20  px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3" />
                            </svg>
                          </button>
                      </div>

                      <div class = "flex justify-start w-full h-full">
                          <div class = "mx-4 w-2/5 h-4/5">
                            <img :src="mt1" alt="" class = "scale-150"/>
                          </div>

                          <button class = "bg-stone-500 bg-opacity-20 h-1/3 my-16 rounded-full mx-2" @click.prevent = "last()">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                          </button>

                          <div class = "bg-transparent w-2/5 h-4/5 overflow-auto touch-auto">
                              <img :src="mt1_n1" alt="" v-if="chosen == 0" class = "scale-100"/>
                              <img :src="mt1_n2" alt="" v-if="chosen == 1" class = "scale-100" />
                              <img :src="mt1_n3" alt="" v-if="chosen == 2" class = "scale-100" />
                              <img :src="mt1_n4" alt="" v-if="chosen == 3" class = "scale-100" />
                              <img :src="mt1_n5" alt="" v-if="chosen == 4" class = "scale-100" />
                              <img :src="mt1_n6" alt="" v-if="chosen == 5" class = "scale-100" />
                          </div>

                          <button class = "bg-stone-500 bg-opacity-20 h-1/3 my-16 rounded-full mx-2" @click.prevent = "next()">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                          </button>

                        </div>

                      <div class = "flex justify-start">
                        <div class = "rounded-full px-3 py-2 bg-stone-500 text-white text-xl my-4">待鉴定山峰-卷云皱</div>
                      </div>
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
import Heatmap from '@/components/Heatmap.vue'
import heatmap from '@/components/case1/Heatmap.vue'
import bbox1 from '@/components/bbox/bbox1.json'
import bbox0 from '@/components/bbox/bbox0.json'
import img1 from '@/assets/case0/1.png'
import img2 from '@/assets/case0/2.png'
import img3 from '@/assets/case0/3.png'
import img4 from '@/assets/case0/4.png'
import img5 from '@/assets/case0/5.png'
import img6 from '@/assets/case0/6.png'

  import mt1 from '@/assets/case1/mountain1/01.png'
  import mt1_n1 from '@/assets/case1/mountain1/李成1.png'
  import mt1_n2 from '@/assets/case1/mountain1/李成2.png'
  import mt1_n3 from '@/assets/case1/mountain1/李成3.png'
  import mt1_n4 from '@/assets/case1/mountain1/李成4.png'
  import mt1_n5 from '@/assets/case1/mountain1/马远1.png'
  import mt1_n6 from '@/assets/case1/mountain1/马远2.png'
  import mt1_n7 from '@/assets/case1/mountain1/马远3.png'
  import mt1_n8 from '@/assets/case1/mountain1/马远4.png'


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
        {
          "role": "user",
          "content": "这幅画中印章的位置符合马远真迹的习惯吗？",
        },
        {
          "role": "assistant",
          "content": "可以用热力图来分析印章位置是否符合马远习惯。热力图上深色区域表示印章在马远作品中出现的频次较高，而浅色区域频次较低。其中方框标出了待鉴定画作上的印章位置。\n比较方框位置和热点区域，可以发现方框所在的位置并不处于任何一个主要的热点区域内，而是位于一个相对“冷”或者说是印章出现频率较低的区域，这可能表明印章的位置与马远常用的位置不符。然而，这样的分析并不能完全排除这是一幅真迹的可能性，因为艺术家有时也会在不同的作品上尝试新的布局。但若从印章位置的角度来看，这幅画作更可能是伪作而非真迹。\n然而，鉴定一件艺术作品的真伪通常需要综合多方面的证据，包括印章、笔触、画纸、色彩以及艺术风格等，所以最终的结论应该在更全面的分析基础上做出。"
        },
        {
          "role": "user",
          "content": "我想看看热力图上的红色区域来源于哪副画的印章？",
        },
        {
          "role": "assistant",
          "content": "请在系统中的“物体布局”模块点击热力图上你想查看的区域，来获取印章在对应位置的画作。",
        },
        {
          "role": "user",
          "content": "画面中的山峰是否式马远的笔触？",
        },
        {
          "role": "assistant",
          "content": "请选择画面中你想要分析的山峰部分。通过对比笔触细节，我们可以进一步了解这部分是否符合马远的绘画风格。",
        },
        {
          "role": "assistant",
          "content": "经过将这块山峰与马远真迹中的山峰进行对比分析，我们可以看到如下特点：\n\n1.	线条:线条较为宽厚和圆润，缺乏明显的尖锐和硬朗感，呈现出一种柔和的流动性。\n2.	墨色运用:墨色较为单一，深浅变化不大，没有强烈的光影对比，整体给人以温和、含蓄的感觉。\n3.	质感表现:山峰的质感较为细腻，缺乏强烈的立体感，更多地表现出一种温润如玉的感觉。\n4.	虚实处理:画作中虚实对比不是特别明显，整体偏向于实的处理，没有太多的留白。\n\n综合上述特点，这幅山峰的风格似乎更倾向于李成的绘画风格。李成的山水画通常具有细腻柔和的线条和温润如玉的墨色，更注重细节的描绘和画面的整体和谐。虽然这幅画也使用了某种皴法来表现山石的质感，但它缺少了马远作品中那种明显的力量感和动感，更加细腻和含蓄。\n然而，真正的鉴别还需要结合更多的知识和信息，包括画作的纸张、墨迹、构图以及画家的其他作品对比等，才能做出更精确的判断。古玩市场上的作品鉴定通常还涉及到科学测试和艺术史专家的意见。在没有这些额外信息的情况下，任何分析都只能是初步的和假设性的。",
        },
        {
          "role": "user",
          "content": "给我看看马远真实的笔触",
        },
        {
          "role": "assistant",
          "content": "你可以在“笔触细节”模块进一步查看马远真实的笔触，并与待定画作中的笔触进行对比",
        }
      ],
      showingList: [],
      content: '',
      chatnum: 0,
      case_Image1,
      sankeyshow: 0,
      hmshow: 0,
      bbox1,
      bbox0,
      chosen: 0,
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      partshow: 0,
      chosen1: 0,
      detailshow: 0,
      mt1,
      mt1_n1,
      mt1_n2,
      mt1_n3,
      mt1_n4,
      mt1_n5,
      mt1_n6,
      mt1_n7,
      mt1_n8,
    }
  },

  components: {
        Sankey,
        Heatmap,
        heatmap,
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
      console.log("sankey show or not: ",this.sankeyshow)
    },
    hmClick(){
      if(this.hmshow == 0) this.hmshow = 1;
      else this.hmshow =0;
      console.log("hm show or not: ",this.hmshow)
    },
    async next(){
        console.log("This is the number before: ",this.chosen)
        console.log("This is the length of total: ",this.bbox0.length)
        this.chosen = (this.chosen + 1)%this.bbox0.length
        console.log("This is the number after: ",this.chosen)
     },
     async last(){
        console.log("This is the number before: ",this.chosen)
        console.log("This is the length of total: ",this.bbox0.length)
        this.chosen = (this.chosen + this.bbox1.length - 1)%this.bbox0.length
        console.log("This is the number after: ",this.chosen)
        console.log(this.bbox0[this.chosen].object[0])
     },
     partClick(){
      if(this.partshow == 0) this.partshow = 1;
      else this.partshow =0;
      console.log("part show or not: ",this.partshow)
     },
     moreinfo(){
      this.showingList.push(this.messages[this.chatnum])
      this.chatnum = this.chatnum + 1
      console.log(this.chatnum)
     },
     detailClick(){
      if(this.detailshow == 0) this.detailshow = 1;
      else this.detailshow =0;
      console.log("detail show or not: ",this.detailshow)
     }
  }
}



</script>