<template>
	<section class="produitContener">
		<Produit v-for="(produit,index) in $store.state.produits" 
				:key="index" 
				:product="produit"
				@addToCart="addToCart"/>
		<Modal title="Add to cart" 
				ref="productDialog"
				right="Checkout"
				@validated="$store.dispatch('addItem',{name:selectedProduct.name,quantity:selectedProductQuantity})">
			<ProduitInCart :product="selectedProduct" 
							:inputId="0" 
							v-model:quantity="selectedProductQuantity"
							:removable="false"/>
		</Modal>
	</section>
</template>

<script>
import Produit from "../components/produit.vue"
import ProduitInCart from "../components/produitInCart.vue"
import Modal from "../components/modal.vue"

export default {
	name: 'App',
	components: {
		Produit,
		ProduitInCart,
		Modal
	},
	data(){
		return {
			selectedProduct:{},
			selectedProductQuantity:1
		}
	},
	methods:{
		addToCart(event){
			this.selectedProduct = event.product
			this.selectedProductQuantity = 1
			this.$refs.productDialog.show()
		}
	}
}
</script>

<style lang="scss">
	.produitContener {
		display:flex;
		flex-wrap: wrap;
	}
</style>