<template>
    <div ref="chartDom" class="chartDom bg-orange-100" style="width: 100%;height:100%;">
    </div>
  </template>
  
  <script setup>
  import * as echarts from 'echarts'
  import { ref, onMounted, watch } from 'vue'
  const chartDom = ref()
  import mt1 from '@/assets/case1/mountain1/01.png'
  import mt1_n1 from '@/assets/case1/mountain1/李成 85.78%.png'
  import mt1_n2 from '@/assets/case1/mountain1/李成 87.87%.png'
  import mt1_n3 from '@/assets/case1/mountain1/李成 89.38%.png'
  import mt1_n4 from '@/assets/case1/mountain1/李成 92.91%.png'
  import mt1_n5 from '@/assets/case1/mountain1/马远 68.75%.png'
  import mt1_n6 from '@/assets/case1/mountain1/马远 70.38%.png'
  import mt1_n7 from '@/assets/case1/mountain1/马远 71.66%.png'
  import mt1_n8 from '@/assets/case1/mountain1/马远 72.55%.png'
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
                name: '李成',
                symbolSize: 40,
                symbol: 'image://' + mt1_n1,
                x: 120,
                y: 100,
                // value: 85.78
                
            },
            {
                id: '02',
                name: '李成',
                symbolSize: 40,
                symbol: 'image://' + mt1_n2,
                x: 140,
                y: 100,
                value: 87.87
                
            },
            {
                id: '03',
                name: '李成',
                symbolSize: 40,
                symbol: 'image://' + mt1_n3,
                x: 160,
                y: 100,
                value: 89.38
                
            },
            {
                id: '04',
                name: '李成',
                symbolSize: 40,
                symbol: 'image://' + mt1_n4,
                x: 180,
                y: 100,
                value: 92.91
            },
            {
                id: '05',
                name: '马远',
                symbolSize: 40,
                symbol: 'image://' + mt1_n5,
                x: 120,
                y: 120,
                value: 68.75
                
            },
            {
                id: '06',
                name: '马远',
                symbolSize: 40,
                symbol: 'image://' + mt1_n6,
                x: 140,
                y: 120,
                value: 70.38
                
            },
            {
                id: '07',
                name: '马远',
                symbolSize: 40,
                symbol: 'image://' + mt1_n7,
                x: 160,
                y: 120,
                value: 71.66
                
            },
            {
                id: '08',
                name: '马远',
                symbolSize: 40,
                symbol: 'image://' + mt1_n8,
                x: 180,
                y: 120,
                value: 72.55
                
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
  
  