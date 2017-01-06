<style scoped>
#home {
  position: absolute;
  top: 0;
  bottom: 50px;
  width: 100%;
  overflow: auto;
}

#home #nav {
  width: 100%;
  background-color: #fff;
  margin-bottom: 8px;
}

#home #nav ul {
  padding-top: 14px;
  width: 100%;
  overflow: hidden;
}

#home #nav ul li {
  height: 100%;
  text-align: center;
}

#home #nav ul li i {
  font-size: 27px;
  border-radius: 9px;
  padding: 7px;
  color: #fff;
  margin: 14px auto 8px auto;
  vertical-align: middle;
}

#home #nav ul li div {
  margin-top: 4px;
  margin-bottom: 14px;
  color: #333333;
}

#home #selling {
  width: 100%;
  margin-bottom: 8px;
  background-color: #fff;
}

#home .title {
  overflow: hidden;
}

#home .title .left {
  float: left;
  color: #333;
  font-size: 15px;
  /*font-weight: bold;*/
  line-height: 40px;
}

#home .title .left i {
  color: #03a9f4;
  vertical-align: text-bottom;
  margin: 0px 3px 0 10px;
  /*max-height: 15px;*/
  display: inline-block;
  font-size: 18px;
  line-height: 1;
}

#home .title .right {
  float: right;
  color: #333;
  font-size: 12px;
  line-height: 40px;
  padding-right: 10px;
}

#home #selling .mainAd {
  width: 100%;
  margin-bottom: 5px;
}

#home .featured {
  min-height: 200px;
}

#home .featured .car-img img {
  width: 100%;
  height: auto;
  position: relative;
  top: 0;
  left: 0;
}

#home .featured .car-img {
  /*padding-top: 5px;
            padding-bottom: 5px;
            padding-right: 10px;*/
  height: auto;
  width: 100%;
}

#home .featured .img-con {
  width: 100%;
  height: 100%;
  /*position: relative;*/
  /*padding-bottom: 66.66%;*/
}

#home .featured .car-info {
  /*height:115px;*/
  /*padding-left: 10px;*/
}

#home .featured .car-info .prop {
  height: 50%;
  text-align: left;
  padding-top: 8px;
  padding-left: 10px;
}

#home .car-info .prop p:first-child {
  font-size: 0.875rem;
}

#home .car-info .prop p:nth-child(2) {
  font-size: 0.75rem;
}

#home .car-info .price {
  margin-top: 14px;
}

#home #parts {
  width: 100%;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

#home .current-price {
  padding-left: 10px;
}

#home .origin-price {
  padding-left: 10px;
  padding-bottom: 3px;
}

#home .parts-item {
  padding-bottom: 3px;
}

#home #parts {
  background-color: #fff;
}

#home #recommend .tip {
  height: 46px;
  width: 100%;
}

#home .img-wrap {
  overflow: hidden;
  position: relative;
  padding-bottom: 100%;
  border: 1px solid transparent;
}

#home .img-wrap img {
  position: absolute;
  left: 0;
  top: 0;
  /*border: 1px solid transparent;*/
}

#home #parts .img-wrap img {
  position: absolute;
  left: 0;
  top: 0;
}

#home .goods-name {
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  font-size: 0.875rem;
}

#home .statusBar {
  width: 100%;
  height: 20px;
  position: absolute;
  top: 0;
  background-color: #fff;
  opacity: 0;
}

#home .pulldown {
  visibility: hidden;
}

#home .withPullDown {
  visibility: visible;
}

#home .more-txt {
  padding-right: 5px;
  margin-right: 5px;
}

#home .more-txt::after {
  background-color: #cacaca;
}

#home .addImg-pagination {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  text-align: center;
  z-index: 10;
}

#home .addImg-pagination>span {
  width: 8px;
  height: 8px;
  display: inline-block;
  background-color: #e5e5e5;
  border-radius: 100%;
  margin: 0 5px;
}

#home .addImg-pagination>span.active {
  background: #007aff
}

#home .col-33 .hotCat {
  background: #fff;
  width: 100%;
}

@media (min-width:414px) {
  #home .title .left,
  #home .title .right {
    line-height: 44px;
  }
}

#home #activitesBanner {
  width: 100%;
  margin-bottom: 8px;
  background-color: #fff;
  height: auto;
}

#home #activitesBanner img {
  width: 100%;
  height: auto;
}

#home .part-img-wrap {
  margin: 0 auto;
  width: 80%;
  padding-bottom: 80%;
}

#home .addImg-pagination {
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

#home .parts-wrapper {
  border: 1px solid transparent;
}

#home .cars-item {
  min-height: 120px;
}

#home .swiper-slide>div {
  width: 100%;
  height: 100%;
  background-image: url(../assets/imgs/placeholder-400-200.png);
  background-size: 100% 100%;
}

#home .col-33A {
  width: 100%;
}

#home .col-33A .img-wrap {
  height: 120px;
  padding-bottom: 0;
}
</style>

