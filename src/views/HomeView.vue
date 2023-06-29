<template>
  <div class="home">

    <HelloWorld>
      <template slot-scope="games">
        <ul>
          <li v-for="item,index in games.games" :key="index">{{item.name}},{{item.names}}</li>
        </ul>
      </template>
    </HelloWorld>

    <button @click="check">params传参动态</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    // 动态路由传参
    check(){
      this.$router.push({name:'user',params:{id:110}})
    }
   }
}
</script>
