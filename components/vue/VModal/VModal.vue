<template>
  <div>
    <div 
      class="shadow" 
      :class="{'show': open}"
      @click="hideModal"
    >
    {{ removeBodyOverflow }}
    </div>
    <div :class="classes">
      <div class="v-modal-top">
        <slot name="title" />
        <svg 
          class="v-modal__btn-close"
          width="20px"
          height="20px"
          @click="hideModal"

        >
          <use href="./svg/VModal.svg#close" />
        </svg>
      </div>
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VModal',
  props: {
    sidebar: { Boolean, default: false },
    sidebarLeft: { Boolean, default: false },
    open: { Boolean, default: false },
  },
  computed: {
    classes() {
      return {
        'v-modal': true,
        'sidebar': this.sidebar,
        'sidebar-left': this.sidebar && this.sidebarLeft,
        'open': this.open,
      }
    },
    removeBodyOverflow() {
    if (this.open) document.body.style.overflow = 'hidden';
      else document.body.removeAttribute('style');
    }
  },
  methods: {
    hideModal() {
      this.open = false;
    }
  }
}
</script>

<style lang="less" scoped>
@import './styles/v-modal.less';
</style>