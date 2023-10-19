<script setup>
	import CounterButton from '@/components/CounterButton.vue'
</script>
<template>
	<header>
		<ul class="flex gap-3 py-1 bg-green-100">
			<li
				v-for="(route, index) in $router.options.routes"
				:key="route.name"
				:class="
					'navigation-item-' +
					(index + 1) +
					' bg-green-200 hover:bg-green-600 hover:text-white router-list'
				"
			>
				<router-link :to="{ name: route.name }">
					{{ route.name }}
				</router-link>
			</li>
		</ul>
	</header>
	<div>
		<router-view />
	</div>
	<footer class="bg-pink-100 text-center py-2">
		<CounterButton />
	</footer>
</template>

<style scoped>
	.router-list {
		transition: background-color 300ms ease-in-out;
		transition: color 300ms ease-in-out;
	}
</style>
