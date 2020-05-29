<template>
  <div>
    <h1>Lunch</h1>
    <button @click="pick">추천!</button>
    <p>{{ choice }}</p>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Lunch',
  data: function() {
    return {
      menus: ['김치볶음밥', '잔치국수', '이삭토스트'],
      choice: '',
    }
  },
  methods: {
    pick: function () {
      this.choice = _.sample(this.menus)
    }
  },
  updated: function () {
    console.log('와! 뭔진 모르겠지만 일단 데이터가 바뀌었네?')
  },
  watch: {
    choice: function () {
      console.log('와! choice 바뀌었네?')
    }
  }
}
</script>

<style></style>
