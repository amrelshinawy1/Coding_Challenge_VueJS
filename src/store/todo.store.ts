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
        },      
        update(state, updateTodo) {
            const index = state.todos.findIndex(todo => todo.id === updateTodo.id );
            if(updateTodo.status)state.todos[index].status = updateTodo.status;
            if(updateTodo.title)state.todos[index].title = updateTodo.title;
        },      
        delete(state, todoId) {
            const index = state.todos.findIndex(todo => todo.id === todoId );
            state.todos.splice(index, 1);
        },      
    },
})