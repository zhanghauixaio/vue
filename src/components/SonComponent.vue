<template>
  <div>
    <!-- 父传子 props 当作子组件的属性 -->
    <h1>{{ msg }}</h1>
    <h1>{{student}}</h1>

    <!-- 子传父 this.$emit 自定义事件 -->
    <input type="text" value="text" @click="this.$emit('childList',text)">
  </div>
</template>

<script>
export default {
  name: "SonComponent",
  data(){
    return {
      text: ''
    }
  },
  props: {
    msg: {
      type: String,
      default: "你好"
    },
    // 对象类型default使用函数形式
    student: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>