<template>
  <transition name="modal">
    <div
      v-if="open"
      class="shadow" 
      @click="hideModal"
    >
      <div :class="classes">
        <div class="v-modal__header">
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
  </transition>
</template>

<script>
export default {
  name: 'VModal',
  props: {
    open: false,
    sidebar: false,
  },
  computed: {
    classes() {
      return {
        'v-modal': true,
        'sidebar': this.sidebar,
      };
    },
  },
  methods: {
    hideModal({ target }) {
      if (!target.classList.contains('shadow') 
      && !target.closest('.v-modal__btn-close')) return;

      this.$emit('update');
    },
  },
  updated() {
    const coordY = window.scrollY;
    if (this.open) {
      window.onscroll = (e) => {
        window.scrollTo(0, coordY)
      }

      return;
    }

    window.onscroll = false;
  }
};
</script>

<style lang="less" scoped>
@import './styles/v-modal.less';
</style>