<template>
  <div ref="chartDom" class="chartDom" style="width: 100%;height:100%;">
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted, watch } from 'vue'
import heatdata_seal from '@/assets/heatmapdata/MaYuan_seal.json'

const chartDom = ref()

      let xData = [];
      let yData = [];
      let data = [];
      let heatdata = [];
      heatdata = heatdata_seal;
        data = [];
      for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
          // console.log(heatdata[i][j])
          data.push([i, j, heatdata[i][j]]);
        }
        xData.push(i);
      }
      for (let j = 0; j < 100; j++) {
        yData.push(j);
      }

const option = {
  grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      xAxis: {
        type: 'category',
        show: false,
      },
      yAxis: {
        type: 'category',
        show: false,
      },
      visualMap: {
        min: 0,
        max: 15,
        show: false,
        inRange: {
          color: [
            '#abd9e9',
            '#e0f3f8',
            '#ffffbf',
            '#fee090',
            '#fdae61',
            '#f46d43',
            '#d73027',
            '#a50026'
          ]
        }
      },
      series: [
        {
            type: 'heatmap',
            data: data,
            emphasis: {
                itemStyle: {
                    borderColor: '#333',
                    borderWidth: 1
                }
            },
            progressive: 1000,
            animation: false
        }
      ]
}
// 不赋值给ref响应式Proxy对象
let chart

onMounted(() => {
  chart = echarts.init(chartDom.value)
  chart.setOption(option)
})
</script>

