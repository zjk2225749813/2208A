<template>
  <div>
    <slot :games='games'></slot>
  </div>
</template>

<script>
export default {
  name: "DomoHelloWorld",

  data() {
    return {
      games: [
        {
          name: "LOL",
          names: "英雄联盟",
        },
        {
          name: "PUBG",
          names: "绝地求生",
        },
        {
          name: "CSGO",
          names: "反恐精英",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>