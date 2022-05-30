<template>
  <button class="v-btn" :type="btnType">
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: 'VBtn',
  props: {
    btnType: {String, default: 'button'},
    btnText: '',
  }
}
</script>

<style lang="less" scoped>
@import './styles/v-btn.less';
</style>