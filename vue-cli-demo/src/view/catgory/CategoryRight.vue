<template>
	<div id="cate_right">
		 <div class="category_right">
	            <div class="category_banner">
	                <a href="#">
	                    <img src="../../assets/images/banner_1.png" alt="">
	                </a>
	            </div>
	            <div class="category_detail">
	                <h3 class="category_n">Hot Category Goods</h3>
	                <ul>
	                    <li class="category_detail_item" v-for="item in RightDatas" :key="item.product_id">
	                        <router-link :to="'/detail/'+item.product_id" class="category_detail_item_link">
	                            
                              <!--v-lazy="item.product_img_url"-->
                              <img v-lazy="item.product_img_url" alt="" class="category_detail_item_pic">
	                            <p class="category_detail_item_name">{{item.product_name}}</p>
	                        </router-link>
	                    </li>
	                
	                </ul>
	            </div>
	        </div> 
	</div>
</template>

<script>
export default {
    data() {
        return {
            RightDatas:[]
        }
    },
    mounted(){
        //console.log(this.$route.params.id);
        if(this.$route.params.id){
            this.getRDatas(this.$route.params.id);
        } 
    },
    watch:{
        $route(to){
            console.log(to);
            this.getRDatas(this.$route.params.id);
            // var reg=/catgory\/\d+/;//catgory/32
			// if(reg.test(to.path)){
			// 	var categotyId=this.$route.params.id || 0;
			// 	this.getRDatas(categotyId);
        }
    },
    methods:{
        getRDatas(id){
            //console.log(id);
            this.$http.get('/categorygoods',{
                params:{
                    mId:id
                }
            }).then((res)=>{
                console.log(res);
                this.RightDatas = res.data;
            },(err)=>{
                console.log(err);
            })
        }
    }
}
</script>

<style>

</style>