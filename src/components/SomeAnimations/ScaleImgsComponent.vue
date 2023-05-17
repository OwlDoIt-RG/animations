<script setup lang="ts">
	import { onMounted } from "vue";
	import { gsap } from "gsap";

	onMounted(() => {
		const images = [".image1", ".image2", ".image3"]; // Replace with your image selectors

		images.forEach((imageSelector) => {
			const image = document.querySelector(imageSelector);

			gsap.fromTo(
				image,
				{
					scale: 1, // Initial scale
				},
				{
					scale: 1.5, // Target scale (zoomed-in effect)
					duration: 1, // Duration of the animation
					ease: "none", // Linear ease
				}
			);
		});
	});
</script>

<template>
	<div class="image-container">
		<img class="image1" src="../assets/images/ibilanding.png" alt="Image 1" />
		<img class="image2" src="../assets/images/ibilanding1.png" alt="Image 2" />
		<img class="image3" src="../assets/images/ibilanding2.png" alt="Image 3" />
	</div>
</template>

<style scoped>
	.image-container {
		display: flex;
		justify-content: center;
		align-items: center;
		/* Add other styling properties */
	}

	.image-container img {
		width: 200px;
		height: 200px;
		/* Add other styling properties */
	}
</style>
