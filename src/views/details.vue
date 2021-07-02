<template>
	<BackButton/>
	<section class="produitPresentation">
		<img class="produitPresentation__img" :src="img"/>
		<div class="produitPresentation__header"> 	
			<h2>{{name}}</h2>
			<p>{{price}}€</p>
		</div>
		<p class="produitPresentation__text">
			{{description}}
		</p>
		<div class="produitPresentation__cartAdding">
			<div class="produitPresentation__cartAdding__quantity">
				<label for="itemQuantity">Quantity :</label>
				<input type="number" id="itemQuantity" v-model="itemQuantity">
				<label for="itemQuantity">Total : {{itemQuantity*price}}€</label>
			</div>
			<button @click="$store.dispatch('addItem',{name:name,quantity:itemQuantity})">
				Add to cart
			</button>
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
	display:grid;
	grid-template-areas: "header"
						"img"
						"text"
						"cart";

	

	@media screen and (min-width:900px) {
		grid-template-areas:	"img header"
								"img text"
								"img cart";

		$sectionMargin:clamp(10px,10vw,300px);
		margin-left:$sectionMargin;
		margin-right:$sectionMargin;
	}

	$sectionMargin:clamp(10px,20vw,300px);
	margin-left:$sectionMargin;
	margin-right:$sectionMargin;

	&__img {
		grid-area: img;
		width:300px;
		justify-self: center;
		@media screen and (min-width:900px) {
			margin-right:10px;
		}
	}

	&__header {
		grid-area: header;
		display:flex;
		justify-content: space-between;
		align-items: center;
		h2 {
			text-transform: capitalize;
			margin:0;
		}
		p{
			font-weight: bold;
			margin:0;
		}
	}

	&__text {
		grid-area: text;
		margin:0;
		margin-bottom:10px;
	}

	&__cartAdding {
		grid-area: cart;
		display:flex;
		flex-direction: column;
		justify-self:center;
		width:100%;

		&__quantity {
			display:flex;
			flex-wrap:wrap;
			*{
				margin:5px;
			}
		}

		button {
			width:100%;
		}
	}
}
</style>