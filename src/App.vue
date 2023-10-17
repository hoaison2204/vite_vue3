<template>
	<div
		class="flex flex-col items-center justify-center min-h-screen text-center"
	>
		<div
			class="p-4 bg-red-500 cursor-pointer w-1/2 text-white"
			@click.self="returnCount"
		>
			Click here to reset count to 0
		</div>
		<div class="flex">
			<a
				href="https://vitejs.dev"
				target="_blank"
			>
				<img
					src="/vite.svg"
					class="logo"
					alt="Vite logo"
				/>
			</a>
			<a
				href="https://vuejs.org/"
				target="_blank"
			>
				<img
					src="./assets/vue.svg"
					class="logo vue"
					alt="Vue logo"
				/>
			</a>
		</div>
		<HelloWorld
			:msg="message"
			:count="count"
			@updateCount="updateCountFunc"
		/>
	</div>
</template>

<script>
	import { ref } from 'vue'
	import HelloWorld from './components/HelloWorld.vue'

	export default {
		components: {
			HelloWorld,
		},
		setup() {
			const count = ref(0)
			const message = ref('Hello World - Vite + Vue 3')

			const updateCountFunc = (countValue) => {
				count.value = countValue
			}
			return {
				count,
				message,
				updateCountFunc,
			}
		},
		methods: {
			returnCount() {
				this.count = 0
			},
		},
	}
</script>

<style scoped>
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
		transition: filter 300ms;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.vue:hover {
		filter: drop-shadow(0 0 2em #42b883aa);
	}
</style>
