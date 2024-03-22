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
            type: 'sankey',
            emphasis: {
            focus: 'adjacency'
            },
            data: [
            {
                name: '绢本'
            },
            {
                name: '纸本'
            },
            {
                name: '立轴'
            },
            {
                name: '册页'
            },
            {
                name: '扇面'
            },
            {
                name: '长卷'
            },
            {
                name: '山水'
            },
            {
                name: '兼工带写'
            },
            {
                name: '写意'
            },
            {
                name: '淡彩'
            },
            {
                name: '水墨'
            },
            {
                name: '浅绛'
            },
            {
                name: '设色'
            },
            ],
            links: [
            {
                source: '绢本',
                target: '立轴',
                value: 13,
            },
            {
                source: '绢本',
                target: '册页',
                value: 5
            },
            {
                source: '绢本',
                target: '长卷',
                value: 2
            },
            {
                source: '绢本',
                target: '扇面',
                value: 1
            },
            {
                source: '纸本',
                target: '山水',
                value: 2
            },
            {
                source: '立轴',
                target: '山水',
                value: 13
            },
            {
                source: '册页',
                target: '山水',
                value: 5
            },
            {
                source: '扇面',
                target: '山水',
                value: 1
            },
            {
                source: '长卷',
                target: '山水',
                value: 2
            },
            {
                source: '山水',
                target: '兼工带写',
                value: 24
            },
            {
                source: '山水',
                target: '写意',
                value: 11
            },
            {
                source: '兼工带写',
                target: '淡彩',
                value: 16
            },
            {
                source: '兼工带写',
                target: '水墨',
                value: 6
            },
            {
                source: '兼工带写',
                target: '浅绛',
                value: 2
            },
            {
                source: '写意',
                target: '淡彩',
                value: 7
            },
            {
                source: '写意',
                target: '水墨',
                value: 3
            },
            {
                source: '写意',
                target: '设色',
                value: 1
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
              },
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
  
  