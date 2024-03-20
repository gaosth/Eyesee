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
  import mt2_n1 from '@/assets/case2/mountain2/李唐61.png'
  import mt2_n2 from '@/assets/case2/mountain2/李唐62.png'
  import mt2_n3 from '@/assets/case2/mountain2/李唐63.png'
  import mt2_n4 from '@/assets/case2/mountain2/李唐71.png'
  
  const option = {
    tooltip: {
    },
    series: {
            type: 'graph',
            layout: 'none',
            data: [
            {
                id: '1',
                name: 'mountain2',
                symbolSize: 40,
                symbol: 'image://' + mt2,
                x: 100,
                y: 105
                
            },
            {
                id: '11',
                name: '郭熙11',
                symbolSize: 40,
                symbol: 'image://' + mt2_n1,
                x: 120,
                y: 100
                
            },
            {
                id: '12',
                name: '郭熙12',
                symbolSize: 40,
                symbol: 'image://' + mt2_n2,
                x: 140,
                y: 100
                
            },
            {
                id: '13',
                name: '郭熙21',
                symbolSize: 40,
                symbol: 'image://' + mt2_n3,
                x: 120,
                y: 110
                
            },
            {
                id: '14',
                name: '郭熙22',
                symbolSize: 40,
                symbol: 'image://' + mt2_n4,
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
            {
                source: '0',
                target: '05',
            },
            {
                source: '0',
                target: '06',
            },
            {
                source: '0',
                target: '07',
            },
            {
                source: '0',
                target: '08',
            },
            {
                source: '0',
                target: '09',
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
  
  