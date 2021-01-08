<template>
  <div class="add">
    <form
    @submit="addItem"
    >
      <input
      type="text"
      v-model="dataAdd"
      />
      <button
      @click="addTodo"
      >Add</button>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue'
import { v4 as uuidv4} from 'uuid'
export default {
  name: "Add",
  setup(props, context) {

    const dataAdd = ref('');
    const addItem = (event) => {
      event.preventDefault()
      const newItem = {
        id: uuidv4(),
        name: dataAdd.value,
        complete: false
      }
      context.emit('add-item',newItem)
      dataAdd.value = ''
    }
    return {
      dataAdd,
      addItem
    }
  }

}
</script>

<style>
  .add{
    text-align: center;
  }

  .add > input {
    width: 200px;
    height: 20px;
    margin-right: 10px;
  }

  .add > button {
    height: 26px;
  }
</style>