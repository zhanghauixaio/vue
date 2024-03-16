<template>
  <div>
    <div>{{ message }}</div>
    <button @click="sendMessage">send</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeMessage",
  data() {
    return {
      message: ""
    }
  },
  methods: {
    sendMessage() {
      axios.get('http://httpbin.org')
          .then(res => {
                this.message = res.status
                console.log(res.status)
              }
          )
    }
  }
}
</script>

<style scoped>

</style>