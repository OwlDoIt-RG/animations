import { createRouter, createWebHistory } from "vue-router";
import AnimateComponent from "./components/AnimateComponent.vue";
import BirdieComponentVue from "./components/SomeAnimations/BirdieComponent.vue";

const routes = [
	{
		path: "/",
		name: "AnimateComponent",
		component: AnimateComponent,
	},
	{
		path: "/birdie",
		name: "birdie",
		component: BirdieComponentVue,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
