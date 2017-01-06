<script>

  export default {
    name: 'httpUtil',
    method: {
      doPost: function(url, params) {
        if(!url) {
          console.log('空的url...')
        }
        this.$http.post(url, )
      }
    }
  }
</script>
