<template>
  <div>

      <div class="banner">
        <img v-for="(v,i) in imgArray" :key="i" v-show="i==num" :src="v"/>
        <div class="banner-circle">
            <ul>
                <li v-for="(v,i) in imgArray" :key="i" :class="{selected:i==num}"></li>  
            </ul> 
        </div>
    </div>

  </div>
</template>
<script>
export default {
    data() {
        return {
            num:0,      //当前轮播
            imgArray:[require('../../assets/img/banner1.jpg'),
                    require('../../assets/img/banner2.jpg'),
                    require('../../assets/img/banner3.jpg'),
                    require('../../assets/img/banner4.jpg'),
                    require('../../assets/img/banner5.jpg'),],
        }
    },
    methods:{     //方法
        autoPlay:function(){
            this.num ++;
            if(this.num == this.imgArray.length){   //已经是最后一张
                this.num = 0;
            }
        },
        play:function(){
            setInterval(this.autoPlay,2000)
        }
    },
    mounted:function(){   //挂载完成   生命周期
        this.play();
    }
  
}
</script>
<style scoped>

ul {
    list-style-type:none;
}
body {
    font-size: 14px;
    background: #fff;
    overflow-y:scroll;
    overflow-x:hidden;
}
html,body {
    max-width:720px;
    height:100%;
    margin:0 auto;
}

/*index*/
.banner {
    position: relative;
}
.banner .banner-circle {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    color: #fff;
}
.banner .banner-circle li{
    display:inline-block;
    background: rgba(0,0,0,.3);
    border-radius: 50%;
    padding:5px;
    margin:2px;
}
.banner .banner-circle ul {
    text-align: center;
}
.banner .banner-circle .selected {
    background: rgba(0,0,0,.8);
}
.banner img {
    width: 100%;
    margin: 0;
    padding: 0;
}
</style>

