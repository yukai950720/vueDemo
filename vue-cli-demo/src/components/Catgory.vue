<template>
  <div>
    <CategoryHeadView></CategoryHeadView>
    <categoreMain></categoreMain>
  </div>
</template>
<script>
import CategoryHeadView from './CategoryHead.vue';
import categoreMain from './CategoryMain'
export default {
  data() {
    return {
      
    }
  },
  components:{
    CategoryHeadView,
    categoreMain
  }
}
</script>
<style>
@import '../assets/css/category.css';

</style>

