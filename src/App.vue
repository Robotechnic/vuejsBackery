<template>
	<header>
		<div class="spacer">&nbsp;</div>
		<router-link to="/" class="mainTitle"><h1>Vue js bakery</h1></router-link>
		<nav class="cartDisplay">
			<p class="cartDisplay__itemCount">{{$store.getters.totalItems}}</p>
			<router-link to="/cart">
				<img class="cartDisplay__icon" src="@/assets/cart.png"/>
			</router-link>
		</nav>
	</header>

	<router-view/>
	
</template>

<script>

export default {
	name: "App"
}
</script>

<style lang="scss">
$cartCountSize:20px;

body {
	margin:0;
	border:0;
	padding:0;
}

header {
	background:rgb(48, 44, 44);
	color:white;
	padding:10px;
	display:flex;
	align-items: center;
	justify-content: space-between;

	.mainTitle {
		text-decoration: none;
		color:white;
		transition: color .5s;

		&:hover {
			color:rgb(196, 196, 196);
		}
	}

	.spacer {
		width:50px;
	}
	.cartDisplay {
		&__icon {
			width:50px;
		}

		&__itemCount {
			margin:0;
			width:$cartCountSize;
			height:$cartCountSize;
			border-radius: 1em;
			background:red;
			text-align:center;

			position: relative;
			margin-bottom: -$cartCountSize;
			right:-30px;
		}
	}
}
</style>
