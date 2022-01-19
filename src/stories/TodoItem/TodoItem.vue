<template>
  <li>
    <span :class="{done: todo.completed}">
      <input
          :checked="todo.completed"
          type="checkbox"
          @change="todo.completed = !todo.completed"
      >
      <strong>{{index+1}}</strong>
      {{todo.title | uppercase}}
    </span>
    <button
        class="rm"
        @click="onClick"
    >
      &times;
    </button>
  </li>
</template>

<script>
export default {
  name: "todo-item",
  props: {
    todo: {
      type: Object,
      required: false
    },
    index: Number
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    }
  },
  methods: {
    onClick() {
      this.$emit('onClick', 'todo id = ' + this.todo.id)
    }
  }
}
</script>

<style scoped>
  li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
  }

  input {
    margin-right: 1rem;
  }

  .rm {
    background: red;
    color: #fff;
    border-radius: 50%;
    font-weight: bold;
  }

  .rm:hover {
    cursor: pointer;
  }

  .done {
    text-decoration: line-through;
  }
</style>
