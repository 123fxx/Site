<template>
  <div id="tianMap">
    <div id="mapDiv"
         class="mapDiv"
         ref="mapDiv"></div>
  </div>
</template>
<script>
import TMap from "./init";
export default {
  props: ["coordinate"],
  data () {
    return {
      T: "",
      map: "", //地图对象
      localsearch: "", //搜索对象
      searchLand: "", //input绑定数据
      markerTool: "", //标注对象
      ctrl: "", //地图类型对象
      scale: "", //比例尺对象
      miniMap: "", //鹰眼对象
      control: "", //缩放对象
      userMar: null,
      marker: null, //标注对象
      longitude: 116.42, //经度
      latitude: 23.57, //维度
      zoom: 12, //显示级别
    };
  },
  mounted () {
    this.getPosition();
  },
  watch: {
    $route: "getPosition",
  },
  methods: {
    getPosition () {
      TMap.init()
        .then((T) => {
          this.T = T;
          this.map = new T.Map(this.$refs.mapDiv);

          this.map.centerAndZoom(
            new T.LngLat(this.longitude, this.latitude),
            this.zoom
          );
          let lc = new T.LocalCity();
          let _this = this;
          let listener = null;
          let geocode = new T.Geocoder();
          this.map.setMinZoom(4, 15);

          //自定义图标
          var icon = new T.Icon({
            iconUrl: "http://api.tianditu.gov.cn/img/map/markerA.png",
            iconSize: new T.Point(19, 27),
            iconAnchor: new T.Point(10, 25),
          });
          //创建标注对象
          this.marker = new T.Marker(
            new T.LngLat(this.longitude, this.latitude),
            { icon: icon }
          );
          //向地图上添加标注
          this.map.addOverLay(this.marker);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
#tianMap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
}
.mapDiv {
  width: 100%;
  height: 100%;
}

.mapTools {
  margin-bottom: 10px;
  height: 40px;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 999;
}
.textIpt {
  height: 40px;
  width: 50%;
  color: #979a9a;
  background-color: #f1f6f7;
  padding-left: 15px;
  margin-right: 30px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  vertical-align: top;
}
</style>

