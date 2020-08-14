<template>
  <div class="noticeDetail">
    <div class="area">
      <epf-nav></epf-nav>
      <div class="detail">
        <div class="notice-title">
          <div class="h1">{{data.title}}</div>
          <div class="description">
            <div class="display align description-child">
              <span class="from">信息来源： 深圳市建设工程交易服务中心 </span>
              <span class="date">发布时间： 2020-08-01 </span>
              <span class="read">阅读量：2345</span>
              <span class="print display align color">
                <img src="@/assets/image/home/print.png"
                     alt="打印">
                <span style="">【打印】</span>
              </span>
            </div>

          </div>
        </div>
        <div class="notice-content"></div>
        <div class="notice-footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: {
        title: '揭阳市城市轨道交通3号线四期等5个项目勘察文件专项审查和施工图审查',

      }
    }
  }
}
</script>

<style scoped>
.detail {
  min-height: 600px;
  border: 1px solid rgba(229, 229, 229, 1);
  margin-bottom: 20px;
}
.h1 {
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  line-height: 56px;
}
.description {
  padding: 0 21px;
}
.description-child {
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
}
.print {
  margin-left: auto;
}
.date {
  margin: 0 40px;
}
</style>