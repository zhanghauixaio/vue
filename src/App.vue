<template>
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
  <router-link to="/father">父子组件</router-link>
  <router-link to="/goodCar">GoodCar</router-link>
  <router-view/>
</template>

<script>
// import SlotTest from "@/components/SlotTest";

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    // SlotTest,
  },
  methods: {

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
