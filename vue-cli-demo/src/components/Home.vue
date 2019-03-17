<template>
  <div>
    <!-- {{$store.state.flag}} -->
      <!--头部区-->
      <HomeHeaderview/>
      <!--轮播区-->
      <HomeBannerview/>
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
    
  }
  
}
</script>
<style scoped>

</style>

