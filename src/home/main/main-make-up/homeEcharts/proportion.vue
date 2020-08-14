<template>
  <div class="proportion_chat">
    <div id="proportionChat" :style="{width: '100%', height: '100%'}"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.proportionLine();
  },
  methods: {
    proportionLine() {
      // 基于准备好的dom，初始化echarts实例
      let proportionChat = this.$echarts.init(
        document.getElementById("proportionChat")
      );
      // 绘制图表配置
      let option = {
        title: {},
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "horizontal",
          left: "left",
          bottom: 10,
          data: ["政府采购", "建设工程", "土地矿业", "国有产权", "其他"],
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "40%"],
            data: [
              { value: 335, name: "政府采购" },
              { value: 310, name: "建设工程" },
              { value: 234, name: "土地矿业" },
              { value: 135, name: "国有产权" },
              { value: 1548, name: "其他" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
              normal: {
                color: function (params) {
                  //自定义颜色
                  var colorList = [
                    "#33A9FA",
                    "#F1BB4C",
                    "#AFA3F5",
                    "#3FEED4",
                    "#5D7FF8",
                  ];
                  return colorList[params.dataIndex];
                },
              },
            },
          },
        ],
      };

      proportionChat.setOption(option);
      setTimeout(function () {
        window.onresize = function () {
          proportionChat.resize();
        };
      }, 200);
    },
  },
};
</script>

<style scoped>
.proportion_chat {
  width: 100%;
  height: calc(100% - 41px);
}
#proportionChat {
  width: 100%;
  height: 100%;
}
</style>