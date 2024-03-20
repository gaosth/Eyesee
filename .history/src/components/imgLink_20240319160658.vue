<template>
    <div ref="chartDom" class="chartDom bg-red-50" style="width: 100%;height:100%;">
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
  import mt1_n1 from '@/assets/case2/mountain1/郭熙11.png'
  import mt1_n2 from '@/assets/case2/mountain1/郭熙12.png'
  import mt1_n3 from '@/assets/case2/mountain1/郭熙21.png'
  import mt1_n4 from '@/assets/case2/mountain1/郭熙22.png'
  import mt1_n5 from '@/assets/case2/mountain1/郭熙31.png'
  import mt1_n6 from '@/assets/case2/mountain1/郭熙41.png'
  import mt1_n7 from '@/assets/case2/mountain1/郭熙42.png'
  import mt1_n8 from '@/assets/case2/mountain1/郭熙51.png'
  import mt1_n9 from '@/assets/case2/mountain1/郭熙81.png'
  
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
                y: 110
                
            },
            // {
            //     id: '1',
            //     name: 'mountain2',
            //     symbolSize: 80,
            //     symbol: 'image://' + mt2,
            //     x: 100,
            //     y: 130
            // },
            // {
            //     id: '2',
            //     name: 'tree1',
            //     symbolSize: 80,
            //     symbol: 'image://' + tr1,
            //     x: 100,
            //     y: 140
            // },
            // {
            //     id: '3',
            //     name: 'tree2',
            //     symbolSize: 80,
            //     symbol: 'image://' + tr2,
            //     x: 100,
            //     y: 160
            // },
            {
                id: '01',
                name: '郭熙11',
                symbolSize: 80,
                symbol: 'image://' + mt1_n1,
                x: 120,
                y: 100
                
            },
            {
                id: '02',
                name: '郭熙12',
                symbolSize: 80,
                symbol: 'image://' + mt1_n2,
                x: 140,
                y: 100
                
            },
            {
                id: '03',
                name: '郭熙21',
                symbolSize: 80,
                symbol: 'image://' + mt1_n3,
                x: 120,
                y: 110
                
            },
            {
                id: '04',
                name: '郭熙22',
                symbolSize: 80,
                symbol: 'image://' + mt1_n4,
                x: 140,
                y: 110
                
            },
            {
                id: '05',
                name: '郭熙31',
                symbolSize: 80,
                symbol: 'image://' + mt1_n5,
                x: 120,
                y: 120
                
            },
            {
                id: '06',
                name: '郭熙41',
                symbolSize: 80,
                symbol: 'image://' + mt1_n6,
                x: 140,
                y: 120
                
            },
            {
                id: '07',
                name: '郭熙42',
                symbolSize: 80,
                symbol: 'image://' + mt1_n7,
                x: 160,
                y: 120
                
            },
            {
                id: '08',
                name: '郭熙51',
                symbolSize: 80,
                symbol: 'image://' + mt1_n8,
                x: 160,
                y: 100
                
            },
            {
                id: '09',
                name: '郭熙81',
                symbolSize: 80,
                symbol: 'image://' + mt1_n9,
                x: 160,
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
  
  