<style scoped>

</style>
<template>
    <div class="form">
        <label>{{ label }}</label>
        <slot></slot>
    </div>
</template>
<script>
export default {
  props: ['label']
}
</script>
