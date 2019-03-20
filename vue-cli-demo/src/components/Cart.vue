<template>
  <div id="my_cart">

    <CartHeaderView></CartHeaderView>
		<CartMainView></CartMainView>
		<CartFooterView></CartFooterView>

  </div>
</template>
<script>

 import CartHeaderView from './CartHeaderView.vue';
 import CartMainView from './CartMainView.vue';
 import CartFooterView from './CartFooter.vue';

export default {
  
  components:{
 		CartHeaderView,
 		CartMainView,
 		CartFooterView
   },
   mounted(){
     this.judge1()
   },
   destroyed () {//组件销毁
     this.judge1()
   },
   methods: {
     judge1(){
       this.$store.dispatch("judge")
     }
   }

}
</script>
<style>
@import '../assets/css/cart.css';

</style>

