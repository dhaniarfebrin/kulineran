import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodsView from '../views/FoodsView.vue'
import CartView from '../views/CartView.vue'
import FoodDetail from '../views/FoodDetail.vue'
import SuccessOrder from '../views/OrderSuccess.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/foods',
    name: 'foods',
    component: FoodsView
  },
  {
    path: '/foods/:id',
    name: 'detail',
    component: FoodDetail
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/success-order',
    name: 'success-order',
    component: SuccessOrder
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
