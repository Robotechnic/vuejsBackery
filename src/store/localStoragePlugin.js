module.exports = (store) => {
	store.state.produits.forEach(element => {
		let quantity = parseInt(localStorage[element.name])
		if (quantity && quantity > 0){
			store.commit("ADD_ITEM", { name: element.name, quantity: quantity })
		}
	})

	store.watch(
		state => {
			return state.produits
		},
		newValue => {
			newValue.forEach(element => {
				localStorage[element.name] = element.quantity
			})
		},
		{
			deep:true
		}
	)
}