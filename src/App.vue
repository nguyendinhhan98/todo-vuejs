<template>
  <div class="container-sm mt-3">
    <Header />
    <Todo />
  </div>
</template>

<script>
import Header from "./components/Header"
import Todo from "./components/Todo"
export default {
  name: "App",
  components: {Header, Todo}
}
</script>

<style>

</style>