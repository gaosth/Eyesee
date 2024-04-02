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
                name: 'Silk'
            },
            {
                name: 'Paper'
            },
            {
                name: 'Verical Scroll'
            },
            {
                name: 'Album'
            },
            {
                name: 'Hanging Scroll'
            },
            {
                name: 'Long Scroll'
            },
            {
                name: 'Painting Scroll'
            },
            {
                name: 'Landscape'
            },
            {
                name: 'Flower and Bird'
            },
            {
                name: 'Figures'
            },
            {
                name: 'Combined'
            },
            {
                name: 'Freehand'
            },
            {
                name: 'Delicate'
            },
            {
                name: 'Light-colored'
            },
            {
                name: 'Ink-and-wash'
            },
            {
                name: 'Heavy-colored'
            },
            {
                name: 'Colored'
            },
            {
                name: 'Light-indigo'
            },
            {
                name: 'Wu-style'
            },
            ],
            links: [
            {
                source: 'Silk',
                target: 'Verical Scroll',
                value: 33,
            },
            {
                source: 'Silk',
                target: 'Album',
                value: 28
            },
            {
                source: 'Silk',
                target: 'Hanging Scroll',
                value: 5
            },
            {
                source: 'Silk',
                target: 'Long Scroll',
                value: 7
            },
            {
                source: 'Silk',
                target: 'Painting Scroll',
                value: 2
            },
            {
                source: 'Paper',
                target: 'Verical Scroll',
                value: 2
            },
            {
                source: 'Paper',
                target: 'Album',
                value: 1
            },
            {
                source: 'Paper',
                target: 'Hanging Scroll',
                value: 1
            },
            {
                source: 'Paper',
                target: 'Long Scroll',
                value: 3
            },
            {
                source: 'Verical Scroll',
                target: 'Landscape',
                value: 30
            },
            {
                source: 'Verical Scroll',
                target: 'Figures',
                value: 4
            },
            {
                source: 'Verical Scroll',
                target: 'Flower and Bird',
                value: 2
            },
            {
                source: 'Album',
                target: 'Landscape',
                value: 14
            },
            {
                source: 'Album',
                target: 'Figures',
                value: 4
            },
            {
                source: 'Album',
                target: 'Flower and Bird',
                value: 5
            },
            {
                source: '扇面',
                target: 'Landscape',
                value: 3
            },
            {
                source: '扇面',
                target: 'Figures',
                value: 5
            },
            {
                source: '扇面',
                target: 'Flower and Bird',
                value: 1
            },
            {
                source: 'Long Scroll',
                target: 'Landscape',
                value: 8
            },
            {
                source: 'Hanging Scroll',
                target: 'Landscape',
                value: 7
            },
            {
                source: 'Painting Scroll',
                target: 'Flower and Bird',
                value: 1
            },
            {
                source: 'Painting Scroll',
                target: 'Figures',
                value: 1
            },
            {
                source: 'Landscape',
                target: 'Combined',
                value: 37
            },
            {
                source: 'Landscape',
                target: 'Freehand',
                value: 31
            },
            {
                source: 'Landscape',
                target: 'Delicate',
                value: 7
            },
            {
                source: 'Figures',
                target: 'Combined',
                value: 16
            },
            {
                source: 'Figures',
                target: 'Freehand',
                value: 13
            },
            {
                source: 'Figures',
                target: 'Delicate',
                value: 4
            },
            {
                source: 'Flower and Bird',
                target: 'Combined',
                value: 4
            },
            {
                source: 'Flower and Bird',
                target: 'Freehand',
                value: 7
            },
            {
                source: 'Flower and Bird',
                target: 'Delicate',
                value: 7
            },
            {
                source: 'Combined',
                target: 'Light-colored',
                value: 17
            },
            {
                source: 'Combined',
                target: 'Ink-and-wash',
                value: 11
            },
            {
                source: 'Combined',
                target: 'Heavy-colored',
                value: 1
            },
            {
                source: 'Combined',
                target: 'Colored',
                value: 25
            },
            {
                source: 'Combined',
                target: 'Light-indigo',
                value: 12
            },
            {
                source: 'Combined',
                target: 'Wu-style',
                value: 4
            },
            {
                source: 'Freehand',
                target: 'Light-colored',
                value: 10
            },
            {
                source: 'Freehand',
                target: 'Ink-and-wash',
                value: 12
            },
            {
                source: 'Freehand',
                target: 'Colored',
                value: 15
            },
            {
                source: 'Freehand',
                target: 'Light-indigo',
                value: 11
            },
            {
                source: 'Delicate',
                target: 'Light-colored',
                value: 4
            },
            {
                source: 'Delicate',
                target: 'Ink-and-wash',
                value: 6
            },
            {
                source: 'Delicate',
                target: 'Colored',
                value: 24
            },
            {
                source: 'Delicate',
                target: 'Light-indigo',
                value: 2
            },
            {
                source: 'Delicate',
                target: 'Wu-style',
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
  
  