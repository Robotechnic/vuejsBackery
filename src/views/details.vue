<template>
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
			<button @click="$store.dispatch('addItem',name)">
				Add to cart
			</button>
		</div>
	</section>
</template>

<script>
export default {
	name:"Details",
	data(){
		return {
			name:undefined,
			price:0,
			img:undefined,
			description:undefined
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
	margin-left: clamp(25px,25vw,300px);
	margin-right: clamp(25px,25vw,300px);
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
	}
}
</style>