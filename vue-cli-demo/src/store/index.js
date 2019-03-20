import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
const state={
  flag:123 , //组件调用:{{$store.state.flag}}
  count:1,
  flg:true,
  addCartDatas:[]
}

const getters={ //类似计算属性

  count(state){
      return state.count;  
  },
  cartDatas(state){
    return state.addCartDatas;
  },
  total(state){
    //reduce()计算数组元素相加后的总和
    //累加器  money计算返回值   item当前元素  0传递给函数的初始值
    return state.addCartDatas.reduce(function(money, item){
        return money + item.product_uprice * item.goods_num
    }, 0);
},

}

const actions={ //管理mutations
  abc:({commit,state})=>{  //组件调用@click="$store.dispatch('abc')" 
    commit('abc');
  },
  add:({commit,state})=>{
    commit('add');
  },

  del:({commit,state})=>{
    if(state.count>1){
      commit('del');
    }
    
  },
   
  judge:({commit,state})=>{
    commit('judge');
  },
  cartAdd:({commit,state},data)=>{
    commit('cartAdd',data);
  },
  //添加数量
  goodIncrement:({commit,state},product_id)=>{
    state.addCartDatas.filter(function(item){return item.product_id == product_id})[0].goods_num++
},
//减少数量
goodDecrement:({commit,state},product_id)=>{
  let num2 = state.addCartDatas.filter(function(item){return item.product_id == product_id})[0];
  if(num2 && num2.goods_num>0){
      num2.goods_num--
  }
},
//删除数据
delCartDatas({commit, state}, product_id) {
    console.log(product_id);
    for(let i=0;i<state.addCartDatas.length;i++){
        if(state.addCartDatas[i].product_id == product_id){
            state.addCartDatas.splice(i,1);
            break;
        }
    }
    
},

  
  
}

const mutations={  //改变数据状态
  abc:(state)=>{  //组件调用此方法： $store.commit('abc');
    state.flag="mutations";  
  },
  del:(state)=>{
    state.count--;
  },
  add:(state)=>{
    state.count++;
  },
  judge:(state)=>{
    state.flg=!state.flg;
  },
    //添加购物车
    cartAdd:(state,data)=>{
      //state.addCartDatas.push(data);
      if(state.addCartDatas.length>0){
          let item = state.addCartDatas.filter(function(item){return item.product_id == data.product_id})[0];
          if(item){
              item.goods_num++
          }else {
              state.addCartDatas.push(data);
          }
      }else {
          state.addCartDatas.push(data);
      }
  }
}
const store=new vuex.Store({
  state,
  mutations,
  actions,
  getters
});

//导出store对象
export default store;