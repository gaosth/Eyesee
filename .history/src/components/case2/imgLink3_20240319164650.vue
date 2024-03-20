<template>
    <div ref="chartDom" class="chartDom bg-orange-100" style="width: 100%;height:100%;">
    </div>
  </template>
  
  <script setup>
  import * as echarts from 'echarts'
  import { ref, onMounted, watch } from 'vue'
  const chartDom = ref()
  import mt1 from '@/assets/case2/mountain1/01.png'
  import mt2 from '@/assets/case2/mountain2/02.png'
  import tr1 from '@/assets/case2/tree1/01.png'
  import tr2 from '@/assets/case2/tree2/02.png'
  import tr1_n1 from '@/assets/case2/tree1/李唐11.png'
  import tr1_n2 from '@/assets/case2/tree1/李唐21.png'
  import tr1_n3 from '@/assets/case2/tree1/李唐41.png'
  import tr1_n4 from '@/assets/case2/tree1/李唐51.png'
  import tr1_n5 from '@/assets/case2/tree1/李唐71.png'
  import tr1_n6 from '@/assets/case2/tree1/李唐81.png'

  
  const option = {
    tooltip: {
    },
    series: {
            type: 'graph',
            layout: 'none',
            data: [
            {
                id: '3',
                name: 'tree1',
                symbolSize: 40,
                symbol: 'image://' + tr1,
                x: 100,
                y: 105
                
            },
            {
                id: '31',
                name: '李唐11',
                symbolSize: 40,
                symbol: 'image://' + tr1_n1,
                x: 120,
                y: 100
                
            },
            {
                id: '32',
                name: '李唐21',
                symbolSize: 40,
                symbol: 'image://' + tr1_n2,
                x: 140,
                y: 100
                
            },
            {
                id: '33',
                name: '李唐41',
                symbolSize: 40,
                symbol: 'image://' + tr1_n3,
                x: 120,
                y: 110
                
            },
            {
                id: '34',
                name: '李唐51',
                symbolSize: 40,
                symbol: 'image://' + tr1_n4,
                x: 140,
                y: 110
                
            },
            {
                id: '35',
                name: '李唐71',
                symbolSize: 40,
                symbol: 'image://' + tr1_n5,
                x: 120,
                y: 120
                
            },
            {
                id: '36',
                name: '李唐81',
                symbolSize: 40,
                symbol: 'image://' + tr1_n6,
                x: 140,
                y: 120
                
            },
            ],
            links: [
            {
                source: '1',
                target: '11',
            },
            {
                source: '1',
                target: '12',
            },
            {
                source: '1',
                target: '13',
            },
            {
                source: '1',
                target: '14',
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
  
  