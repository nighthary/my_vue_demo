<style lang="css">

#mymenu footer {
    position: fixed;
    bottom: 0;
    height: 50px;
    background-color: #f6f6f6;
    z-index: 100;
    line-height: 1;
}

#mymenu footer .tab-item {
    display: table-cell;
    width: 1%;
    color: #929292;
    text-align: center;
    vertical-align: middle;
    padding-top: 6px;
}

#mymenu footer .detailicon {
    font-size: 25px;
    font-family: "iconfont";
}

#mymenu footer .footerName {
    margin-bottom: 4px;
    margin-top: 3px;
    font-size: 10px;
}

#mymenu #cart-count-num {
    display: none;
}

#mymenu .tab-item.active {
    color: rgb(3, 169, 244);
}

#mymenu .tab-item.active i {
    color: rgb(3, 169, 244);
}

</style>

<template>

<div id="mymenu">
    <footer class="border-t">
        <div id="cart-count-num">2</div>
        <div class="tab-item ui_main" @click="tabClick(1)" :class="nowIndex == 1 ? 'active' : ''">
            <i class="item-main detailicon " :class="nowIndex == 1 ? 'icon-home-fill' : 'icon-home'"></i>
            <div class="txt-main footerName">首页</div>
        </div>

        <div class="tab-item ui_promotions" @click="tabClick(2)" :class="nowIndex == 2 ? 'active' : ''">
            <i class="item-promotions detailicon" :class="nowIndex == 2 ? 'icon-activity-fill' : 'icon-activity'"></i>
            <div class="txt-promotions footerName">活动</div>
        </div>

        <div class="tab-item ui_cart" @click="tabClick(3)" :class="nowIndex == 3 ? 'active' : ''">
            <i class="item-cart detailicon" :class="nowIndex == 3 ? 'icon-cart-fill' : 'icon-cart'"></i>
            <div class="txt-cart footerName">购物车</div>
        </div>

        <div class="tab-item ui_my" @click="tabClick(4)" :class="nowIndex == 4 ? 'active' : ''">
            <i class="item-my detailicon" :class="nowIndex == 4 ? 'icon-profile-fill' : 'icon-profile'"></i>
            <div class="txt-my footerName">我</div>
        </div>
    </footer>
</div>

</template>

<script>

export default {
    name: 'mymenu',
    data() {
        return {
            nowIndex: 1
        }
    },
    watch: {
      '$route' : 'changeTab'
    },
    methods: {
        changeTab (){//根据当前的路由来判断选中的tab栏
          var nowRoute = this.$route;
          switch(nowRoute.name){
            case '':
              this.nowIndex = 1;
              break;
            case 'promotions':
              this.nowIndex = 2;
              break;
            case 'cart':
              this.nowIndex = 3;
              break;
            case 'mine':
              this.nowIndex = 4;
              break;
          }
        },
        tabClick(clickIndex) {
            switch (clickIndex) {
                case 1:
                    this.$router.push({
                        path: '/'
                    });
                    this.nowIndex = 1
                    break;
                case 2:
                    this.$router.push({
                        path: 'promotions'
                    });
                    this.nowIndex = 2
                    break;
                case 3:
                    this.$router.push({
                        path: 'cart'
                    });
                    this.nowIndex = 3
                    break;
                case 4:
                    this.$router.push({
                        path: 'mine'
                    });
                    this.nowIndex = 4
                    break;
            }
        }
    }
}

</script>
