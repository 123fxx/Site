<template>
  <div class="trends_chat">
    <div id="trendsChat" :style="{width: '100%', height: '100%'}"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.trendsLine();
  },
  methods: {
    trendsLine() {
      // 基于准备好的dom，初始化echarts实例
      let trendsChat = this.$echarts.init(
        document.getElementById("trendsChat")
      );
      // 绘制图表配置
      let option = {
        tooltip: {},
        legend: {
          data: ["成交数量", "成交金额"],
          x: "30%",
          y: "90%",
        },
        color: ["#4779E8", "#E22E2E"],
        grid: {
          left: "12%",
        },
        xAxis: [
          {
            type: "category",
            data: ["2020/04", "2020/05", "2020/06", "2020/07", "2020/08"],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "（项）",
            axisLabel: {
              formatter: "{value}",
            },

            axisTick: {
              show: false,
            },
          },
          {
            type: "value",
            name: "（亿元）",
            axisLabel: {
              formatter: "{value}",
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: "成交数量",
            type: "bar",
            data: [1500, 2200, 2000, 500, 1000],
            barWidth: 30,
            barMaxWidth: 30,
          },
          {
            name: "成交金额",
            type: "line",
            yAxisIndex: 1,
            data: [200, 300, 150, 100, 120],
          },
        ],
      };
      trendsChat.setOption(option);
      setTimeout(function () {
        window.onresize = function () {
          trendsChat.resize();
        };
      }, 200);
    },
  },
};
</script>

<style scoped>
.trends_chat,
.proportion_chat {
  width: 100%;
  height: calc(100% - 41px);
}
#trendsChat,
#proportionChat {
  width: 100%;
  height: 100%;
}
</style>