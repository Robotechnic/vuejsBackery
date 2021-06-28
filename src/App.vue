<template>
	<header>
		<h1>La boulangerie Vue js</h1>
		
		<img src="@/assets/cart.png"/>
	</header>

	<section class="produitContener">
		<Produit v-for="(produit,index) in produits" :key="index" :name="produit.name" :img="produit.img" :price="produit.price"/>
	</section>
</template>

<script>
import Produit from "./components/produit.vue"

export default {
	name: 'App',
	components: {
		Produit
	},
	data() {return {
			produits : [
				{
					name:"pain",
					img:require("@/assets/pain.png"),
					price:3,
					quantity:0
				},
				{
					name:"croissant",
					img:require("@/assets/croissant.png"),
					price:1.5,
					quantity:0
				},
				{
					name:"brioche",
					img:require("@/assets/brioche.png"),
					price:5,
					quantity:0
				},
				{
					name:"chocolatine",
					img:require("@/assets/chocolatine.png"),
					price:2,
					quantity:0
				},
				{
					name:"pain-aux-raisin",
					img:require("@/assets/pain-aux-raisins.png"),
					price:2,
					quantity:0
				}
			]
		}
	}
}
</script>

<style lang="scss">
body {
	margin:0;
	border:0;
	padding:0;
}
#app {
	.produitContener {
		display:flex;
		flex-wrap: wrap;
		margin-left: clamp(25px,25vw,300px);
		margin-right: clamp(25px,25vw,300px);
	}

	header {
		background:rgb(48, 44, 44);
		color:white;
		display:flex;
		padding:10px;
	}
}
</style>
