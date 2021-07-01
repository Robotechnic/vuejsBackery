<template>
	<router-link class="produit" :to="'/'+product.name">
		<div class="produit__header">
			<h2 class="produit__header__name">{{product.name}}</h2>
			<p class="produit__header__price">{{product.price}} €</p>
		</div>
		<img class="produit__image" :src="product.img" :alt="'icon of '+product.name"/>
		<nav class="produit__action">
			<button class="produit__action__buy" @click.prevent="this.$emit('')">Add to cart</button>
			<button class="produit__action__see">See product</button>
		</nav>
	</router-link>
</template>

<script>
export default {
	name:"boulangerie-produit",
	props:{
		product:{
			type:Object,
			required:true
		}
	}
}
</script>


<style lang="scss">
	.produit {
		min-width: 250px;
		border-radius: 1em;
		border:solid rgb(187, 187, 187) 1px;
		padding:10px;
		margin:10px;
		text-decoration: none;
		color:black;
		display:flex;
		flex-direction: column;
		align-items: center;
		overflow-y:hidden;

		&__header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width:100%;
			
			&__name {
				text-transform: capitalize;	
			}

			&__price {
				font-weight: bold;
			}
		}

		&__image {
			max-width: 235px;
		}

		&__action {
			width:100%;
			display: block;
			margin-top:auto;
			cursor:default;

			button {
				width:100%;
			}
		}
	}
</style>