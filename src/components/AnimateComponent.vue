<script setup>
	import { onMounted } from "vue";
	import { gsap } from "gsap";

	// gsap.from('.header', { duration: 1, y: '-100%', ease: 'bounce' })
	// gsap.from('.link', { duration: 1, opacity: 0, delay: 1, stagger: .5 })
	// gsap.from('.right', { duration: 1, x: '-100vw', delay: 1, ease: 'power2.in' })
	// gsap.from('.left', { duration: 1, delay: 1.5, x: '-100%' })
	// gsap.to('.footer', { duration: 1, y: 0, ease: 'elastic', delay: 2.5 })
	// gsap.fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 })

	const timeline = gsap.timeline({ defaults: { duration: 1 } });
	timeline
		.from(".header", { y: "-100%", ease: "bounce" })
		.from(".link", { opacity: 0, stagger: 0.5 })
		.from(".right", { x: "-100vw", ease: "power2.in" }, 1)
		.from(".left", { x: "-100%" }, "<.5")
		.to(".footer", { y: 0, ease: "elastic" })
		.fromTo(
			".button",
			{ opacity: 0, scale: 0, rotation: 720 },
			{ opacity: 1, scale: 1, rotation: 0 }
		);

	const button = document.querySelector(".button");

	button.addEventListener("click", () => {
		timeline.timeScale(3);
		timeline.reverse();
	});
</script>

<template>
	<body>
		<div class="header">
			<div class="links">
				<div class="link">Link 1</div>
				<div class="link">Link 2</div>
				<div class="link">Link 3</div>
			</div>
		</div>
		<div class="content">
			<div class="sidebar left"></div>
			<button class="button">Reverse!</button>
			<div class="sidebar right"></div>
		</div>
		<div class="footer"></div>
	</body>
</template>

<style scoped>
	body {
		margin: 0;
		height: 100vh;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	.header {
		height: 15vh;
		background-color: red;
	}

	.links {
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		color: white;
	}

	.content {
		flex-grow: 1;
		display: flex;
		justify-content: space-between;
	}

	.sidebar {
		background-color: green;
		width: 15vw;
	}

	.button {
		align-self: center;
	}

	.footer {
		transform: translateY(100%);
		height: 15vh;
		background-color: blue;
	}
</style>
