<template>
  <div class="wrapper" id="app">
    <Nav id="Nav"/>
    <CardForm
      :form-data="formData"
      @input-card-number="updateCardNumber"
      @input-card-name="updateCardName"
      @input-card-month="updateCardMonth"
      @input-card-year="updateCardYear"
      @input-card-cvv="updateCardCvv"
    />
    <router-view></router-view>
    <!-- backgroundImage="https://images.unsplash.com/photo-1572336183013-960c3e1a0b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" -->
  </div>
</template>

<script>
import CardForm from '@/components/CardForm'
import Nav from '@/views/Nav'
export default {
  name: 'app',
  components: {
    CardForm,
    Nav
  },
  data () {
    return {
      formData: {
        cardName: '',
        cardNumber: '',
        cardMonth: '',
        cardYear: '',
        cardCvv: ''
      }
    }
  },
  methods: {
    updateCardNumber () {
    },
    updateCardName () {
    },
    updateCardMonth () {
    },
    updateCardYear () {
    },
    updateCardCvv () {
    }
  }
}
</script>

<style lang="scss">
@import '../src/assets/style.scss';
#Nav{
  width: 102.4%;
  position: relative;
  top: -50px;
}
*{
  margin: 0;
}
#app{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
