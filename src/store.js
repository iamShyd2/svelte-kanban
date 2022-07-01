import { writable } from 'svelte/store';

export const tasks = writable([
		{
			id: 1,
			name: "Fix user profile cropping issue",
			category: "Bug",
			state: "New",
		},
		{
			id: 2,
			name: "Improve Onboarding flow",
			category: "UX",
			state: "New",
		},
		{
			id: 3,
			name: "Design responsive landing page",
			category: "UI",
			state: "In Progress",
		},
		{
			id: 4,
			name: "Fix JWT expiration issue",
			category: "Bug",
			state: "In Progress",
		},
		{
			id: 6,
			name: "Profile page redesign",
			category: "UI",
			state: "In Progress",
		}
	]);
