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
        <div ref="content" class="v-modal__content">
          <slot name="content" />
        </div>
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
    cancelScroll() {
      const coordY = window.scrollY;
      if (this.open) {
        window.onscroll = (e) => {
          window.scrollTo(0, coordY)
        }

        return;
      }

      window.onscroll = false;
    },
    setHeightContentBlock() {
      const topBottomPadding = 56;
      const modalHeight = document.querySelector('.v-modal').clientHeight;
      const modalHeaderHeight = document.querySelector('.v-modal__header').clientHeight;
      const contentHeight = modalHeight - topBottomPadding - modalHeaderHeight;
      
      if (!this.open) return;

      this.$refs.content.style.height = `${contentHeight}px`;
    },
  },
  updated() {
    this.cancelScroll();
    this.setHeightContentBlock();
  },
};
</script>

<style lang="less" scoped>
@import './styles/v-modal.less';
</style>