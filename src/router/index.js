import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import store from "../store/index.js"

const routes = [
	{
		path: '/',
		name: 'Index',
		component: Index
	},
	{
		path: '/cart',
		name: 'Cart',
		component: () => import('../views/cart.vue')
	},
	{
		path: "/404",
		name: "404",
		component: () => import("../views/404.vue")
	},
	{
		path: '/:productName',
		name: 'Details',
		component: () => import('../views/details.vue'),
		beforeEnter(to, from, next){
			let item = store.getters.itemFromName(to.params.productName)
			if (item){
				to.params.item = item
				next()
			} else {
				next("/404")
			}
		}
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
