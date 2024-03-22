<template>
    <div ref="chartDom" class="chartDom bg-orange-100" style="width: 100%;height:100%;">
    </div>
  </template>
  
  <script setup>
  import * as echarts from 'echarts'
  import { ref, onMounted, watch } from 'vue'
  const chartDom = ref()
  import mt1 from '@/assets/case1/mountain2/02.png'
  import mt1_n1 from '@/assets/case1/mountain2/马远11.png'
  import mt1_n2 from '@/assets/case1/mountain2/马远41_84.43.png'
  import mt1_n3 from '@/assets/case1/mountain2/马远51.png'
  import mt1_n4 from '@/assets/case1/mountain2/马远92_85.43.png'
  import mt1_n5 from '@/assets/case1/mountain2/马远101.png'
  import mt1_n6 from '@/assets/case1/mountain2/马远111.png'
  import mt1_n7 from '@/assets/case1/mountain2/马远112.png'
  import mt1_n8 from '@/assets/case1/mountain2/马远141_87.39.png'
  
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
                name: '李成11_92',
                symbolSize: 40,
                symbol: 'image://' + mt1_n1,
                x: 120,
                y: 100
                
            },
            {
                id: '02',
                name: '李成13_87',
                symbolSize: 40,
                symbol: 'image://' + mt1_n2,
                x: 140,
                y: 100
                
            },
            {
                id: '03',
                name: '李成21',
                symbolSize: 40,
                symbol: 'image://' + mt1_n3,
                x: 120,
                y: 110
                
            },
            {
                id: '04',
                name: '李成41',
                symbolSize: 40,
                symbol: 'image://' + mt1_n4,
                x: 140,
                y: 110
                
            },
            {
                id: '05',
                name: '李成61',
                symbolSize: 40,
                symbol: 'image://' + mt1_n5,
                x: 120,
                y: 120
                
            },
            {
                id: '06',
                name: '李成62_88',
                symbolSize: 40,
                symbol: 'image://' + mt1_n6,
                x: 140,
                y: 120
                
            },
            {
                id: '07',
                name: '李成63_87',
                symbolSize: 40,
                symbol: 'image://' + mt1_n7,
                x: 160,
                y: 120
                
            },
            {
                id: '08',
                name: '李成64',
                symbolSize: 40,
                symbol: 'image://' + mt1_n8,
                x: 160,
                y: 100
                
            },
            {
                id: '09',
                name: '李成101_89',
                symbolSize: 40,
                symbol: 'image://' + mt1_n9,
                x: 160,
                y: 110
                
            },
            {
                id: '10',
                name: '李成102_85',
                symbolSize: 40,
                symbol: 'image://' + mt1_n10,
                x: 120,
                y: 130
                
            },
            {
                id: '11',
                name: '李成111',
                symbolSize: 40,
                symbol: 'image://' + mt1_n11,
                x: 140,
                y: 130
                
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
            {
                source: '0',
                target: '10',
            },
            {
                source: '0',
                target: '11',
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
  
  