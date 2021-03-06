import { createStore } from 'vuex'
import localStoragePlugin from './localStoragePlugin'

export default createStore({
	state: {
		tva:20/100,
		produits: [
			{
				name:"bread",
				img: require("@/assets/bread.png"),
				price: 3,
				description:"A nice eatable peace of bread.\nIt contain water, floor, salt and yeast.",
				quantity: 0
			},
			{
				name: "croissant",
				img: require("@/assets/croissant.png"),
				description: "A tipical French thing with bread of cource ;)",
				price: 1.5,
				quantity: 0
			},
			{
				name: "brioche",
				img: require("@/assets/brioche.png"),
				description: "A bread with butter.",
				price: 5,
				quantity: 0
			},
			{
				name: "chocolatine",
				img: require("@/assets/chocolatine.png"),
				description: "Some people say \"pain au chocolat\" but that's fucking crap.\nFolow the holy way of chocolatine or burn in hell.",
				price: 2,
				quantity: 0
			},
			{
				name: "Raisin bread",
				img: require("@/assets/RaisinBread.png"),
				description: "A chocolatine with grape.",
				price: 2,
				quantity: 0
			},
			{
				name: "Chocolate Twist",
				img: require("@/assets/chocolateTwist.png"),
				description: "A great viennoiserie with chocolate and cream thaw will twist your day.",
				price: 2.5,
				quantity: 0
			},
			{
				name: "Apple Turnover",
				img: require("@/assets/appleTurnover.png"),
				description: "Puff pastry with an apple heart, what else?",
				price: 2.5,
				quantity: 0
			},
		]
	},
	getters:{
		totalItems(state){
			return state.produits.filter(element => element.quantity > 0).length
		},
		totalPrice(state){
			let total = 0
			state.produits.forEach(element => {
				total += element.quantity * element.price
			})
			return total
		},
		itemFromName: (state) => (itemName) => {
			return state.produits.find((element) => element.name == itemName)
		},
		itemsInCart(state){
			return state.produits.filter((element) => element.quantity > 0)
		},
		priceWithTVA(state,getters){
			return Math.floor(getters.totalPrice * (1 + state.tva))
		}
	},
	mutations: {
		ADD_ITEM(state, itemInfo ){
			let itemName = itemInfo.name
			let quantity = itemInfo.quantity ?? 1
			state.produits.find((element) => element.name == itemName).quantity += quantity
		},
		REMOVE_ITEM(state, itemName){
			state.produits.find((element) => element.name == itemName).quantity = 0
		},
		CLEAR_CART(state){
			state.produits.forEach(element=>{
				element.quantity = 0
			})
		}
	},
	actions: {
		addItem(context,item){
			let itemName = item.name ?? item
			let quantity = item.quantity ?? 1
			if (context.state.produits.find((element) => element.name == itemName)){
				context.commit("ADD_ITEM", { name: itemName, quantity: parseInt(quantity) })
			} else {
				alert("Item doesn't exist")
			}
		},
		removeItem(context,itemName){
			let item = context.state.produits.find((element) => element.name == itemName)
			if (item && item.quantity > 0){
				context.commit("REMOVE_ITEM",itemName)
			} else {
				alert("Item doesn't exist")
			}
		},
		updateQuantity(context,itemQuantity){
			itemQuantity.forEach(quantity=>{
				if (context.state.produits.find((element) => element.name == quantity.name)){
					context.commit("ADD_ITEM", {name: quantity.name,quantity:quantity.quantity})
				}
			})
		}
	},
	plugins: [localStoragePlugin]
})
