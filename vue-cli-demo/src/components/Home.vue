<template>
  <div>
    <!-- {{$store.state.flag}} -->
      <!--头部区-->
      <HomeHeaderview/>
      <!--轮播区-->
      <HomeBannerview/>

      <!--vuex使用-->
      {{count1}}
      {{$store.state.count}}
      <button @click="add()">+</button>
      <button @click="del()">-</button>

      <!--导航区-->
      <HomeNavview/>
      <!--商品区-->
      <HomeMainview :msg="msg"/>

      
      

  </div>
</template>
<script>
import HomeHeaderview from './../view/home/HomeHeaderview'
import HomeBannerview from './../view/home/HomeBannerview'
import HomeNavview from './../view/home/HomeNavview'
import HomeMainview from './../view/home/HomeMainview'


export default {
  data () {
    return {
      msg:'123'
    }
  },
  components:{
    HomeHeaderview,
    HomeBannerview,
    HomeNavview,
    HomeMainview
    
  },
  methods: {
    
    add(){
      this.$store.dispatch('add');
    },
    del(){
      this.$store.dispatch('del');
    }


  },
  computed: {
    count1(){
      return this.$store.state.flag;
    }
  }
  
}
</script>
<style>

</style>

