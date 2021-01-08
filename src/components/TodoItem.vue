<template>
<div>
  <p :class="todoProps.complete ? 'isComplete' : '' ">
    <input
    type="checkbox"
    :checked="todoProps.complete"
    @change="checkStatus"
    >
    {{todoProps.name}}
    <button
    class="delete"
    @click="deleteItem"
    >Delete</button>
  </p>
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
  /* .todoItem {
    background-color: bisque;
  } */
  .delete{
    float: right;
  }
  .isComplete{
    text-decoration: line-through;
  }
</style>