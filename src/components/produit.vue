<template>
	<a class="produit" :href="'/'+name">
		<div class="produit__header">
			<h2 class="produit__header__name">{{name}}</h2>
			<p class="produit__header__price">{{price}} €</p>
		</div>
		<img class="produit__image" :src="img" :alt="'icon of '+name"/>
		<nav class="produit__action">
			<button class="produit__action__buy">Acheter</button>
			<button class="produit__action__see">Voir</button>
		</nav>
	</a>
</template>

<script>
export default {
	name:"boulangerie-produit",
	props:["name","img","price"]
}
</script>

<style lang="scss">
	.produit {
		max-width: 200px;
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
			max-width: 200px;
		}

		&__action {
			width:100%;
			height:70%;
			transform:translateY(-150%)
			button {
				background-color: red;
				color:white;
				align-self: flex-end;
				border-radius: 1em;
				width:100%;
				border:solid 1px red;
				cursor:pointer;
				transition: background .5s, color .5s;
				margin:2px;
				&:hover {
					background:white;
					color:red;
				}
			}
		}

		$parent: &;

		&:hover {
			#{$parent}__action {
				transform:translateY(0);
			}
		}
	}
</style>