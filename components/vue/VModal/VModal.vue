<template>
  <div>
    <transition name="shadow">
      <div
        v-if="open"
        class="shadow" 
        @click="hideModal"
      >
      {{ removeBodyOverflow }}
      </div>
    </transition>
    <transition name="modal">
      <div v-if="open" :class="classes">
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
    </transition>
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
        'sidebar': this.sidebar || this.sidebarLeft,
        'sidebar-left': this.sidebarLeft,
      }
    },
    removeBodyOverflow() {
      if (this.open) document.body.style.overflow = 'hidden';
    }
  },
  methods: {
    hideModal() {
      this.open = false;
      this.$emit('updateOpen', this.open)

      document.body.removeAttribute('style');
    }
  },
}
</script>

<style lang="less" scoped>
@import './styles/v-modal.less';
</style>