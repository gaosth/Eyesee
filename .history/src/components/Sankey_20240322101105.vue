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
                name: '绢本',
                itemStyle: {
                    color: '#f18bbf',
                }
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
                name: '镜片'
            },
            {
                name: '长卷'
            },
            {
                name: '图轴'
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
            {
                name: '兼工带写'
            },
            {
                name: '写意'
            },
            {
                name: '工笔'
            },
            {
                name: '淡彩'
            },
            {
                name: '水墨'
            },
            {
                name: '重彩'
            },
            {
                name: '设色'
            },
            {
                name: '螺青'
            },
            {
                name: '吴妆'
            },
            ],
            links: [
            {
                source: '绢本',
                target: '立轴',
                value: 33
            },
            {
                source: '绢本',
                target: '册页',
                value: 28
            },
            {
                source: '绢本',
                target: '镜片',
                value: 5
            },
            {
                source: '绢本',
                target: '长卷',
                value: 7
            },
            {
                source: '绢本',
                target: '图轴',
                value: 2
            },
            {
                source: '纸本',
                target: '立轴',
                value: 2
            },
            {
                source: '纸本',
                target: '册页',
                value: 1
            },
            {
                source: '纸本',
                target: '镜片',
                value: 1
            },
            {
                source: '纸本',
                target: '长卷',
                value: 3
            },
            {
                source: '立轴',
                target: '山水',
                value: 30
            },
            {
                source: '立轴',
                target: '人物',
                value: 4
            },
            {
                source: '立轴',
                target: '花鸟',
                value: 2
            },
            {
                source: '册页',
                target: '山水',
                value: 14
            },
            {
                source: '册页',
                target: '人物',
                value: 4
            },
            {
                source: '册页',
                target: '花鸟',
                value: 5
            },
            {
                source: '扇面',
                target: '山水',
                value: 3
            },
            {
                source: '扇面',
                target: '人物',
                value: 5
            },
            {
                source: '扇面',
                target: '花鸟',
                value: 1
            },
            {
                source: '长卷',
                target: '山水',
                value: 8
            },
            {
                source: '镜片',
                target: '山水',
                value: 7
            },
            {
                source: '图轴',
                target: '花鸟',
                value: 1
            },
            {
                source: '图轴',
                target: '人物',
                value: 1
            },
            {
                source: '山水',
                target: '兼工带写',
                value: 37
            },
            {
                source: '山水',
                target: '写意',
                value: 31
            },
            {
                source: '山水',
                target: '工笔',
                value: 7
            },
            {
                source: '人物',
                target: '兼工带写',
                value: 16
            },
            {
                source: '人物',
                target: '写意',
                value: 13
            },
            {
                source: '人物',
                target: '工笔',
                value: 4
            },
            {
                source: '花鸟',
                target: '兼工带写',
                value: 4
            },
            {
                source: '花鸟',
                target: '写意',
                value: 7
            },
            {
                source: '花鸟',
                target: '工笔',
                value: 7
            },
            {
                source: '兼工带写',
                target: '淡彩',
                value: 17
            },
            {
                source: '兼工带写',
                target: '水墨',
                value: 11
            },
            {
                source: '兼工带写',
                target: '重彩',
                value: 1
            },
            {
                source: '兼工带写',
                target: '设色',
                value: 5
            },
            {
                source: '兼工带写',
                target: '螺青',
                value: 12
            },
            {
                source: '兼工带写',
                target: '吴妆',
                value: 4
            },
            {
                source: '写意',
                target: '淡彩',
                value: 10
            },
            {
                source: '写意',
                target: '水墨',
                value: 12
            },
            {
                source: '写意',
                target: '设色',
                value: 3
            },
            {
                source: '写意',
                target: '螺青',
                value: 11
            },
            {
                source: '工笔',
                target: '淡彩',
                value: 4
            },
            {
                source: '工笔',
                target: '水墨',
                value: 6
            },
            {
                source: '工笔',
                target: '螺青',
                value: 2
            },
            {
                source: '工笔',
                target: '吴妆',
                value: 3
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
  
  