<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>


import Home from "./views/home";
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
*{
  margin: 0;
  padding: 0;
  font-family: SourceHanSansCN-Medium;
  letter-spacing: 0;
  text-align: center;
}
</style>
