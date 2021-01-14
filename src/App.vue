<template>
  <div class="container-sm mt-3">
    <ul class="nav">
      <li class="nav-item">
        <router-link class="nav-link" :to="{name: 'Home'}">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{name: 'About'}">About</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :to="{name: 'Todo'}">Todo</router-link>
      </li>
    </ul>
    <router-view />
    <!-- <Header />
    <Todo /> -->
  </div>
</template>

<script>
// import Header from "./components/Header"
// import Todo from "./components/Todo"
export default {
  name: "App",
  // components: {Header, Todo},
}
</script>

<style>

</style>