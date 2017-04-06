//默认
const routers = [{
  path: '/',
  name: 'home',
  component (resolve) {
    require.ensure(['./views/Home.vue'], () => {
      resolve(require('./views/Home.vue'))
    })
  }
}, {
  path: '/home',
  name: 'home',
  component (resolve) {
    require.ensure(['./views/Home.vue'], () => {
      resolve(require('./views/Home.vue'))
    })
  }
}, {
  path: '/promotions',
  name: 'promotions',
  component (resolve) {
    require.ensure(['./views/Promotions.vue'], () => {
      resolve(require('./views/Promotions.vue'))
    })
  }
}, {
  path: '/cart',
  name: 'cart',
  component(resolve) {
    require.ensure(['./views/Cart.vue'], () => {
      resolve(require('./views/Cart.vue'));
    });
  }
}, {
  path: '/mine',
  name: 'mine',
  component(resolve) {
    require.ensure(['./views/Mine.vue'], () => {
      resolve(require('./views/Mine.vue'));
    });
  }
}, {
  path: '/goods-detail',
  name: 'goods-detail',
  component(resolve) {
    require.ensure(['./components/GoodsDetail.vue'], () => {
      resolve(require('./components/GoodsDetail.vue'));
    });
  }
}];

export default routers;
