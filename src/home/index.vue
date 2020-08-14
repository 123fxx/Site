<template>
  <div class="app">
    <myHeader></myHeader>

    <router-view></router-view>

    <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from './makeUp/header'

import myFooter from './makeUp/footer'

export default {
  components: {
    myHeader,
    myFooter,

  },
  data () {
    return {

      data: {},
      path: ''
    }
  },
  created () {
    this.path = this.$route.path
  }
}
</script>

<style scoped >
.main {
  padding-bottom: 30px;
}
</style>