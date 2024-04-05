<template>
  <!-- 父传子 props -->
  <h1>父传子</h1>
  <SonComponent ref="f2son" :msg="text" :student="student"/>
  <h1>子传父</h1>
  <!-- 子传父 自定义事件 -->
  <SonComponent ref="son2f" @childList="list(text)"/>
</template>

<script>
import SonComponent from "@/components/father_son/SonComponent";
export default {
  name: "FatherComponent",
  components: {SonComponent},
  data() {
    return {
      text: '',
      student: {
        username: '小米',
        age: 12
      }
    }
  },
  methods: {
    list(text) {
      this.text = text
      this.text = '子传父'
      console.log(this.$refs)
      console.log(this.$root);
      // console.log(this.$children[0])
    }
  }
}
</script>

<style scoped>

</style>