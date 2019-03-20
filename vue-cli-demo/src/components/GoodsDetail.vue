<template>
    <div class="goods_detail">
        <header class="top_bar">
            <a  @click="goBack()" class="icon_back">《</a>
            <!-- <a onclick="window.history.go(-1)" class="icon_back"></a> -->
            <h3 class="cartname">商品详情</h3>
            <a href="#" class="icon_menu"></a> 
        </header>
        <main class="detail_box">
            <section class="banner_box">
                <ul class="banner_child_box">
                    <li class="banner_item" v-for="(item,i) in goodsImages" v-show="i==num" :key="i">
                        <img :src="item.image_url" alt="" class="banner_pic">
                    </li>
                
                </ul>
                <div class="banner_count">
                        <em id="slide-nub" class="fz18">{{num+1}}</em>
                        <em class="nub-bg">/</em>
                        <em id="slide-sum" class="fz12">{{goodsImages.length}}</em>
                </div>

            </section>
            <section class="product_info clearfix">
                <div class="product_left">
                    <p class="p_name">{{goodsData[0] ? goodsData[0].product_name : ''}}</p>
                    <div class="product_pric">
                        <span>￥</span>
                        <span class="rel_price">{{goodsData[0] ? goodsData[0].product_price : ''}}</span>
                        <span>.00</span>
                    </div>
                    <div class="product_right">
                        降价通知
                    </div>
                </div>

            </section>
            <section class="product_intro">
                <p class="pro_det">
                    {{goodsData[0] ? goodsData[0].product_detail : ''}}
                </p>
           </section>
          
        </main>
        <footer class="cart_d_footer" style="z-index:9999;backgrond:#fff;">
            <div class="m">
                <ul class="m_box">
                    <li class="m_item">
                        <a href="javascript:void(0)" class="m_item_link">
                            <em class="m_item_pic"></em>
                            <span class="m_item_name">卖家</span>
                        </a>
                        <a href="javascript:void(0)" class="m_item_link">
                            <em class="m_item_pic two"></em>
                            <span class="m_item_name">关注</span>
                        </a>
                        <a href="javascript:void(0)" class="m_item_link">
                            <em class="m_item_pic three"></em>
                            <span class="m_item_name">购物车</span>
                        </a>
                    </li>
                </ul>
                <div class="btn_box clearfix" >
                    <a href="#" class="buy_now" @click="addToCart()">加入购物车</a>
                    <a href="#" class="buybuy">立即购买</a>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {

    data(){
        return{
            goodsImages:[],
            goodsData:[],
            num:0
        }
    },
    mounted(){
        this.getDetail(this.$route.params.id);
    },
    destroyed () {//销毁
        
    },
    methods:{
        

        //返回
        goBack(){
            // this.$router.push({
            //     path:"",
            //     query:{
            //         id:id
            //     }
            // })
            //this.$router.push('/home');
           window.history.go(-1)
        },

        getDetail(id){
            var _this=this;
            _this.$http.get('/detail',{
                params:{
                    mId:id
                }
            }).then((res)=>{
                //console.log(res);
                _this.goodsImages = res.data[0];   //轮播
                console.log(_this.goodsImages);
                _this.goodsData = res.data[1];   //详情
                _this.play();
            })
          
        },
          //轮播
        autoPlay:function(){
            this.num ++;
            if(this.num == this.goodsImages.length){   //已经是最后一张
                this.num = 0;
            }
        },
        play:function(){
            setInterval(this.autoPlay,2000)
        },
        addToCart:function(){
            //深拷贝
            var cartData=JSON.parse(JSON.stringify(this.goodsData[0]));
            this.$store.dispatch('cartAdd',cartData);
            this.$router.push('/cart');

        }
    }
  
}
</script>
<style>
@import url( '../assets/css/detail.css');
</style>
