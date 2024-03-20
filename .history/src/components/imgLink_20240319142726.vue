<template>
    <div ref="chartDom" class="chartDom" style="width: 100%;height:100%;">
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
            emphasis: {
            focus: 'adjacency'
            },
            data: [
            {
                id: '0',
                name: 'mountain1',
                symbolSize: 50
                
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
                source: '绢本',
                target: '轴',
                value: 0.2
            },
            {
                source: '绢本',
                target: '册',
                value: 0.2
            },
            {
                source: '绢本',
                target: '镜',
                value: 0.1
            },
            {
                source: '绢本',
                target: '卷',
                value: 0.1
            },
            {
                source: '纸本',
                target: '轴',
                value: 0.1
            },
            {
                source: '纸本',
                target: '册',
                value: 0.1
            },
            {
                source: '纸本',
                target: '镜',
                value: 0.1
            },
            {
                source: '纸本',
                target: '卷',
                value: 0.1
            },
            {
                source: '轴',
                target: '山水',
                value: 0.3
            },
            {
                source: '册',
                target: '山水',
                value: 0.2
            },
            {
                source: '册',
                target: '花鸟',
                value: 0.1
            },
            {
                source: '镜',
                target: '山水',
                value: 0.1
            },
            {
                source: '镜',
                target: '花鸟',
                value: 0.05
            },
            {
                source: '镜',
                target: '人物',
                value: 0.05
            },
            {
                source: '卷',
                target: '山水',
                value: 0.1
            },
            {
                source: '卷',
                target: '花鸟',
                value: 0.1
            },
            {
                source: '山水',
                target: 'c1',
                value: 0.3
            },
            {
                source: '山水',
                target: 'c2',
                value: 0.2
            },
            {
                source: '山水',
                target: 'c3',
                value: 0.2
            },
            {
                source: '花鸟',
                target: 'c1',
                value: 0.15
            },
            {
                source: '花鸟',
                target: 'c3',
                value: 0.1
            },
            {
                source: '人物',
                target: 'c1',
                value: 0.05
            },
            {
                source: 'c1',
                target: 'c6',
                value: 0.5
            },
            {
                source: 'c2',
                target: 'c5',
                value: 0.2
            },
            {
                source: 'c3',
                target: 'c4',
                value: 0.3
            },
            ],
            levels: [
            {
              depth: 0,
              itemStyle: {
                color: '#f7e3a8'
              },
              lineStyle: {
                color: 'source',
                opacity: 0.6
              }
            },
            {
              depth: 1,
              itemStyle: {
                color: '#d6c695'
              },
              lineStyle: {
                color: 'source',
                opacity: 0.6
              }
            },
            {
              depth: 2,
              itemStyle: {
                color: '#d8b64e'
              },
              lineStyle: {
                color: 'source',
                opacity: 0.6
              }
            },
            {
              depth: 3,
              itemStyle: {
                color: '#a58a3a'
              },
              lineStyle: {
                color: 'source',
                opacity: 0.6
              }
            },
            {
              depth: 4,
              itemStyle: {
                color: '#a88417'
              },
              lineStyle: {
                color: 'source',
                opacity: 0.6
              }
            }
          ],
        }
  }
  // 不赋值给ref响应式Proxy对象
  let chart
  
  onMounted(() => {
    chart = echarts.init(chartDom.value)
    chart.setOption(option)
  })
  </script>
  
  