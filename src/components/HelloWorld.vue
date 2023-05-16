<script setup>
	// import { ref, onMounted } from "vue";
	// import { gsap } from "gsap";

	// const animation = ref(null);

	// onMounted(() => {
	// 	const element = ref(null);

	// 	//gsap.to(element.value, { opacity: 0.5, duration: 1 });

	// 	animation.value = gsap.to(element.value, { opacity: 0.5, duration: 1 });
	// });

	// const pauseAnimation = () => {
	// 	animation.value.pause();
	// };

	// const resumeAnimation = () => {
	// 	animation.value.resume();
	// };
	import { ref } from "vue";
	import { gsap } from "gsap";
	import { onMounted } from "vue";

	const animation = ref(null);

	onMounted(() => {
		const element = ref(null);

		animation.value = gsap.to(element.value, { opacity: 0.5, duration: 1 });
	});

	const pauseAnimation = () => {
		animation.value.pause();
	};

	const resumeAnimation = () => {
		animation.value.resume();
	};
</script>

<template>
	<div>
		<h1>HEY</h1>
		<div ref="element">Animated Element</div>
		<div>
			<button @click="pauseAnimation">Pause Animation</button>
			<button @click="resumeAnimation">Resume Animation</button>
		</div>
	</div>
</template>

<style scoped></style>
```
