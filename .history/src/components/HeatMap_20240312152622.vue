<template>
    <main id="myChart" style="width: 1366px;height:1024px;"></main>
</template>

<script>
//引入echarts组件
import * as echarts from 'echarts'
import { defineComponent ,onMounted } from 'vue'
export default defineComponent({
  setup(){
    onMounted( () =>{
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart"));

      var src = '../assets/heatmapdata/MaYuan_seal.json'

      let xData = [];
      let yData = [];
      let data = [];
      let heatdata = [];
      fetch(src)
      .then(res => res.json())
      .then(
        json => {
            heatdata = json;
        }
      )

      // 绘制图表同上
      myChart.setOption({
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
      });
    })
 
  }
})
</script>