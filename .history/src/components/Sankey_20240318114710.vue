<template>
    <main id="myChart" style="width: 100%;height:100%;"></main>
</template>

<script>
//引入echarts组件
import * as echarts from 'echarts'
import { defineComponent ,onMounted } from 'vue'
import axios from 'axios'

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
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
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
      });
    })
 
  }
})
</script>