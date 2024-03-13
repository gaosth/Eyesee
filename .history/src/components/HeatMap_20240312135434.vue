<template>
    <div ref="heatmap" class="heatmap"></div>
  </template>
  
  <script>
  export default {
    name: 'Heatmap',
    props: {
      data: Array,
      config: Object
    },
    mounted() {
      this.drawHeatmap();
    },
    methods: {
      drawHeatmap() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const container = this.$refs.heatmap;
        const data = this.data;
        const config = this.config;
  
        // 设置 Canvas 大小
        canvas.width = config.width;
        canvas.height = config.height;
  
        // 绘制热力图
        data.forEach((point) => {
          const x = point.x;
          const y = point.y;
          const density = point.density;
  
          // 根据密度值计算颜色
          const color = getColorByDensity(density);
  
          // 在 Canvas 上绘制矩形，表示一个数据点
          ctx.fillStyle = color;
          ctx.fillRect(x, y, config.pointSize, config.pointSize);
        });
  
        // 将 Canvas 渲染到页面上
        container.appendChild(canvas);
      },
      getColorByDensity(density) {
        // 根据密度值计算颜色
        // 省略具体的计算过程
      }
    }
  };
  </script>
  
  <style scoped>
  .heatmap {
    width: 100%;
    height: 100%;
  }
  </style>
  