<template>
  <div :class="[todoProps.complete ? 'isComplete' : '', 'row mt-3' ]">
    <div class="col-sm-6">
      <input
        type="checkbox"
        :checked="todoProps.complete"
        @change="checkStatus"
        :value="value"
      />
        {{todoProps.name}}
        <!-- <input type="text" :value="todoProps.name" style="{border: isBorder}" :disabled="isDisabled">
        <button >Save</button> -->
    </div>
    <div class="col-sm-6">
      <!-- <EditItem
        @click="editItem"
      /> -->
      <DeleteItem
        @click="deleteItem"
      />
    </div>
  </div>
</template>

<script>
import DeleteItem from "./DeleteItem"
// import EditItem from "./EditItem"
export default {
  name: "TodoItem",
  props:['todoProps'],
  components: {DeleteItem},
  setup(props, context) {
    const checkStatus = () => {
      context.emit('item-complete', props.todoProps.id)
    }

    const deleteItem = () => {
      context.emit('delete-item', props.todoProps.id)
    }

    return{
      checkStatus,
      deleteItem,
    }
  }
}
</script>

<style>
  .isComplete{
    text-decoration: line-through;
  }
</style>