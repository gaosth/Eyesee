<template>
    <main id="myChart" style="width: 100%;height:100%;"></main>
</template>

<script>
//引入echarts组件
import * as echarts from 'echarts'
import { defineComponent ,onMounted } from 'vue'
import axios from 'axios'
import heatdata_seal from '@/assets/heatmapdata/MaYuan_seal.json'

export default defineComponent({
  setup(){
    onMounted( () =>{
      // 基于准备好的dom，初始化echarts实例 
      let myChart = echarts.init(document.getElementById("myChart"));

      // 绘制图表同上
      myChart.setOption({
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
                source: 'a',
                target: 'a1',
                value: 5
            },
            {
                source: 'a',
                target: 'a2',
                value: 3
            },
            {
                source: 'b',
                target: 'b1',
                value: 8
            },
            {
                source: 'a',
                target: 'b1',
                value: 3
            },
            {
                source: 'b1',
                target: 'a1',
                value: 1
            },
            {
                source: 'b1',
                target: 'c',
                value: 2
            }
            ]
        }
      });
    })
 
  }
})
</script>