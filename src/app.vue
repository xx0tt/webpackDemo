<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  name: 'App',
  data: {
    return: {
      msg: '这是一个Vue组件',
    },
  },
}
</script>

<style scoped>
p {
  color: aquamarine;
  font-size: 30px;
}
</style>
