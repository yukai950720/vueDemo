<template>
  <div id="app">
      <router-view></router-view>
      <NavButton></NavButton>
  </div>
</template>

<script>
import NavButton from './components/NavButton'
export default {
  name: 'App',
  components:{
    NavButton,
  }
}
</script>

<style>
@import url('./assets/css/index.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
