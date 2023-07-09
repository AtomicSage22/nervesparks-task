<script>
	import ContentCards from './ContentCards.svelte';
	import addButton from '../../assets/icons/add.png';
	import expandButton from '../../assets/icons/expand.png';
	import { currentDetails } from '../../stores/currentDetails';
	import { data1 } from '../../stores/data1';
	let selectedCompany;
	let selectedModel;

	currentDetails.subscribe((value) => {
		selectedCompany = value.currentCompany;
		selectedModel = value.currentModel;
	});

	let allCompanies;

	data1.subscribe((value) => {
		allCompanies = value;
		if (selectedCompany) {
			const currentCompany = value.find((company) => company.companyName === selectedCompany);
			console.log('DATA WAS CHANGED', currentCompany);
			models = currentCompany.models;
		}
	});

	let models = [];

	currentDetails.subscribe((value) => {
		if (value.currentCompany) {
			const currentCompany = allCompanies.find(
				(company) => company.companyName === value.currentCompany
			);
			models = currentCompany.models;
		}
		console.log(models);
	});

	let input;
	let imageInput;
</script>

<main class=" pl-[15%] relative bg-[] w-[100%] h-screen flex gap-[6rem] p-8 flex-wrap">
	{#if models.length > 0}
		{#each models as model}
			<ContentCards {model} />
		{/each}
	{/if}

	<dialog id="d">
		<form enctype="multipart/form-data" on:submit|preventDefault>
			<label for="modalName">Model Name:</label>
			<input type="text" id="modalName" name="modalName" bind:this={input} required /><br /><br />

			<label for="modalImage">Model Image:</label>
			<input
				type="file"
				id="modalImage"
				name="modalImage"
				bind:this={imageInput}
				accept="image/*"
				required
			/><br /><br />

			<button
				type="submit"
				on:click={() => {
					data1.update((prev) => {
						return prev.map((item) => {
							if (item.companyName === selectedCompany) {
								return {
									...item,
									models: [
										...item.models,
										{ modelName: input.value, modelImage: URL.createObjectURL(imageInput.files[0]) }
									]
								};
							}
							return item;
						});
					});
				}}>Submit</button
			>
			<button
				type="button"
				on:click={() => {
					d.close();
				}}>Cancel</button
			>
		</form>
	</dialog>

	<img
		on:click={() => {
			d.showModal();
		}}
		src={addButton}
		class="absolute h-[3rem] bottom-[3rem] right-[3rem] hover:cursor-pointer"
		alt=""
	/>
	<a href={`/model/${selectedModel}`}
		><img
			src={expandButton}
			alt=""
			class="absolute h-[3rem] top-[3rem] right-[3rem] hover:cursor-pointer"
		/></a
	>
</main>
