<template>
  <div class="main">
    <div class="area">
      <div class="first-step display">
        <div class="left">
          <el-carousel :autoplay="false"
                       height="330px">
            <el-carousel-item v-for="item in 4"
                              :key="item">
              <div style="background:#000;height:330px"></div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="middle">

          <el-tabs style="height:100%">
            <el-tab-pane>
              <div slot="label">通知公告</div>
              <div class="article-title display"
                   v-for="(item,index) in notice"
                   :key="index"
                   @click="toDetail(item)">
                <div class="title-left">
                  <span class="red-point"></span>
                  <span style="margin-left:3px">揭阳公共资源交易中心关于广州药品集团采购平台升哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈啊</span>
                </div>
                <div class="title-right">
                  2020-07-31
                </div>

              </div>

            </el-tab-pane>
            <el-tab-pane label="中心动态">中心动态</el-tab-pane>
            <el-tab-pane label="政声传递">政声传递</el-tab-pane>

          </el-tabs>
          <span class="more"
                @click="jump()">更多</span>
        </div>
        <div class="right">

          <div @click="toSome('login')"
               v-for="(item,index) in login"
               @mouseover="over (item,index,'main') "
               @mouseout="out(item,index,'main')"
               :key="index">
            <img :src="item.url"
                 alt="登录">
          </div>

        </div>
      </div>
      <div class="second-step display">
        <div class="logo-text">
          揭阳市公共资源 电子交易平台
        </div>
        <div class="logo-push">
          <div class="push-top display align">
            <div class="logo-one"
                 @mouseover="over (item,index,'push') "
                 @mouseout="out(item,index,'push')"
                 v-for="(item,index) in logoDataTop"
                 :key="index">
              <div>
                <img :src="item.url"
                     alt="">

                <div class="logon-one-text">
                  {{item.name}}
                </div>
              </div>

            </div>

          </div>
          <div class="push-bottom display align">

            <div class="logo-one"
                 :class="{'four':index===0,'five':index===1}"
                 v-for="(item,index) in logoDataBottom"
                 @mouseover="over (item,index+4,'push') "
                 @mouseout="out(item,index+4,'push')"
                 :key="index">
              <div>
                <img :src="item.url"
                     alt="">

                <div class="logon-one-text">
                  {{item.name}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="third-step">
        <tabs style="margin-top:20px"></tabs>
        <tabs style="margin-top:20px"></tabs>
        <tabs style="margin-top:20px"></tabs>
      </div>

      <div class="fourth-step">
        <to-do></to-do>
      </div>

    </div>

    <advertising></advertising>
    <card></card>
  </div>
</template>

<script>
import tabs from '@/components/tabs'

import myMap from '@/components/map'
import toDo from './main-make-up/toDo'
import advertising from './main-make-up/advertising'
import card from './main-make-up/card'
export default {
  data () {
    return {
      title: '办事工具',
      notice: [{}, {}, {}, {}, {}, {}, {}, {},],
      login: [

        { name: '登录', url: require('@/assets/image/home/main1.png'), jump: 'login' },
        { name: '注册', url: require('@/assets/image/home/main2.png'), jump: 'register' },
        { name: '广东政务服务网', url: require('@/assets/image/home/main3.png'), jump: 'guang' },
      ],
      logoDataTop: [
        { name: '政府采购', url: require('@/assets/image/home/push1.png') },
        { name: '政府采购', url: require('@/assets/image/home/push2.png') },
        { name: '政府采购', url: require('@/assets/image/home/push3.png') },
        { name: '政府采购', url: require('@/assets/image/home/push4.png') },
      ],
      logoDataBottom: [
        { name: '政府采购', url: require('@/assets/image/home/push5.png') },
        { name: '政府采购', url: require('@/assets/image/home/push6.png') },
        { name: '政府采购', url: require('@/assets/image/home/push7.png') },
        { name: '政府采购', url: require('@/assets/image/home/push8.png') },
      ]


    }
  },
  components: {
    tabs,
    toDo,
    myMap,
    advertising,
    card
  },
  created () {



  },
  mounted () {

  },
  methods: {
    over (item, index, name) {
      let num = index + 1
      item.url = require('@/assets/image/home/' + name + num + 'B.png')
    },
    out (item, index, name) {
      let num = index + 1
      item.url = require('@/assets/image/home/' + name + num + '.png')
    },
    toSome (key) {
      switch (key) {
        case 'login':
          alert('login')
          break;
        case 'register':
          alert('register')
          break;
        case 'guang':
          alert('guang')
          break;

      }
    },
    jump () {
      this.$router.push('/notice')
    },
    toDetail (item) {
      this.$router.push('/noticeDetail?id=' + item.id)
    }
  }
}
</script>

<style scoped>
.first-step {
  height: 330px;
  overflow: hidden;
}
.left {
  width: 460px;
  height: 330px;
}

.first-step {
}

.middle {
  margin: 0 22px;
  width: 462px;
  position: relative;
  height: 330px;
  overflow: hidden;
}

.more {
  font-size: 14px;
  color: #9a9a9a;
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
}
.article-title {
  height: 37.5px;
  align-items: flex-end;
  cursor: pointer;
}
.title-left:hover {
  color: #3854b8;
}
.red-point {
  width: 6px;
  height: 6px;
  background: rgba(226, 46, 46, 1);
  border-radius: 50%;
  display: inline-block;
}

.title-left {
  width: calc(100% - 110px);
  color: #343434;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title-right {
  width: 80px;
  color: #9a9a9a;
  margin-left: 30px;
  text-align: right;
}

.right {
  width: 234px;
  height: 100%;
  overflow: hidden;
}
.right > div {
  cursor: pointer;
}
.right > div:nth-child(1) {
  height: 80px;
}
.right > div:nth-child(2) {
  height: 80px;
  margin: 10px 0;
}
.right > div:nth-child(3) {
  height: 150px;
}

.second-step {
  height: 222px;
  overflow: hidden;
  margin-top: 20px;
}

.logo-text {
  width: 220px;
  background: #eaefff;
  font-weight: bold;
  color: #3854b8;
  font-size: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 0 54px;
  line-height: 25px;
}
.logo-push {
  width: calc(100% - 220px);
}
.logo-push > div {
  height: 110px;
  background: #f7f8fb;
}
.logo-push > div:nth-child(2) {
  margin-top: 2px;
}
.logo-one {
  width: 25%;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-top: 12px;
}
.logo-one > div {
  text-align: center;
}
.logo-one:hover {
  background-color: #3753b7;
  color: #fff;
}

.logo-one.four:hover {
  background-color: #2989c7;
  color: #fff;
}
.logo-one.five:hover {
  background-color: #4779e3;
  color: #fff;
}
.logon-one-text {
  margin: 14px;
}
.main {
  margin-top: 20px;
  position: relative;
}
</style>
<style>
.main .el-carousel__button {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 1);
  background-color: transparent;
}

.main .el-carousel__indicator.is-active button {
  background: rgba(244, 10, 10, 1);
  border: none;
}

.main .el-carousel__indicators--horizontal {
  left: 85%;
}

.main .el-tabs__item {
  height: 30px;
  line-height: normal;
  padding: 0 26px;
}

.main .el-tabs__nav-wrap::after {
  height: 1px;
  background: rgba(238, 238, 238, 1);
}

.main .el-tabs__item:hover {
  color: #3854b8;
}

.main .el-tabs__item.is-active {
  color: #3854b8;
}

.main .el-tabs__active-bar {
  background: #e22e2e;
}

.main .el-tabs__header {
  margin: 0;
}
</style>