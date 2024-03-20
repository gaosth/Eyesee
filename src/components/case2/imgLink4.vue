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
  import tr2_n1 from '@/assets/case2/tree2/郭熙21.png'
  import tr2_n2 from '@/assets/case2/tree2/郭熙31.png'
  import tr2_n3 from '@/assets/case2/tree2/郭熙61.png'
  import tr2_n4 from '@/assets/case2/tree2/郭熙72.png'
  import tr2_n5 from '@/assets/case2/tree2/郭熙82.png'

  
  const option = {
    tooltip: {
    },
    series: {
            type: 'graph',
            layout: 'none',
            data: [
            {
                id: '4',
                name: 'tree2',
                symbolSize: 40,
                symbol: 'image://' + tr2,
                x: 100,
                y: 105
                
            },
            {
                id: '41',
                name: '郭熙21',
                symbolSize: 40,
                symbol: 'image://' + tr2_n1,
                x: 120,
                y: 100
                
            },
            {
                id: '42',
                name: '郭熙31',
                symbolSize: 40,
                symbol: 'image://' + tr2_n2,
                x: 140,
                y: 100
                
            },
            {
                id: '43',
                name: '郭熙61',
                symbolSize: 40,
                symbol: 'image://' + tr2_n3,
                x: 120,
                y: 110
                
            },
            {
                id: '44',
                name: '郭熙72',
                symbolSize: 40,
                symbol: 'image://' + tr2_n4,
                x: 140,
                y: 110
                
            },
            {
                id: '45',
                name: '郭熙82',
                symbolSize: 40,
                symbol: 'image://' + tr2_n5,
                x: 120,
                y: 120
                
            },
            ],
            links: [
            {
                source: '4',
                target: '41',
            },
            {
                source: '4',
                target: '42',
            },
            {
                source: '4',
                target: '43',
            },
            {
                source: '4',
                target: '44',
            },
            {
                source: '4',
                target: '45',
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
  
  