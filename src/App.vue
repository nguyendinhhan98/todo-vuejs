<template>
  <div id=app>
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
  #app{
    font-family: Arial, Helvetica, sans-serif;
  }
</style>