<template>
  <div class="top">
    <div class="header">
      <div class="area area-contain">
        <div class="left">
          <div>
            欢迎来到揭阳市公共资源交易中心
          </div>
          <div style="margin:0 20px">
            今天是
            {{weather.date}}
            {{weather.week}}

          </div>

          <div class="display align">
            <img :src="'http://tq.daodaoim.com//tianqiapi/skin/pitaya/'+this.weather.wea_img+'.png'"
                 alt=""
                 class="weather-img">
            <span>
              {{weather.tem2}} - {{weather.tem1}}
            </span>
          </div>

          <div>
          </div>
        </div>
        <div class="right">
          <span>
            分享至:
          </span>
          <span>
            <img src="@/assets/image/home/icon1.png"
                 alt="">
          </span>
          <span>
            <img src="@/assets/image/home/icon2.png"
                 alt="">
          </span>
          <span>
            <img src="@/assets/image/home/icon3.png"
                 alt="">
          </span>
        </div>
      </div>

    </div>

    <div class="banner"
         :style="{backgroundImage:'url('+require('@/assets/image/home/banner.png')+')'}">
    </div>

    <div class="nav">
      <div class="area display"
           style="justify-content:space-between">
        <div class="nav-content display">
          <div v-for="(item,index) in nav"
               :key="index"
               class="nav-content-one display align justify"
               :class="{'active':item===navActive}"
               @click="navClick(item)">
            {{item}}

          </div>
        </div>
        <div class="nav-search display align">
          <el-input placeholder="请输入关键词"
                    v-model="input4">
            <i slot="prefix"
               class="el-input__icon el-icon-search"></i>
          </el-input>
          <div class="nav-button display align justify">
            搜索
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      weather: {
        date: '',
        wea: '',
        week: '',
        air_tips: '',
        wea_img: ''
      },
      input4: '',
      datetime: '',
      nav: ['首页', '交易信息', '政策法规', '政务公开', '资料下载', '诚信体系', '操作手册'],
      navActive: '首页'
    }
  },
  components: {

  },
  created () {

    this.getWeather()

  },
  mounted () {

  },
  methods: {
    navClick (item) {
      this.navActive = item
    },
    getWeather (val) {
      this.$axios.get('https://www.tianqiapi.com/api/?version=v1&city=揭阳&appid=23443729&appsecret=RyCI1McN').then(res => {
        if (res.status !== 200) {
          return
        }
        this.weather = res.data.data[0]
      });
    },
  }
}
</script>

<style scoped>
.header {
  height: 23px;
  background: #efefef;
}
.area-contain {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  align-items: center;
}
.weather-img {
  width: 20px;
  height: 20px;
  display: inline-block;
}
.banner {
  height: 140px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.left,
.right {
  display: flex;
  align-items: center;
}
.right img {
  width: 20px;
  height: 20px;
  margin: 0 12px;
}
.nav {
  height: 50px;
  background: #3854b8;
  color: #fffeff;
  font-size: 14px;
  font-weight: Bold;
}

.nav-content-one {
  height: 50px;
  padding: 0 34px;
  cursor: pointer;
  margin-right: 10px;
}
.nav-content-one.active {
  background: #e22e2e;
}
.nav-button {
  width: 40px;
  font-weight: 400;
  height: 32px;
  background: #e22e2e;
}
</style>
<style >
.nav .el-input__inner {
  height: 32px;
  line-height: 32px;
  width: 200px;
  border-radius: 0;
}

.nav .el-input__icon {
  line-height: 32px;
}

.nav .el-input {
  width: auto;
}
</style>