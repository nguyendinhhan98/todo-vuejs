<template>
<div>
  <AddTodo
  @add-item="addItem"
  />
  <TodoItem
    v-for="todo in todos"
    :key="todo.id"
    :todoProps="todo"
    @item-complete="markComplete"
    @delete-item="deleteItem"
  />
</div>
</template>

<script>
import { ref } from 'vue'
import { v4 as uuidv4} from 'uuid'
import TodoItem from './TodoItem'
import AddTodo from "./AddTodo"
export default {
  name: "Todo",
  components: {TodoItem, AddTodo},
  setup(){
    const todos = ref([
      {id: uuidv4(), name: "viec 1", complete: false},
      {id: uuidv4(), name: "viec 2", complete: false},
      {id: uuidv4(), name: "viec 3", complete: false},
      {id: uuidv4(), name: "viec 4", complete: false},
    ])

    const markComplete = (id) => {
      todos.value = todos.value.map(todo => {
        if(todo.id === id) todo.complete = !todo.complete

        return todo;
      })
    }

    const addItem = (data) => {
      todos.value.push(data)
    }

    const deleteItem = (id) => {
      todos.value = todos.value.filter( todo => {
        return todo.id !== id
      })
    }

    return{
      todos,
      markComplete,
      deleteItem,
      addItem
    }
  }
}
</script>

<style scoped>

</style>