<template>
  <div id="app">
    <ToDo v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>

import ToDo from './components/Todos';

export default {
  name: 'App',
  components: {
    ToDo
  },

  data() {
    return {
        todos: [
          {
            id: 1,
            title: "Eat",
            completed: false
          },
          {
            id: 2,
            title: "Drink",
            completed: false
          },
          {
            id: 3,
            title: "Code",
            completed: false
          },
          {
            id: 4,
            title: "Sleep",
            completed: false
          },
          {
            id: 5,
            title: "Repeat",
            completed: false
          }
        ]
    }
  },
  methods: {
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }

}
</script>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body{
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
    background-color: rgb(245, 245, 245);
    color: black;
  }
</style>
