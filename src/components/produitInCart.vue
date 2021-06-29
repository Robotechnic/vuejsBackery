<template>
	<div class="cartItem">
		<img :src="img" class="cartItem__icon">
		<div class="cartItem__description">
			<div class="cartItem__description__header">
				<router-link :to="'/'+name" class="cartItem__description__header__title">
					<h3>{{name}}</h3>
				</router-link>
				<p class="cartItem__description__header__price">{{price}}€</p>
			</div>
			<div class="cartItem__description__action">
				<label :for="computedInputId">Quantity : </label>
				<input type="number" min="0" v-model="quantityModel" :id="computedInputId">
				<label :for="computedInputId">Total : {{price*quantity}} €</label>
				<button class="cartItem__description__action__delete" @click="$store.dispatch('removeItem',name)">
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
		},
		quantity:{
			type:Number,
			required:true
		},
		inputId:{
			type:Number,
			required:true
		}
	},
	computed:{
		quantityModel: {
			get(){
				return this.quantity
			},
			set(value){
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
		&__icon {
			height:3em;
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