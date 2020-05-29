<template>
  <div>
    <h1>Lotto</h1>
    <button @click="getLuckNumbers">행운의 번호는!</button>
    <p>{{ luckyNumbers }}</p>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Lotto',
  data: function () {
    return {
      luckyNumbers: []
    }
  },
  methods: {
    getLuckNumbers: function () {
      const numbers = _.range(1, 46)
      this.luckyNumbers = _.sampleSize(numbers, 6)
    }
  }
}
</script>

<style></style>
