
<template>
<div id="goodsDetail">
  <MyHeader title="我是商品详情"></MyHeader>
  {{ goodsId }}
</div>
</template>

<script>
import MyHeader from '../components/MyHeader'
export default {
  name: 'goodsDetail',
  data () {
    return {
    }
  },
  components: {
    MyHeader
  }
}
</script>
<style lang="css">

</style>
