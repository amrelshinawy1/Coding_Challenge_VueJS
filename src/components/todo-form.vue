<template lang="html">
  <v-text-field
    v-model="title"
    label="Todo"
    placeholder="What do you have to do?"
    solo
    @keyup.enter="create"
  />
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    create() {
        this.$store.commit("create", this.title);
        this.title = "";
      }
    }
};
</script>

<style lang="css">
</style>
