<template>
    <div class="todo-item" v-bind:class = "{'is-complete': todo.completed}" >
        <div>
            <input type="checkbox" v-on:change="markComplete">
            {{todo.title}}
            <input type="button" value="X" class="del" @click="$emit('del-todo', todo.id)">
        </div>
    </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ['todo'],
  methods: {
      markComplete(){
          this.todo.completed = !this.todo.completed;
      }
  }
}
</script>

<style scoped>
    .todo-item{
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }
    .is-complete{
        text-decoration: line-through;
    }
    .del{
        background-color: #ff0000;
        border-radius: 50%;
        float: right;
    }
</style>