<script>
//引入echarts组件
import * as echarts from 'echarts'
import { defineComponent ,onMounted } from 'vue'
export default defineComponent({
  setup(){
    onMounted( () =>{
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart"));
      // 绘制图表同上
      myChart.setOption({
 
      });
    })
 
  }
})
</script>