<template>
    <div>
      <heatmap :data="heatmapData" :config="heatmapConfig"></heatmap>
    </div>
  </template>
  
  <script>
  import Heatmap from '@/components/Heatmap.vue';
  
  export default {
    name: 'App',
    components: {
      Heatmap
    },
    data() {
      return {
        heatmapData: [
          { x: 100, y: 200, density: 0.5 },
          { x: 200, y: 300, density: 0.8 },
          // 更多数据点...
        ],
        heatmapConfig: {
          width: 500,
          height: 500,
          pointSize: 10,
          // 更多配置项...
        }
      };
    }
  };
  </script>
  