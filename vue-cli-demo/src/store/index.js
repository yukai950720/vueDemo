import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
const state={
  flag:123  //组件调用:{{$store.state.flag}}
}

const actions={ //管理mutations
  abc:({commit,state})=>{  //组件调用@click="$store.dispatch('abc')" 
    commit('abc');
  }

  
  
}

const mutations={  //改变数据状态
  abc:(state)=>{  //组件调用此方法： $store.commit('abc');
    state.flag="mutations";  
  }
}
const store=new vuex.Store({
  state,
  mutations,
  actions
});

//导出store对象
export default store;