import { createWebHistory, createRouter } from "vue-router";
import Login from '../pages/Login.vue';
import Register from '../pages/Register.vue';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Promo from '../pages/Promo.vue';
import Product from '../pages/Product.vue';
import Contact from '../pages/Contact.vue';
import Cart from '../pages/Cart.vue';
import Checkout from '../pages/Checkout.vue';
//import Thank from '../pages/Thank.vue';
import MyOrder from '../pages/MyOrder.vue';
import Admin from '../admin/Admin.vue';
//import Dashboard from '../admin/Dashboard.vue';


import ProductDetailPage from "@/views/ProductDetailPage.vue";

import AdminHome from '../admin/AdminHome.vue';
import AddProduct from '../admin/AddProduct.vue';



const routes = [
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: ProductDetailPage, 
  },
  {
    path: "/admin/home",
    name: "AdminHome",
    component: AdminHome, 
  },

  {
    path: "/admin/addproduct",
    name: "AddProduct",
    component: AddProduct, 
  },


  {
    path: "/",
    name: "Home",
    component: Home, 
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/promotions",
    name: "Promotions",
    component: Promo,
  },
  {
    path: "/product",
    name: "Product",
    component:Product,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
  // {
  //   path: "/thank",
  //   name: "Thank",
  //   component: Thank,
  // },
  {
    path: "/myorder",
    name: "MyOrder",
    component: MyOrder,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  // {
  //   path: "/admin/dashboard",
  //   name: "Dashboard",
  //   component: Dashboard,
  // },
  {
    path: '/:pathMatch(.*)*',
    component: Home,
    
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// import axios from 'axios'
// import store from '../store'

// router.beforeEach(async (to, form,next)=>{
//   var token = localStorage.getItem('token')
//   if(token){
//     var result = await axios.get('http://localhost:3001/api/user/sign-in',{
//       params: {
//         token: token
//       }
//     })
//     if(result.data != false ){
//       console.log(result.data)
//       store.commit("setUser", result.data.user)
//       store.commit("setIdCart", result.data.idCart)
//     }
//   }
//   next()
// })


export default router;