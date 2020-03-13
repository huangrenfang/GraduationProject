<template>
  <div id="app">
    <Nav />
    <CardForm
      :form-data="formData"
      @input-card-number="updateCardNumber"
      @input-card-name="updateCardName"
      @input-card-month="updateCardMonth"
      @input-card-year="updateCardYear"
      @input-card-cvv="updateCardCvv"
    />
    <router-view/>
  </div>
</template>

<script>
import CardForm from './components/CardForm'
import Nav from './views/Nav';
export default {
  components:{
    Nav,
    CardForm
  }
}
</script>

<style lang="scss">
@import '../src/assets/style.scss';
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

</style>
