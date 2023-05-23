<script setup>
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import { onMounted } from "vue";
	import { reactive, ref } from "vue";

	onMounted(() => {
		//SET IMAGE POSITIONING FIRST
		gsap.set("img", {
			yPercent: -50,
			xPercent: -50,
			// top: "50%",
			// left: "50%",
			minWidth: "500px",
			position: "absolute",
		});

		//IAMGE linear easing doesn't APPEAR linear (visually).
		gsap.fromTo(
			"#expo img",
			{ scale: 0.1 },
			{
				scale: 0.5,
				duration: 5,
				ease: "expoScale(0.1, 5)",
				repeat: 0,
				//skewX: 45,
			}
		);

		//CHANGE opacitty of next img
		// gsap.fromTo(
		// 	"#signs ",
		// 	{ opacity: 0.5, scale: 0.1 },
		// 	{
		// 		opacity: 1,
		// 		duration: 5,
		// 		scale: 0.8,
		// 		ease: "slow(0.7, 0.7, false)",
		// 	}
		// );
	});
</script>

<template>
	<div id="container">
		<div id="expo">
			<img id="bgImg" src="../assets/images/pathunsplash.jpg" />
			<!-- <img src="../assets/images/pathunsplash.jpg" />
			<img src="../assets/images/pathunsplash.jpg" />
			<img src="../assets/images/pathunsplash.jpg" />
			<img src="../assets/images/pathunsplash.jpg" />
			<img src="../assets/images/pathunsplash.jpg" />
			<img src="../assets/images/pathunsplash.jpg" />
			<img src="../assets/images/pathunsplash.jpg" />
			<img src="../assets/images/pathunsplash.jpg" /> -->
			<!-- <img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-2.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-3.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-4.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-5.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-6.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-7.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-8.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-9.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-10.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-11.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-12.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-13.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-14.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-15.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-16.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-17.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-18.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-19.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-20.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-21.jpg"
			/>
			<img
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/zoom-22.jpg"
			/> -->
			<div class="label">
				IBI
				<nav>
					<ul class="navBar">
						<li>Découvrir Ibi</li>
						<li>L'application</li>
						<li>L'approche</li>
						<li>Opérer le changement</li>
						<li>Prix et licences</li>
						<li>L'équipe</li>
						<li>Nous joindre</li>
					</ul>
				</nav>
			</div>
		</div>
		<!-- <img id="signs" class="sign" src="../assets/images/signs.png" /> -->
	</div>
	<ul>
		<li>Découvrir Ibi</li>
		<li>L'application</li>
		<li>L'approche</li>
		<li>Opérer le changement</li>
		<li>Prix et licences</li>
		<li>L'équipe</li>
		<li>Nous joindre</li>
	</ul>
</template>

<style scoped>
	div#app {
		overflow: hidden;
		padding: none;
		margin: none;
		max-width: max-content;
	}
	body {
		margin: 0;
		padding: 0;
		background-color: black;
	}

	#container {
		/* background-image: url("../assets/images/pathunsplash.jpg"); */
		display: flex;
		min-height: 100vh;
		min-width: 100vw;
	}

	#container img {
		height: auto;
		width: auto;
		scale: 0.1;
	}
	#expo,
	#linear {
		flex-grow: 1;
		overflow: hidden;
		position: relative;
		color: white;
		font-size: 3em;
	}
	#linear {
		border-left: 2px solid white;
	}
	img {
		position: absolute;
		top: 50%;
		left: 50%;
		/* min-width: 100%; */
	}

	.label {
		position: relative;
		top: 0px;
		padding: 1px;
		text-align: center;

		background-color: rgba(0, 0, 0, 0.5);
	}

	.navBar {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
	#signs {
		position: absolute;
	}
	.text {
		font-size: 2rem;
		text-align: center;
	}
</style>
