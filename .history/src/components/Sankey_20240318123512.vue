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
            },
            {
                name: '山水'
            },
            {
                name: '花鸟'
            },
            {
                name: '人物'
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
                value: 0.25
            },
            {
                source: '册',
                target: '花鸟',
                value: 0.05
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
  
  