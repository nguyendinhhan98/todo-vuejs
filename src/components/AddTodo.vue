<template>
  <div class="add">
    <form
      @submit="addItem"
      @keyup.enter="submit"
      class="row"
    >
      <div class="col-sm-10">
        <input
        class="form-control"
        placeholder="Enter something..."
        type="text"
        v-model="dataAdd"
        />
      </div>
      <div class="col-sm-2">
        <button
          class="btn btn-primary"
        >
        Add
        </button>
      </div>
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

</style>