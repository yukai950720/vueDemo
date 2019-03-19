import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
const state={
  flag:123 , //组件调用:{{$store.state.flag}}
  count:1
}

const getters={ //类似计算属性

  count(state){
      return state.count;  
  }

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
    
  }

  
  
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