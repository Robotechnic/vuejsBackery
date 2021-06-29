<template>
	<section class="produitContener">
		<Produit v-for="(produit,index) in $store.state.produits" :key="index" :name="produit.name" :img="produit.img" :price="produit.price"/>
	</section>
</template>

<script>
import Produit from "../components/produit.vue"
export default {
	name: 'App',
	components: {
		Produit
	}
}
</script>

<style lang="scss">
	.produitContener {
		display:flex;
		flex-wrap: wrap;
		margin-left: clamp(25px,25vw,300px);
		margin-right: clamp(25px,25vw,300px);
	}
</style>