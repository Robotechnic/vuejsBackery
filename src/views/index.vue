<template>

	<section class="produitContener">
		<Produit v-for="(produit,index) in $store.state.produits" 
				:key="index" 
				:name="produit.name" 
				:img="produit.img" 
				:price="produit.price"/>
	</section>
</template>

<script>
import Produit from "../components/produit.vue"
//import Modal from "../components/modal.vue"
export default {
	name: 'App',
	components: {
		Produit,
		//Modal
	}
}
</script>

<style lang="scss">
	.produitContener {
		display:flex;
		flex-wrap: wrap;
	}
</style>