import { writable } from 'svelte/store';

export const currentDetails = writable({
	currentCompany: null,
	currentModel: null
});
