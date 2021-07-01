<template>
	<transition name="fade" @after-enter="focusBackground">
		<div class="modalBackground" v-if="visible" 
			@keydown.esc.prevent="cancel" 
			@keydown.enter.prevent="validate" 
			@click.self="cancel"
			tabindex="0" 
			ref="background">
			<div class="modalContent">
				<div class="modalContent__header">
					<h2>{{title}}</h2>
					<button @click="cancel">X</button>
				</div>
				<div class="modalContent__content">
					<slot/>
				</div>
				<nav class="modalContent__actions">
					<button class="cancelButton" @click="cancel">{{leftButton}}</button>
					<button @click="validate">{{rightButton}}</button>
				</nav>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name:"Modal",
	props:{
		"title":{
			type:String,
			required:true
		},
		"leftButton":{
			type:String,
			default:"Back"
		},
		"rightButton":{
			type:String,
			default:"Process"
		}
	},
	data(){
		return {
			visible:false
		}
	},
	methods:{
		show(){
			this.visible = true
		},
		cancel(){
			this.visible = false 
			this.$emit("canceled")
		},
		validate(){
			this.visible = false 
			this.$emit("validated")
		},
		focusBackground(){
			this.$refs.background.focus()
		}
	}
}
</script>

<style lang="scss" scoped>
	.modalBackground {
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		position:fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	.modalContent {
		background:white;
		border-radius: 1em;
		overflow:hidden;

		&__header {
			background-color:rgb(48, 44, 44);
			display:flex;
			justify-content: space-between;
			padding:5px;
			color:white;
			h2 {
				margin:0;
			}

			button {
				width:2em;
				height:2em;
			}
		}

		&__content {
			padding-left: 5px;
			padding-right: 5px;
		}

		&__actions {
			display:flex;
			padding:2px;

			button {
				width:50%;
			}
		}
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}

</style>