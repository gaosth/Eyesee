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
      trigger: 'axis'
    },
    series: {
            type: 'sankey',
            layout: 'none',
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
                name: '轴'
            },
            {
                name: '册'
            },
            {
                name: '镜'
            },
            {
                name: '卷'
            }
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
            ]
        }
  }
  // 不赋值给ref响应式Proxy对象
  let chart
  
  onMounted(() => {
    chart = echarts.init(chartDom.value)
    chart.setOption(option)
  })
  </script>
  
  