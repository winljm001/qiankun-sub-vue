<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div class="dashboard-text" @click="jumpPage">跳转当前微应用页面</div>
    <div class="dashboard-text" @click="jumpOtherPage">跳转其他微应用页面</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    jumpPage() {
      this.$router.push('/form/index')
    },
    jumpOtherPage() {
      this.$router.push('/home')
      // history.pushState(null, null, '/home')
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
