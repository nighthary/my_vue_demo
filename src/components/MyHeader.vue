
<template>
<div id="myHeader">
  <i class="icon-arrow-left-2 go-back" @click="goBack"></i>
  <h1>{{ title }}</h1>
</div>
</template>

<script>
export default {
  name: 'myHeader',
  props: ['title'],
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  components: {}
}
</script>
<style lang="css">
.go-back {
    width: 45px;
    font-size: 23px;
    float: left;
    padding-left: 12px;
}
</style>
