<template>
  <div class="nav display align">
    <div v-for="(item,index) in $store.state.tabs"
         :key="index">
      <span :class="{'color':item.path===path}">
        {{item.title}}
      </span>
      <span v-if="index!==$store.state.tabs.length-1"
            class="mark">
        >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      path: ''
    }
  },
  created () {
    this.path = this.$route.path
  },
  methods: {

  },
}
</script>

<style scoped>
.nav {
  height: 40px;
  color: #999;
}
.mark {
  margin: 0 5px;
}
</style>