<script setup lang="ts">
	import { useRoute } from "vue-router";

	const route = useRoute();
</script>

<template>
	<main>
		<RouterView v-slot="{ Component }">
			<Transition name="route" mode="out-in">
				<div :key="(route.name as string)">
					<Component :is="Component" />
				</div>
			</Transition>
		</RouterView>
	</main>
</template>

<style scoped></style>
