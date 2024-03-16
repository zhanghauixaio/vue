<template>
  <!-- 父传子 props -->
  <SonComponent ref="f2son" :msg="text" :student="student"/>
  <!-- 子传父 自定义事件 -->
  <SonComponent ref="son2f" @childList="list"/>

  <h1>{{ text }}</h1>

  <!-- v-slot 和 slot 属性 -->
  <!--<slot-test>hhhh</slot-test>-->
  <!--<slot-test>-->
  <!--  <button>aha</button>-->
  <!--  <template #two>-->
  <!--    <button>安徽汉</button>-->
  <!--  </template>-->
  <!--</slot-test>-->

  <!--<router-link :to="{path:'/', }">-->
  <!--  test-->
  <!--</router-link>-->
  <router-link to="/">HelloWorld</router-link>
  <router-link to="/goodCar">GoodCar</router-link>
  <router-view/>
</template>

<script>
import SonComponent from "@/components/SonComponent";

// import SlotTest from "@/components/SlotTest";

export default {
  name: 'App',
  data() {
    return {
      text: '',
      student: {
        username: '小米',
        age: 12
      }
    }
  },
  components: {
    // SlotTest,
    SonComponent
  },
  methods: {
    list(text) {
      this.text = text
      this.text = 'hagha'
      console.log(this.$refs)
      console.log(this.$root);
      // console.log(this.$children[0])
    }
  }
}
</script>

<style scoped="scoped">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
