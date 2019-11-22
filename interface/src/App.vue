<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Nav from './views/Nav'
export default {
  components:{
    Nav
  }
}
</script>

<style>
*{
  margin: 0;
}
#disp{
  /* position: relative; */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

#nav {
  padding: 30px;
}
</style>
