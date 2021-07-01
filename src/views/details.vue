<template>
	<BackButton/>
	<section class="produitPresentation">
		<img class="produitPresentation__img" :src="img"/>
		<div class="produitPresentation__description">
			<div class="produitPresentation__description__header"> 	
				<h2>{{name}}</h2>
				<p>{{price}}€</p>
			</div>
			<p class="produitPresentation__description__text">
				{{description}}
			</p>
			<div class="produitPresentation__description__cartAdding">
				<label for="itemQuantity">Quantity :</label>
				<input type="number" id="itemQuantity" v-model="itemQuantity">
				<button @click="$store.dispatch('addItem',{name:name,quantity:itemQuantity})">
					Add to cart
				</button>
			</div>
		</div>
	</section>
</template>

<script>
import BackButton from "../components/backButton.vue"
export default {
	name:"Details",
	components:{
		BackButton
	},
	data(){
		return {
			name:undefined,
			price:0,
			img:undefined,
			description:undefined,
			itemQuantity:1
		}
	},
	beforeMount(){
		let item = this.$route.params.item
		this.name = item.name
		this.price = item.price
		this.img = item.img
		this.description = item.description
	}
}
</script>

<style lang="scss">

.produitPresentation {
	display:flex;
	&__img {
		width:300px;
	}

	&__description {
		&__header {
			display:flex;
			justify-content: space-between;
			align-items: center;
			h2 {
				text-transform: capitalize;	
			}
			p{
				font-weight: bold;
			}
		}

		&__cartAdding {
			display:grid;
			grid-template-areas: "label input"
								"button button";
			align-items:center;

			button {
				grid-area: button;
			}
		}
	}
}
</style>