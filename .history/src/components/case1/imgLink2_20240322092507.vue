<template>
    <div ref="chartDom" class="chartDom bg-orange-100" style="width: 100%;height:100%;">
    </div>
  </template>
  
  <script setup>
  import * as echarts from 'echarts'
  import { ref, onMounted, watch } from 'vue'
  const chartDom = ref()
  import mt1 from '@/assets/case1/mountain2/02.png'
  import mt1_n1 from '@/assets/case1/mountain2/李唐61.png'
  import mt1_n2 from '@/assets/case1/mountain2/李唐62.png'
  import mt1_n3 from '@/assets/case1/mountain2/李唐63.png'
  import mt1_n4 from '@/assets/case1/mountain2/李唐71.png'
  
  const option = {
    tooltip: {
    },
    series: {
            type: 'graph',
            layout: 'none',
            data: [
            {
                id: '0',
                name: 'mountain1',
                symbolSize: 40,
                symbol: 'image://' + mt1,
                x: 100,
                y: 110
                
            },
            {
                id: '01',
                name: '李唐61',
                symbolSize: 40,
                symbol: 'image://' + mt1_n1,
                x: 120,
                y: 100
                
            },
            {
                id: '02',
                name: '李唐62',
                symbolSize: 40,
                symbol: 'image://' + mt1_n2,
                x: 140,
                y: 100
                
            },
            {
                id: '03',
                name: '李唐63',
                symbolSize: 40,
                symbol: 'image://' + mt1_n3,
                x: 120,
                y: 110
                
            },
            {
                id: '04',
                name: '李唐71',
                symbolSize: 40,
                symbol: 'image://' + mt1_n4,
                x: 140,
                y: 110
                
            },
            ],
            links: [
            {
                source: '0',
                target: '01',
            },
            {
                source: '0',
                target: '02',
            },
            {
                source: '0',
                target: '03',
            },
            {
                source: '0',
                target: '04',
            },
            ],
            roam: true,
            label: {
                show: true,
                position: 'right',
                formatter: '{b}'
            },
            labelLayout: {
                hideOverlap: true
            },
            scaleLimit: {
                min: 0.4,
                max: 6
            },
        }
  }
  // 不赋值给ref响应式Proxy对象
  let chart
  
  onMounted(() => {
    chart = echarts.init(chartDom.value)
    chart.setOption(option)
  })
  </script>
  
  