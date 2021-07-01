<template>
	<BackButton v-if="!cartEmpty"/>
	<section class="cart">
		<p class="cart__empty" v-if="cartEmpty">
			Your cart is curently empty.<br/>
			<router-link to="/">Return to navigation.</router-link>
		</p>
		<div class="cart__content" v-else>
			<div class="cart__content__items">
				<h2 class="cart__content__items__title">Cart ({{$store.getters.totalItems}})</h2>
				<ProduitInCart v-for="(item,index) in $store.getters.itemsInCart" 
								:key="index" 
								:product="item"
								:inputId="index"
								v-model:quantity="$store.getters.itemsInCart[index].quantity"/>
				<Modal ref="clearModal" @validated="$store.commit('CLEAR_CART')" title="Clear cart">
					<p>Do you realy want to clear cart?</p>
				</Modal>
				<button class="cart__content__items__clear" @click="$refs.clearModal.show">Clear cart</button>
			</div>
			<div class="cart__content__total">
				<h2>Summary:</h2>
				<p>Price: {{$store.getters.totalPrice}} €</p>
				<p>TVA: {{$store.state.tva*100}}%</p>
				<p><strong>Total: {{$store.getters.priceWithTVA}} €</strong></p>
				<button @click="checkout">Checkout</button>
			</div>
		</div>
	</section>
</template> 

<script>
import ProduitInCart from "../components/produitInCart.vue"
import BackButton from "../components/backButton.vue"
import Modal from "../components/modal.vue"
export default {
	name:"Cart",
	components: {
		ProduitInCart,
		BackButton,
		Modal
	},
	computed:{
		cartEmpty(){
			return this.$store.getters.totalItems == 0
		}
	},
	methods:{
		checkout(){
			alert(`Checkout complete for ${this.$store.getters.priceWithTVA}€.`)
			this.$store.commit('CLEAR_CART')
			this.$router.push("/")
		}
	}
}
</script>

<style lang="scss">
	.cart {
		margin-top:10px;

		&__empty {
			width:100%;
			text-align: center;
		}
		&__content {
			display:flex;

			&__total {
				border:solid black 1px;
				border-radius:1em;
				padding:10px;
				margin-left:10px;
				margin-bottom:0;
				margin-top:0;
				box-sizing: border-box;
				height: max-content;
				position:sticky;
				top:5px;
			}

			&__items {
				flex-grow: 1;

				&__title {
					margin-top:0px;
				}

				&__clear {
					margin-top:10px;
					width:100%;
				}
			}
		}
	}
</style>