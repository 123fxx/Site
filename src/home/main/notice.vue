<template>
  <div class="notice">
    <div class="area">
      <epf-nav></epf-nav>
      <div class="notice-contain display">
        <div class="notice-left">
          <div class="notice-left-one  "
               v-for="(item,index) in list"
               :key="index"
               :class="{'active':item.name===active}"
               @click="active=item.name">
            <div class="blue display align justify">
              <span>
                {{item.name}}
              </span>
              <span class="icon"
                    :class="item.name===active?'el-icon-caret-top':'el-icon-caret-bottom'">
              </span>
            </div>
          </div>
        </div>
        <div class="notice-right">
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
        </div>
      </div>
      <div class="page display">
        <el-pagination small
                       background
                       layout="prev, pager, next"
                       :total="50">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { name: '通知公告' }, { name: '中心动态' }, { name: '政声传递' }
      ],
      active: '通知公告',
      notice: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},],
    }
  },
  methods: {
    toDetail (item) {
      this.$router.push('/noticeDetail?id=' + item.id)
    }
  }
}
</script>

<style scoped>
.notice {
}
.notice-contain {
  height: 544px;
  overflow: hidden;
  margin-top: 20px;
}
.notice-left {
  width: 185px;
  height: 100%;
}

.notice-right {
  margin-left: 20px;
  width: calc(100% - 200px);
  height: 100%;
  border: 1px solid rgba(229, 229, 229, 1);
  padding: 21px 23px;
}
.page {
  margin: 20px 0;
  justify-content: flex-end;
}
.notice-left-one {
  height: 50px;
  background: #fff;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-left: 1px solid rgba(229, 229, 229, 1);
  border-right: 1px solid rgba(229, 229, 229, 1);
  border-bottom: 1px solid rgba(229, 229, 229, 1);
}
.notice-left-one:nth-child(1) {
  border-top: 1px solid rgba(229, 229, 229, 1);
}
.blue {
  height: 50px;
  background: #fff;
  width: 180px;
  margin-left: 5px;
}

.notice-left-one.active {
  background: #e12d2d;
  border: none;
  font-weight: bold;
  color: #fff;
}
.notice-left-one.active .blue {
  background: #3753b7;
}
.icon {
  position: absolute;
  right: 10px;
  top: 20px;
}

.article-title {
  align-items: flex-end;
  cursor: pointer;
  line-height: 34px;
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
  color: #333;
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
</style>