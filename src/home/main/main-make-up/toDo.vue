<template>
  <div class="home">

    <div class="transaction w">
      <epf-title :title="'交易数据'"></epf-title>
      <div class="tran_bd">
        <div class="statistics tran_box">
          <h3>
            <span>2020年公告统计</span>
          </h3>
          <div class="release">
            <div class="release_left">
              <p>发布公告</p>
              <i>78</i>（宗）
            </div>
            <div class="release_right">
              <p>成交结果</p>
              <i>32</i>（宗）
              <div class="bor"></div>
            </div>
          </div>
          <h3>
            <span>2020年交易情况统计</span>
          </h3>
          <div class="yeardeal">
            <div>
              <span>2020年交易数</span>
              <i>（宗）</i>
              <p>2346345566</p>
            </div>
            <div>
              <span>2020年交易额</span>
              <i>（亿元）</i>
              <p>3425678.23</p>
            </div>
            <div>
              <span>节约资金</span>
              <i>（亿元）</i>
              <p>45.6</p>
            </div>
            <div>
              <span>增值金额</span>
              <i>（亿元）</i>
              <p>345.2</p>
            </div>
          </div>
        </div>
        <div class="trends tran_box">
          <h3>
            <span>交易趋势</span>
          </h3>
          <trends></trends>
        </div>
        <div class="proportion tran_box">
          <h3>
            <span>交易类型占比</span>
          </h3>
          <proportion></proportion>
        </div>
      </div>
    </div>
    <div class="guide w">
      <epf-title :title="'办事指南'"></epf-title>
      <div class="guide_bd">
        <div class="guide_bdleft">
          <ul>
            <li>
              <div>

                <img src="@/assets/image/home/guide.png"
                     alt />
                <p>服务指南</p>
              </div>

            </li>
            <li>
              <div>

                <img src="@/assets/image/home/guide.png"
                     alt />
                <p>交易流程</p>
              </div>

            </li>
            <li>
              <div>
                <img src="@/assets/image/home/transaction.png"
                     alt />
                <p>业务咨询</p>
              </div>
            </li>
            <li>
              <div>
                <img src="@/assets/image/home/report.png"
                     alt />
                <p>投诉举报</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="guide_bdright">
          <v-Map :coordinate="'0,0'"></v-Map>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Map from "@/components/map";
import trends from "./homeEcharts/trends";
import proportion from "./homeEcharts/proportion";
export default {
  components: {
    "v-Map": Map,
    trends,
    proportion,
  },
  data () {
    return {};
  },
  mounted () { },
  methods: {},
};
</script>

<style scoped>
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #333333;
}
body {
  font-family: MicrosoftYaHei;
  font-size: 14px;
}
i {
  font-style: normal;
}

.transaction .tran_hd,
.guide .guide_hd {
  height: 44px;
  background: rgba(247, 248, 251, 1);
}
.tran_hd h3,
.guide_hd h3 {
  width: 134px;
  height: 44px;
  background: #3854b8;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  line-height: 44px;
  border-top-right-radius: 15px;
  box-shadow: 5px 0px 0px #e22e2e;
}
.tran_bd {
  display: flex;
  margin: 20px 0;
}
.tran_box {
  width: 32%;
  height: 368px;
  margin-right: 20px;
  border: 1px solid #e5e5e5;
}
.proportion {
  margin-right: 0px;
}
.tran_box h3 {
  height: 40px;
  font-size: 14px;
  font-weight: bold;
  color: #3854b8;
  text-align: left;
  line-height: 40px;
  border-bottom: 1px solid #e5e5e5;
}
.tran_box h3 span {
  padding-left: 10px;
  display: inline-block;
  border-bottom: 3px solid #3854b8;
}
.release {
  display: flex;
  margin: 20px 10px 10px 10px;
  height: calc(40% - 41px);
}
.release_left {
  width: 177px;
  background: rgba(82, 118, 233, 1);
}
.release_left,
.release_right {
  height: 88px;
  padding-left: 20px;
  font-weight: 400;
  color: #ffffff;
  text-align: left;
  padding-top: 15px;
}
.release_left i,
.release_right i {
  margin-right: 5px;
  font-size: 30px;
  font-family: STHupo;
  font-weight: 400;
}
.release_right {
  position: relative;
  width: 198px;
  background: #3854b8;
}
.release_right .bor {
  position: absolute;
  top: 0;
  left: -25px;
  width: 0;
  height: 0;
  border-color: transparent #3854b8 transparent transparent;
  border-style: solid;
  border-width: 102px 25px 0 0;
}
.yeardeal {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
  height: calc(40% - 41px);
}
.yeardeal div {
  flex: 40%;
  padding: 5px 0px 10px 10px;
  text-align: left;
}
.yeardeal i {
  color: #3854b8;
}
.yeardeal div:nth-child(1),
.yeardeal div:nth-child(2) {
  border-bottom: 1px solid #e5e5e5;
}
.yeardeal div:nth-child(2),
.yeardeal div:nth-child(4) {
  border-left: 1px solid #e5e5e5;
}
.yeardeal span {
  color: #333333;
}
.yeardeal p {
  margin-top: 10px;
  color: #3854b8;
  font-size: 20px;
}
.guide_bd {
  margin: 20px 0px;
  display: flex;
}
.guide_bdleft {
  width: 75%;
}
.guide_bdleft ul {
  display: flex;
}
.guide_bdleft li {
  width: 25%;
  height: 240px;
  margin-right: 10px;
  color: #ffffff;
  background-color: #3854b8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.guide_bdleft img {
  width: 72px;
  height: 72px;
}
.guide_bdleft div {
  text-align: center;
}
.guide_bdleft a {
  color: #ffffff;
}
.guide_bdleft p {
  margin-top: 20px;
}
.guide_bdright {
  width: 25%;
  height: 240px;
  margin-left: 15px;
  background-color: #f7f8fb;
}
/* 尾部开始 */
</style>