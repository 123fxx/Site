<template>
  <div class="tabs">
    <div class="top display">
      <div class="tabs-title_big">
        <div class="tabs-title_small">
          {{data.title}}
        </div>
      </div>
      <div class="tabs-head display">
        <div v-for="(item,index) in data.head"
             :key="index"
             class="tabs-head-one"
             @click="change(item)"
             :class="{'active':item.name===activeName}">
          <span>{{item.name}}</span>
        </div>
      </div>
      <div style="margin-left:auto;color:#999999;padding-right:20px;cursor:pointer">
        更多 > >
      </div>
    </div>
    <div class="content">
      <div class="content-tr display"
           v-for="(item,index) in data.list"
           :key="index">
        <div class="tr-left">
          {{item.content}}
        </div>
        <div class="tr-right display align">
          <div class="state"
               :class="{'warning':item.state==='进行中','common':item.state==='已结束'}">
            {{item.state}}
          </div>
          <div class="date">
            {{item.date}}
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: {
        title: '建设工程',
        head: [{
          id: '1',
          name: '采购公告'
        },
        {
          id: '1',
          name: '采购公告2'
        },
        {
          id: '1',
          name: '采购公告3'
        },
        {
          id: '1',
          name: '采购公告4'
        },
        {
          id: '1',
          name: '采购公告5'
        }],
        list: [{
          content: '【公开招标】广东省揭阳市人民检察院“档案数字化采购”项目公开招标采购公告正式项目公开招标采购公',
          date: '2020-07-31',
          state: '进行中'
        },
        {
          content: '【公开招标】广东省揭阳市人民检察院“档案数字化采购”项目公开招标采购公告正式项目公开招标采购公',
          date: '2020-07-31',
          state: '进行中'
        },
        {
          content: '【公开招标】广东省揭阳市人民检察院“档案数字化采购”项目公开招标采购公告正式项目公开招标采购公',
          date: '2020-07-31',
          state: '进行中'
        },
        {
          content: '【公开招标】广东省揭阳市人民检察院“档案数字化采购”项目公开招标采购公告正式项目公开招标采购公',
          date: '2020-07-31',
          state: '进行中'
        },
        {
          content: '【公开招标】广东省揭阳市人民检察院“档案数字化采购”项目公开招标采购公告正式项目公开招标采购公',
          date: '2020-07-31',
          state: '已结束'
        }]
      },
      activeName: '采购公告'
    }
  },
  methods: {
    change (item) {
      this.activeName = item.name
    }
  }
}
</script>

<style scoped>
.tabs {
  line-height: 44px;
}
.top {
  height: 44px;
  background: #f7f8fb;
}
.tabs-title_small {
  width: 130px;
  height: 44px;
  background: rgba(56, 84, 184, 1);
  border-radius: 0px 16px 0px 0px;

  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
}

.tabs-title_big {
  width: 136px;
  height: 44px;
  background: #e22e2e;
  border-radius: 0px 16px 0px 0px;
}
.tabs-head {
  font-size: 14px;
  padding-left: 24px;
}

.tabs-head-one {
  margin-right: 70px;
  cursor: pointer;
  position: relative;
}
.tabs-head-one.active {
  font-weight: bold;
  color: rgba(56, 84, 184, 1);
}

.tabs-head-one.active::after {
  content: "";
  width: 30px;
  height: 3px;
  background: #3854b8;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -15px;
}

.content {
  padding: 20px;
  border: 1px solid #e2e8ff;
  border-top: none;
}
.content .content-tr {
  justify-content: space-between;
}

.state {
  padding: 1px 7px;
  text-align: center;
  font-size: 12px;
  margin-right: 10px;
  border-radius: 2px 6px 2px 6px;
  line-height: normal;
  color: #fff;
}
.tr-left {
  cursor: pointer;
  width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.warning {
  background: #f7b751;
}
.common {
  background: #999999;
}
.date {
  color: #999999;
}
</style>