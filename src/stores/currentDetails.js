import { browser } from '$app/environment';
import { writable } from 'svelte/store';


export const currentDetails = writable({
	currentCompany: null,
	currentModel: null
});

const storedDetails = JSON.parse(browser && localStorage.getItem('currentDetails')) || {
	currentCompany: null,
	currentModel: null
};

export const localDetails = writable(browser && storedDetails);
localDetails.subscribe(value => browser && (localStorage.currentDetails = JSON.stringify(value))
);
