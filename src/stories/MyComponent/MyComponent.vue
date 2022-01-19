<template>
  <button type="button" :class="'btn'" @click="onClick">{{ title }}</button>
</template>

<script>
export default {
  name: "my-component",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick(e) {
      this.$emit('onClick', e);
    },
  },
}
</script>

<style scoped>
  .btn {
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;

    color: white;
    background-color: #1ea7fd;

    font-size: 16px;
    padding: 12px 24px;
  }
</style>
