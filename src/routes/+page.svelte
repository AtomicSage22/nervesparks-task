<script>
	import SideBar from './components/SideBar.svelte';
	import Contents from './components/Contents.svelte';
	import Hamburger from './components/Hamburger.svelte';
	import { data1 } from '../stores/data1';

	let currentCompany;
	let companies;

	data1.subscribe((value) => {
		companies = value;
	});

	const updateContents = (name, image) => {
		currentCompany.models = [
			...currentCompany?.models,
			{
				modelName: name.value,
				modelImage: URL.createObjectURL(image.files[0]),
				modelDetails: {}
			}
		];
		d.close();
	};
	let open = false;
</script>

<section class="flex h-screen w-screen">
	<SideBar bind:open />
	<Hamburger bind:open />
	<Contents  />
</section>
