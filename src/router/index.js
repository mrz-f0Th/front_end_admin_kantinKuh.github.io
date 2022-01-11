import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store';

import Transaksi from '../views/Transaksi.vue'
import Login from '../views/Login.vue'


// super admin 
import HomeAdmin from '../views/admin/Home.vue'
import Foodlist from '../views/admin/Foodlist'
import FoodlistTambah from '../views/admin/FoodlistTambah'
import EditProduk from '../views/admin/Edit'

Vue.use(VueRouter)

const routes = [{
    path: '/home-admin',
    name: 'HomeAdmin',
    component: HomeAdmin,
    meta: {
      requiredAuthorization: true,
      roles: ['admin']
    }
  },
  {
    path: '/transaksi',
    name: 'Transaksi',
    component: Transaksi,
    meta: {
      requiredAuthorization: true,
      roles: ['user']
    }
  },
  {
    path: '/foodlist',
    name: 'Foodlist',
    component: Foodlist,
    meta: {
      requiredAuthorization: true,
      roles: ['admin']
    }
  },
  {
    path: '/foodlist-tambah',
    name: 'FoodlistTambah',
    component: FoodlistTambah,
    meta: {
      requiredAuthorization: true,
      roles: ['admin']
    }
  },
  {
    path: '/food/edit/:id',
    name: 'EditProduk',
    component: EditProduk,
    meta: {
      requiredAuthorization: true,
      roles: ['admin']
    }
  },
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      requiredAuthorization: false
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'border-l-8 border-green-500 -ml-1',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiredAuthorization) {
    if (to.meta.roles.includes(store.getters['role'])) {
      next();
    } else {
      next('/');
    }
  } else {
    next();
  }
})

export default router