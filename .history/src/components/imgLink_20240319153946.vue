<template>
    <div ref="chartDom" class="chartDom bg-red-50" style="width: 1300px;height:1000px;">
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
                symbolSize: 80,
                symbol: 'image://' + mt1,
                x: 100,
                y: 100
                
            },
            {
                id: '1',
                name: 'mountain2',
                symbolSize: 80,
                x: 100,
                y: 120
            },
            {
                id: '2',
                name: 'tree1',
                symbolSize: 80,
                x: 100,
                y: 140
            },
            {
                id: '3',
                name: 'tree2',
                symbolSize: 80,
                x: 100,
                y: 160
            },
            ],
            links: [
            {
                source: '0',
                target: '1',
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
                max: 2
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
  
  