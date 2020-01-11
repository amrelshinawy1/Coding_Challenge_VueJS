import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        todos:[{
            id:1,
            title:'welcome',
            status: 'open'
        }],
    },
    mutations:{
        create(state, title) {
            title = title.trim();
            if(title){
                state.todos.push({
                id: state.todos.length + 1,
                title: title,
                status: "open"
                })
            }
        }
    },
})