<template>
<div>
  <Header />
  <AddTodo
  @add-item="addItem"
  />
  <TodoItem
    v-for="todo in todos"
    :key="todo.id"
    :todoProps="todo"
    @item-complete="markComplete"
    @delete-item="deleteItem"
    @edit-item="editItem"
  />
</div>
</template>

<script>
import { ref } from 'vue'
import { v4 as uuidv4} from 'uuid'
import TodoItem from './TodoItem'
import AddTodo from "./AddTodo"
import Header from "./Header"
export default {
  name: "Todo",
  components: {TodoItem, AddTodo, Header},
  data(){
    return {
      toggle : true
    }
  },
  setup(){
    const todos = ref([
      {id: uuidv4(), name: "playing game", complete: false},
      {id: uuidv4(), name: "listen to music", complete: false},
      {id: uuidv4(), name: "reading book", complete: false},
      {id: uuidv4(), name: "go to the market", complete: false},
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

    // const editItem = (id) => {

    // }

    return{
      todos,
      markComplete,
      deleteItem,
      addItem,
      // editItem
    }
  }
}
</script>

<style scoped>

</style>