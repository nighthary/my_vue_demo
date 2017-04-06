
<template>
<div id="commonThinkLike">
  <div class="container1">
    <div class="grid">
      <div id="_like">
        <div class="_line border-b"></div>
        <div class="_text border-radius common-bg-color">商品<i class="icon-heart"></i>推荐</div>
      </div>
      <div id="dataContent" class="row gutter-yes">
        <div class="col-50" v-for="item in lists" :good-id="item.id" @click="goDetail(item.id)">
          <div class="_goods-item">
            <div class="_img-wrap lazyload">
              <img class="good" :src="item.img" />
            </div>
            <div class="_good-name nowrap h3">
              {{ item.name }}
            </div>
            <div class="_price price-int-point">
              <span class="price-symbol h5">¥</span>
              <span class="n-price price-int h2">{{ item.price }}</span>
              <span class="h5">{{ item.originalPrice }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="_message msg-notice">
        <div class="empty">我也是有底线的
          <div class="_reload btn-xs">重新加载</div>
        </div>
        <div class="error">数据加载失败
          <div class="_reload btn-xs">重新加载</div>
        </div>
      </div>
      <div class="pullup loading" v-show="showLoading">
        <span class="icon"></span>
        <span class="label">加载中,请稍候...</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Conf from '../util/conf'
import GoodsDetail from '../components/GoodsDetail'

export default {
  name: 'recommend',
  data() {
    return {
      lists: [],
      pageIndex:0,
      pageSize:5,
      showLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.$http({
        url: Conf.baseURL + '/main/user/recommend',
        method: 'GET',
        params: {
          pageIndex: this.pageIndex,
          pageSize: this.pageSize
        }
      }).then((response) => {
        if (response && response.status === 200) {
          const result = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
          if (result && result.result == 0) {
            this.lists = result.data
            this.showLoading = false
          } else {
            console.log('数据错误...')
            this.showLoading = false
          }
        }
      })
    },
    goDetail(id) {
      this.$router.push({
        path: '/goods-detail',
        params: {
          goodsId:id
        }
      });
    }
  },
  components: {
    GoodsDetail
  }
}
</script>
<style lang="css">

#commonThinkLike .container1 {
    position: relative;
    width: 100%;
    height: 100%;
}

#commonThinkLike #_like {
    width: 100%;
    height: 44px;
    line-height: 44px;
}

#commonThinkLike ._line {
    width: 100%;
    top: 24px;
    position: absolute;
    height: 0px;
}

#commonThinkLike ._text {
    width: 75px;
    height: 20px;
    border-radius: 20px;
    line-height: 20px;
    text-align: center;
    position: absolute;
    margin-top: 13px;
    left: 50%;
    margin-left: -38px;
    font-size: 12px;
    color: #999;
    z-index: 10;
}

#commonThinkLike ._goods-item {
    background-color: #fff;
    padding-bottom: 3px;
}

#commonThinkLike ._price {
    padding: 0 0 0 10px;
    position: relative;
}

#commonThinkLike ._real-price {
    font-weight: normal !important;
    padding-right: 10px;
    position: absolute;
    right: 0;
    bottom: 0;
}

#commonThinkLike .grid>._hidden {
    display: none !important;
}

#commonThinkLike ._message {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    display: none;
    font-size: 14px;
}

#commonThinkLike ._message>div {
    display: none
}

#commonThinkLike ._message.visible {
    display: block;
}

#commonThinkLike ._message > div.visible {
    display: block;
}

#commonThinkLike ._message ._reload {
    vertical-align: middle;
    margin-left: 5px;
    display: none;
}

#commonThinkLike .pullup {
    position: relative;
}

#commonThinkLike ._good-name {
    width: 100%;
    padding: 0 10px;
    color: #333;
}

#commonThinkLike .empty {
    font-weight: bold;
    padding: 0;
}

#commonThinkLike .withpullup {}

#commonThinkLike .pullup {
    display: block;
}

#commonThinkLike ._img-wrap {
    overflow: hidden;
    position: relative;
    padding-bottom: 100%;
}

#commonThinkLike ._img-wrap img {
    position: absolute;
    box-sizing: border-box;
    height: auto !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    width: auto;
    max-width: 100%;
}

#commonThinkLike .border-b:after {
    background-color: #999;
}

#commonThinkLike .border-radius:before {
    border: 1px solid #999;
    border-radius: 3.5rem;
}

#commonThinkLike .icon-heart {
    font-size: 8px;
}

#commonThinkLike #dataContent .col-50:nth-child(odd) {
    clear: both;
}

#commonThinkLike .font-size-title {
    font-size: 0.875rem;
}

#commonThinkLike .font-size-text {
    font-size: 0.625rem;
}

</style>