<template>
<div id="home" class="grid">
  <div id="nav">
    <ul>
      <li class="buy col-20" data-value="1" @click="empJump(1)"><i class="icon icon-car-buy" style="background-color: #0378ec"></i>
        <div class="h5">我要买车</div>
      </li>
      <li class="customize col-20" data-value="2" @click="empJump(2)"><i class="icon icon-car-diy" style="background-color: #fd491a"></i>
        <div class="h5">定制爱车</div>
      </li>
      <li class="boutique col-20" data-value="3" @click="empJump(3)"><i class="icon icon-car-parts" style="background-color: #fea203"></i>
        <div class="h5">精品配件</div>
      </li>
      <li class="serviceOl col-20" data-value="4" @click="empJump(4)"><i class="icon icon-insurance" style="background-color: #41c961"></i>
        <div class="h5">汽车保险</div>
      </li>
      <li class="dealer col-20" data-value="5" @click="empJump(5)"><i class="icon icon-dealer-locator" style="background-color: #ff3050"></i>
        <div class="h5">经销商查询</div>
      </li>
    </ul>
  </div>
  <!--热销车-->
  <div id="selling">
    <div class="title border-b">
      <div class="hot-car left more-app" data-value="3"><i class="icon-fire"></i><span class="h2">热销车</span></div>
      <div class="more-app right" data-value="3"><span class="more-txt border-r h4">更多</span><span class="h4">APP专属</span><i class="icon icon-arrow-right-2"></i>
      </div>
    </div>
    <div class="featured row gutter-no lazyload" id="featured">
      <div v-for="(car, index) in cars" class="cars-item" :class="index == 0 ? 'col-33A border-b' : 'col-33 border-r'" :data-url="car.href" :data-type="car.type">
        <div class="hotCat">
          <div class="img-wrap lazyload">
            <img :src="car.img" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--精品配件-->
  <div id="parts">
    <div class="title ">
      <div class="hot-parts left more-recommend" data-value="4"><i class="icon-car-parts-1"></i><span class="h2">精品配件</span></div>
      <div class="more-recommend right" data-value="4"><span class="more-txt border-r h4">更多</span><span class="h4">专为你推荐</span><i class="icon icon-arrow-right-2"></i></div>
    </div>
    <div class="row gutter-no lazyload border-t" id="partsList">
      <a v-for="(part, index) in parts" class="col-33 parts-item border-l border-b" :data-url="part.href" :data-type="part.type">
        <div class="parts-wrapper">
          <div class="img-wrap lazyload part-img-wrap">
            <img :src="part.img">
          </div>
          <div class="goods-name nowrap h3">{{ part.title }}</div>
          <div class="goods-price current-price price-int-point">
            <span class="price-symbol">¥</span><span class="price-int h2">{{ part.price }}</span></div>
        </div>
      </a>
    </div>
  </div>
  <Recommend></Recommend>
</div>
</template>

<script>
// import { mapActions } from 'vuex'
import Recommend from '../components/Recommend'
import Conf from '../util/conf'
export default {
  name: 'home',
  data() {
    return {
      cars: [],
      parts: [],
      ads: []
    }
  },
  components: {
    Recommend
  },
  created() {
    this.loadCars()
    this.loadParts()
  },
  methods: {
    empJump(index) {
      switch (index) {
        case 1:
          this.$router.push({
            path: 'mine'
          });
          break;
        case 1:
          break;
        case 1:
          break;
        case 1:
          break;
      }
    },
    loadParts() {
      var _self = this
      this.fetchData({
        url: Conf.baseURL + '/main/actives/list',
        data: {
          channelId: 'app_home_parts',
          status: 0,
          pageSize: '',
          pageIndex: ''
        }
      }, function(result) {
        _self.parts = result.data
      })
    },
    loadCars() {
      var _self = this
      this.fetchData({
        url: Conf.baseURL + '/main/actives/list',
        data: {
          channelId: 'app_home_car',
          status: 0,
          pageSize: '',
          pageIndex: ''
        }
      }, function(result) {
        _self.cars = result.data
      })
    },
    fetchData(params, callback) {
      this.$http({
        url: params.url,
        params: params.data
      }).then((response) => {
        if (response && response.status === 200) {
          const result = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
          if (result && result.result == 0) {
            if (callback) callback(result)
          } else {
            console.log('数据错误...')
          }
        }
      })
    },
    setBorderClass(arr) {
      var itemClass = '';
      var length = arr.length
      var temp = length % 3
      for (var i = 1; i <= length; i++) {
        //设置底部边框,最后一排不存在底部边框
        //1.总数不是3的倍数的最后几个
        //2.总数小于3
        //3.总数刚好是3的倍数的最后一排
        if (i > (length - temp) || length <= 3 || (temp === 0 && i > (length - 3))) { //最后一排
          itemClass = '';
        } else {
          itemClass = 'border-b ';
        }

        //设置左右边框
        if (i % 3 === 1 && i <= (length - temp + 1)) { //每列第一个去除最后一排
          itemClass += '';
        } else if (i === length && i % 3 !== 0) { //最后一个元素不是刚好在3的倍数位置
          itemClass += ' border-l';
        } else if (i !== 1) {
          itemClass += ' border-l';
        }
        arr[i].borderClass = itemClass
      }
      return arr;
    }
  }
}
</script>
