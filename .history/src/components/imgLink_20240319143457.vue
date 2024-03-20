<template>
    <div ref="chartDom" class="chartDom bg-red" style="width: 1300px;height:1000px;">
    </div>
  </template>
  
  <script setup>
  import * as echarts from 'echarts'
  import { ref, onMounted, watch } from 'vue'
  const chartDom = ref()
  
  const option = {
    tooltip: {
      trigger: 'item',

    },
    series: {
            type: 'graph',
            data: [
            {
                id: '0',
                name: 'mountain1',
                symbolSize: 50,
                x: 10,
                y: 10
                
            },
            {
                id: '1',
                name: 'mountain2',
                symbolSize: 50
            },
            {
                id: '2',
                name: 'tree1',
                symbolSize: 50
            },
            {
                id: '3',
                name: 'tree2',
                symbolSize: 50
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
  
  