// import { createStore } from 'vuex'

// const store = createStore({
//     state : {
//         isLogin : false,
//         user : null,
//         idCart: null,
//         countItemInCart: 0,
//         allFoods: [],
//            // user: undefined,
//         admin: undefined,
//     },
//     getters : {

//     },
//     mutations : {
//         setUser (state,user){
//             if (user) {
//                 state.isLogin = true
//                 state.user = {...user}
//             }
//         },
//         setIdCart (state,idCart){
//             state.idCart = idCart;
//         },
        
//         setCountItemInCart (state,countItemInCart){
//             state.countItemInCart = countItemInCart;
//         },
//     },
//     actions : {

//     }
// });
// export default store;



import {createStore} from "vuex"
import axios from "axios"

const store = createStore({
    state() {
        return {
            allFoods: [],
            user: undefined,
            admin: undefined,
            
        }
    },
    mutations: {
        setFoodsData(state, payload){
            state.allFoods = payload;
        },
        setUser(state, payload){
            state.user = payload;
            
        },
        setAdmin(state, payload){
            state.admin = payload;
        }
    },
    actions: {
        async getFoodsData(context){
            await axios.get('/product')   //foods
            .then(function (response) {
                context.commit("setFoodsData", response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
    }
})

export default store;