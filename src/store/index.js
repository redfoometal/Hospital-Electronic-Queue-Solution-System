import { createStore } from 'vuex'

 const store = createStore({
    state(){
        return{
            authVisible: false,
            regVisible: false,
        }
    },
    mutations:{
        CHANGE_AUTH_VISIBLE: (state, payload) =>{
            state.authVisible = payload;
        },

        CHANGE_REG_VISIBLE: (state, payload) =>{
            state.regVisible = payload;
        }
    },
    actions:{
        TOGGLE_AUTH_VISIBLE: ({commit}, payload) =>{
            commit('CHANGE_AUTH_VISIBLE', payload);
        },

        TOGGLE_REG_VISIBLE: ({commit}, payload) =>{
            commit('CHANGE_REG_VISIBLE', payload);
        }
    },
    getters:{
        GET_AUTH_VISIBLE: state =>{
            return state.authVisible
        },
        
        GET_REG_VISIBLE: state =>{
            return state.regVisible
        }
    },
});

export default store
