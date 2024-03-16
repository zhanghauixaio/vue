<template>
  <div>
    <div v-if="books.length">
      <table>
        <th>
          <tr>
            <th></th>
            <th>书籍名称</th>
            <th>出版日期</th>
            <th>价格/元</th>
            <th>购买数量</th>
            <th>操作</th>
          </tr>
          <tr :key="index" v-for="(book,index) in books">
            <td>{{ index }}</td>
            <td>{{ book.bookName }}</td>
            <td>{{ book.date }}</td>
            <td>{{ '￥' + book.price.toFixed(2) }}</td>
            <td>
              <button :disabled="book.count <= 1" @click="decrement(index)">-</button>
              {{ book.count }}
              <button @click="increment(index)">+</button>
            </td>
            <td><button @click="btnClick(index)">移除</button></td>
          </tr>
        </th>
      </table>
      <div>总额：{{'￥'+totalPrice.toFixed(2)}}元</div>
    </div>
    <h1 v-else>购物车为空</h1>

  </div>
</template>

<script>
export default {
  name: 'GoodCar',
  data() {
    return {
      books: [
        {
          bookName: '《算法导论》',
          date: '2006-9',
          price: 85.00,
          count: 1
        },
        {
          bookName: '《UNIX编程艺术》',
          date: '2006-2',
          price: 59.00,
          count: 1
        },
      ]
    }
  },
  computed: {
    totalPrice() {
      let res = 0
      for (let i = 0; i < this.books.length; i++) {
        res += this.books[i].price * this.books[i].count
      }
      return res
    }
  },
  methods: {
    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
      this.books[index].count--
    },
    btnClick(index) {
      this.books.splice(index,1)
    }
  }
}
</script>

<style scoped>

</style>