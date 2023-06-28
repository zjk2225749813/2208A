
const state = {
    table: [
        {
            name: '张三',
            age: 18
        },
        {
            name: '张2',
            age: 18
        },
        {
            name: '张1',
            age: 18
        }
    ],
    num1:1,
    num2:2
}
// 对state二次封装
const getters={
    sum(state){
        return state.num2+state.num1
    }
}
// 同步方法
const mutations = {
    check(state) {
        console.log(state);
    }
}
// 异步方法
const actions = {
    UserLogin(contxt) {
        console.log(contxt.commit('check'), '调用同步方法');
    }
}
// 导出
export default {
    // 命名空间
    namespaced: true,
    state,
    getters,
    mutations,
    actions

}