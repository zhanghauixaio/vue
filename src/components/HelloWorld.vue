<template>
  <div class="hello">

    <div :key="key" v-for="(key,value) in user">{{ key }} : {{ value }}</div>
    <!--
      v-once
      v-cloak
      v-pre
      v-text
      v-html
    <div v-html="url"></div>
      v-if v-else v-else-if
      v-show
      v-on
      v-bind
      v-for
      v-model
    -->
    <!--<div>{{ counter }}</div>-->
    <!--<button @click="increment">+</button>-->
    <!--<button :disabled="counter <= 0" @click="decrement">-</button>-->
    <!--<div>-->
    <!--  <ul>-->
    <!--    <li v-for="i in letters" :key="i">{{ i }}</li>-->
    <!--  </ul>-->
    <!--</div>-->
    <!--<button @click="btnClick">点击</button>-->

    <!-- 标签label和input是匹配的 -->
    <input type="text" id="text" v-model="text">
    <label for="text">{{ text }}</label>
    <!-- 路由 -->
    <router-link to="/helloWorld/message" custom v-slot="{navigate}">
      <button @click="navigate" @mouseup="navigate">message</button>
    </router-link>
    <router-link :to="{path: '/helloWorld/news', query: {name: 'hahg', age: 123}}">news</router-link>
    <router-view/>

    <!--<h1>{{ $store.state.count }}</h1>-->
    <!--<button @click="$store.commit('increment')">+</button>-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      isFlag: true,
      user: {
        username: '你好',
        password: 1243245
      },
      counter: 0,
      url: '<a href="https://www.baidu.com">百度一下</a>',
      letters: ['a', 'b', 'c'],
      text: ''
    }
  },
  computed: {
    isOr() {
      let flag = ''
      if (this.counter <= 0) {
        flag = true
      } else {
        flag = false
      }
      return flag;
    }
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    },
    btnClick() {
      this.letters.splice(0, 1, ['d', 'f'])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>-->
<!--h3 {-->
<!--  margin: 40px 0 0;-->
<!--}-->
<!--</style>-->
