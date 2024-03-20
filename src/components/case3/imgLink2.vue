<template>
    <div ref="chartDom" class="chartDom bg-orange-100" style="width: 100%;height:100%;">
    </div>
  </template>
  
  <script setup>
  import * as echarts from 'echarts'
  import { ref, onMounted, watch } from 'vue'
  const chartDom = ref()
  import mt1 from '@/assets/case3/tree1/01.png'
  import mt1_n1 from '@/assets/case3/tree1/刘松年11.png'
  import mt1_n2 from '@/assets/case3/tree1/刘松年12.png'
  import mt1_n3 from '@/assets/case3/tree1/刘松年13.png'
  import mt1_n4 from '@/assets/case3/tree1/刘松年14.png'
  import mt1_n5 from '@/assets/case3/tree1/刘松年15.png'
  import mt1_n6 from '@/assets/case3/tree1/刘松年16.png'
  import mt1_n7 from '@/assets/case3/tree1/刘松年21.png'
  import mt1_n8 from '@/assets/case3/tree1/刘松年22.png'
  import mt1_n9 from '@/assets/case3/tree1/刘松年23.png'
  import mt1_n10 from '@/assets/case3/tree1/刘松年51.png'
  
  const option = {
    tooltip: {
    },
    series: {
            type: 'graph',
            layout: 'none',
            data: [
            {
                id: '0',
                name: 'tree1',
                symbolSize: 40,
                symbol: 'image://' + mt1,
                x: 100,
                y: 110
                
            },
            {
                id: '01',
                name: '刘松年11',
                symbolSize: 40,
                symbol: 'image://' + mt1_n1,
                x: 120,
                y: 100
                
            },
            {
                id: '02',
                name: '刘松年12',
                symbolSize: 40,
                symbol: 'image://' + mt1_n2,
                x: 140,
                y: 100
                
            },
            {
                id: '03',
                name: '刘松年13',
                symbolSize: 40,
                symbol: 'image://' + mt1_n3,
                x: 120,
                y: 110
                
            },
            {
                id: '04',
                name: '刘松年14',
                symbolSize: 40,
                symbol: 'image://' + mt1_n4,
                x: 140,
                y: 110
                
            },
            {
                id: '05',
                name: '刘松年15',
                symbolSize: 40,
                symbol: 'image://' + mt1_n5,
                x: 120,
                y: 120
                
            },
            {
                id: '06',
                name: '刘松年16',
                symbolSize: 40,
                symbol: 'image://' + mt1_n6,
                x: 140,
                y: 120
                
            },
            {
                id: '07',
                name: '刘松年21',
                symbolSize: 40,
                symbol: 'image://' + mt1_n7,
                x: 160,
                y: 120
                
            },
            {
                id: '08',
                name: '刘松年22',
                symbolSize: 40,
                symbol: 'image://' + mt1_n8,
                x: 160,
                y: 100
                
            },
            {
                id: '09',
                name: '刘松年23',
                symbolSize: 40,
                symbol: 'image://' + mt1_n9,
                x: 160,
                y: 110
                
            },
            {
                id: '10',
                name: '刘松年51',
                symbolSize: 40,
                symbol: 'image://' + mt1_n10,
                x: 180,
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
            {
                source: '0',
                target: '10',
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
  
  