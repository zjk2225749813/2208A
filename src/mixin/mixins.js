const mixins=({
    data() {
        return {
            name:'飞猪' 
        }
    },
    methods: {
        checks(){
            console.log('混入方法');
        }
    },
})
export default mixins;