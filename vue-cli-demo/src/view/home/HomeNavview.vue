<template>
  <div>

      <div class="home_n">
        <nav class="m_nav">
                    <ul>
                        <li class="nav_item"  v-for="(v,i) in categorys" :key="i">
                            <a href="#" class="nav_item_link">
                                <i class="iconfont" v-bind:class="v.icon"></i>
                                <span>{{v.title}}</span>
                            </a>
                        </li>
                    </ul>
        </nav>
      </div>

  </div>
</template>
<script>
export default {
  data() {
        return {
            categorys:[{'icon':'icon-zixun','title':'在线咨询'},
                        {'icon':'icon-jieshao_','title':'产品介绍'},
                        {'icon':'icon-zixun','title':'活动动态'},
                        {'icon':'icon-jieshao_','title':'在线咨询'},
                        {'icon':'icon-yingxiaogongju-tuangoumiaosha','title':'今日秒杀'},
                        {'icon':'icon-youhuiquan','title':'领取优惠'},
                        {'icon':'icon-jieshao_','title':'活动动态'},
                        {'icon':'icon-zixun','title':'在线咨询'},
                        {'icon':'icon-jieshao_','title':'今日秒杀'},
                        {'icon':'icon-jieshao_','title':'领取优惠'}]
        }
  }
  
}
</script>
<style scoped>
.home_n{
  background: #fff;
  padding-bottom: 20px;
}
.m_nav .iconfont {
    /*border-radius: 50%;*/
    /*border: 3px solid #f9f9f9;*/
    /*box-shadow: 0px 0px 6px rgba(0,0,0,.5);*/
    color:  #f60;;
    /* background: #f60; */
    padding: 10px;
    display: inline-block;
    border-radius: 10px;
    font-size: 26px;
}
.m_nav span {
    display:block;
}


</style>

