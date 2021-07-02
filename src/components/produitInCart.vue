<template>
	<div class="cartItem">
		<img :src="product.img" class="cartItem__icon">
		<div class="cartItem__description">
			<div class="cartItem__description__header">
				<router-link :to="'/'+product.name" class="cartItem__description__header__title">
					<h3>{{product.name}}</h3>
				</router-link>
				<p class="cartItem__description__header__price">{{product.price}}€</p>
			</div>
			<div class="cartItem__description__action">
				<div class="cartItem__description__action__quantity">
					<label :for="computedInputId">Quantity : </label>
					<input type="number" min="0" v-model="quantityModel" :id="computedInputId">
					<label :for="computedInputId">Total : {{product.price*quantity}} €</label>
				</div>
				<button class="cartItem__description__action__delete" 
						@click="$store.dispatch('removeItem',product.name)"
						v-if="removable">
					<img src="@/assets/delete.png">
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:"produitInCart",
	props:{
		product:{
			type:Object,
			require:true
		},
		quantity:{
			type:Number,
			required:true
		},
		inputId:{
			type:Number,
			required:true
		},
		removable:{
			type:Boolean,
			default:true
		}
	},
	computed:{
		quantityModel: {
			get(){
				return this.quantity
			},
			set(value){
				if (value != "")
					this.$emit('update:quantity', parseInt(value))
			}
		},

		computedInputId(){
			return `${this.name}.quantity.${this.inputId}`
		}
	}
}
</script>

<style lang="scss">
	.cartItem {
		display:flex;
		align-items: center;
		margin:20px;
		
		&__icon {
			height:4em;
		}

		&__description {
			width:100%;
			&__header {
				display:flex;
				justify-content: space-between;
				align-items: center;

				&__title {
					text-transform: capitalize;
					text-decoration: none;
					color:inherit;
					h3 {
						margin:2px;
					}
					
				}
				&__price {
					font-weight: bold;
					margin:2px;
				}
			}

			&__action {
				display:flex;
				align-items: center;
				*{
					margin-left:2px;
					margin-right:2px;
				}

				&__quantity {
					display:flex;
					flex-wrap: wrap;
				}

				&__delete {
					width:min-content;
					align-self: center;
					margin-left: auto;
					img {
						height:1em;
						transition:filter .5s;
					}

					&:hover {
						img {
							filter: brightness(0.5) sepia(1) saturate(10000%);;
						}
					}
				}
			}
		}
	}
</style>