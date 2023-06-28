<template>
  <div class="home">
    <HelloWorld ref="domo" :table='table'/>
    <button @click="check">混入</button>
    <button @click="checks">混入方法</button>
    <button @click="storeCheck">模块化按钮</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import mixins from '../mixin/mixins'
import list from '../mixin/list'
export default {
  name: 'HomeView',
  mixins: [mixins,list],
  data() {
    return {
      table:[
        {
          name:'物资',
          age:20
        },
        {
          name:'物资2',
          age:20
        },
        {
          name:'物资3',
          age:20
        }
      ]
    }
  },
  component: { 

  },
  methods: {
    check(){
      console.log(this.$refs.domo);
      console.log(this.name);
    },
    storeCheck() {
      //调用 state数据
      console.log(this.$store.state.user.table);
      // 调用1模块中的同步方法
      // this.$store.commit('user/check')
      // 异步
      this.$store.dispatch('user/UserLogin')
     }
  },
  // 组件路由守卫 页面进入之前
  // beforeRouteEnter(to,from,next){
  //   console.log(to,'to');
  //   console.log(from,'from');
  // },


    // 组件路由守卫  页面更新之前
  // beforeRouteUpdate(to,from,next){
  //     console.log(to,'更新');
  //     console.log(from,'更新');
  // },

  // 路由离离开之前
  beforeRouteLeave(to,from){
    console.log(to,'离开');
    console.log(from,'离开');
  },

  components: {
    HelloWorld
  }
}
</script>
