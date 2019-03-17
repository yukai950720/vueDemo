<template>
  <div>
    <footer class="fixBottomBox"> 
        <ul>
            <router-link tag="li" to="/home" class="tabItem">
            	<a href="javascript:;" class="tab-item-link">
                <span class="iconfont icon-51"></span>
                 <p>首页</p>
                    <!-- <img src="../assets/images/a-home.png" alt="" class="tab-item-icon"> -->
                </a>
            </router-link>
            <router-link tag="li" to="/catgory" class="tabItem">
                <a href="javascript:;" class="tab-item-link">
                  <span class="iconfont icon-leimupinleifenleileibie"></span>
                 <p>分类</p>
                    <!-- <img src="../assets/images/n-catergry.png" alt="" class="tab-item-icon"> -->
                </a>
            </router-link>
            <router-link tag="li" to="/find" class="tabItem">
                <a href="javascript:;" class="tab-item-link">
                  <span class="iconfont icon-faxian"></span>
                 <p>发现</p>
                    <!-- <img src="../assets/images/n-find.png" alt="" class="tab-item-icon"> -->
                </a>
            </router-link>
            <router-link tag="li" to="/cart" class="tabItem">
                <a href="javascript:;" class="tab-item-link">
                  <span class="iconfont icon-gouwuche1"></span>
                 <p>购物车</p>
                    <!-- <img src="../assets/images/n-cart.png" alt="" class="tab-item-icon"> -->
                </a>
            </router-link>
            <router-link tag="li" to="/mine" class="tabItem">
                <a href="javascript:;" class="tab-item-link">
                  <span class="iconfont icon-wode"></span>
                 <p>我的</p>
                    <!-- <img src="../assets/images/n-me.png" alt="" class="tab-item-icon"> -->
                </a>
            </router-link>
        </ul>
    </footer>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.iconfont{
  display: block!important;
  /* width: 40px;
  height: 40px; */
  font-size: 24px;
  margin-top: 5px;
  height: 25px;
}
.tabItem .tab-item-link{
  display: block!important;
}
p{
  display: block;
  height: 18px;
  font-size: 12px;
}
.router-link-active a {
  color: #ff0000!important;
}
</style>
 