<template>
  <div :class="[todoProps.complete ? 'isComplete' : '', 'row mt-3' ]">
    <div class="col-sm-6">
      <input
        type="checkbox"
        :checked="todoProps.complete"
        @change="checkStatus"
      >
      {{todoProps.name}}
    </div>
    <div class="col-sm-6">
      <button
        @click="deleteItem"
      >
      Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props:['todoProps'],
  setup(props, context) {
    const checkStatus = () => {
      context.emit('item-complete', props.todoProps.id)
    }

    const deleteItem = () => {
      context.emit('delete-item', props.todoProps.id)
    }

    return{
      checkStatus,
      deleteItem
    }
  }
}
</script>

<style>
  .isComplete{
    text-decoration: line-through;
  }
</style>