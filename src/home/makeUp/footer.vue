<template>
  <div class="footer">
    <div class="area">
      <div class="links display align">
        <span class="link-text">相关链接</span>
        <div style="margin-left:53px">
          <el-select v-model="value"
                     placeholder="请选择">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div style="margin:0 35px">
          <el-select v-model="value"
                     placeholder="请选择">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div>
          <el-select v-model="value"
                     placeholder="请选择">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="description">
        <div class="description-one">
          <span>关于我们</span>
          <span style="margin:0 21px">联系我们</span>
          <span>网址导航</span>
        </div>
        <div class="description-two">
          <span style="margin-right:20px">
            主办单位：揭阳市公共资源交易中心
          </span>
          <span>
            技术支持：壹平台信息技术支持
          </span>
        </div>
        <div class="description-three">
          <span>
            网站标识码5567701010
          </span>
          <span>
            <img src=""
                 alt="">
          </span>

          <span>
            粤公网安备445566010101001号-1
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  }
}
</script>

<style  scoped>
.footer {
  height: 196px;
  background: #3854b8;
}
.links {
  height: 60px;
  padding: 0 10px;
}
.links > div {
  width: 330px;
}
.link-text {
  font-weight: bold;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
}
.description {
  font-size: 16px;
}
.description > div {
  display: flex;
  justify-content: center;
  color: #fff;
}
.description-one {
  font-weight: 700;
}

.description-two {
  margin: 20px 0;
}

.description-three {
  font-size: 14px;
}
</style>
<style >
.footer .el-input__inner {
  height: 32px;
  line-height: 32px;
  border-radius: 17px;
  color: #3854b8;
  font-size: 16px;
}
.footer .el-input__icon {
  line-height: 32px;
}
.footer .el-icon-arrow-up:before {
  content: "";
}
.footer .el-input__icon {
  background: url("../../assets/image/home/select2.png") no-repeat 5px 8px;
}

.footer .el-select {
  display: block;
}
</style>