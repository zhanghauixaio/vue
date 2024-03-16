<template>
  <div>
    <h1>我是一个slot</h1>
    <slot></slot>
    <slot name="two"></slot>
  </div>
</template>

<script>
export default {
  name: "SlotTest"
}
</script>

<style scoped>

</style>