<template>
  <div class="hello">
    字组件
    <button @click="check"></button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:['table'],
  methods: {
    check(){
    console.log('word');
    }
  },

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
