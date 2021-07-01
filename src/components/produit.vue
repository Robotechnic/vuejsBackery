<template>
	<router-link class="produit" :to="'/'+name">
		<div class="produit__header">
			<h2 class="produit__header__name">{{name}}</h2>
			<p class="produit__header__price">{{price}} €</p>
		</div>
		<img class="produit__image" :src="img" :alt="'icon of '+name"/>
		<nav class="produit__action">
			<button class="produit__action__buy" @click.prevent="$store.dispatch('addItem',name)">Add to cart</button>
			<button class="produit__action__see">See product</button>
		</nav>
	</router-link>
</template>

<script>
export default {
	name:"boulangerie-produit",
	props:{
		name:{
			type:String,
			required:true
		},
		img:{
			type:String,
			required:true
		},
		price:{
			type:Number,
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
			max-width: 100%;
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