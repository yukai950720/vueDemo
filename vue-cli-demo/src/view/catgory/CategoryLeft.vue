<template>
	<div id="cate_left">
		 <div class="category_left">
	            <ul class="childbox">
	                <li :class="{active:item.flag}" v-for="(item,i) in leftDatas" @click="change(item,i)">
	                	<router-link :to="'/catgory/'+item.category_id">
	                	{{item.category_name}}
	                	</router-link>
	                </li>
	               
	            </ul>
	        </div>
	</div>
</template>

<script>
export default {
    data() {
        return {
            leftDatas:[]
        }
    },
    mounted(){
        this.getDatas();
    },
    methods:{
        getDatas(){
            this.$http.get('/category').then((res)=>{
                console.log(res);
                this.leftDatas = res.data;
                for(let i=0;i<this.leftDatas.length;i++){
                    this.$set(this.leftDatas[i],'flag',false);
                }
            },(err)=>{
                console.log(err);
            })
        },
        change(item,i){
            for(let j=0;j<this.leftDatas.length;j++){
                this.$set(this.leftDatas[j],'flag',false);
                if(j==i){
                    item.flag = true;
                }
            }
        }
    }
}
</script>

<style>
.category_content .category_left ul li.active {
    background: #f60;
}
</style>