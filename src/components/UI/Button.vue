<style scoped>

</style>
<template>
    <div :class="divClasses">
        <button :class="buttonClasses" :type="buttonType" :disabled="isDisabled">
            <slot>
                <span v-if="isLoading === false">{{ text }}</span>
                <span v-else> {{ loadingText }} </span>
            </slot>
        </button>
    </div>
</template>
<script>
export default {
  props: {
    divClasses: {
      default: 'action-section',
      type: String
    },
    buttonClasses: {
      default: 'button',
      type: String
    },
    buttonType: {
      default: 'button',
      type: String
    },
    isDisabled: {
      default: false,
      type: Boolean
    },
    text: {
      default: 'Submit',
      type: String
    },
    isLoading: {
      default: false,
      type: Boolean
    },
    loadingText: {
      default: 'Please Wait',
      type: String
    }
  }
}
</script>
