<script>
	import addCards from '../../../assets/icons/add-side.png';
	import ModelCards from '../../components/ModelCards.svelte';
	import { data1 } from '../../../stores/data1';
	import { currentDetails } from '../../../stores/currentDetails';

	let selectedModel;
	let selectedCompany;

	currentDetails.subscribe((value) => {
		selectedModel = value.currentModel;
		selectedCompany = value.currentCompany;
	});

	let modelDetails = [];

	data1.subscribe((value) => {
		const currentCompany = value.find((company) => company.companyName === selectedCompany);
		const currentModel = currentCompany.models.find((model) => model.modelName === selectedModel);

		modelDetails = currentModel.modelDetails;
	});

	let featureName;
	let featureProperty;
</script>

<main class="relative h-screen w-screen bg-[#F7F8FC] flex flex-wrap gap-4 p-[3rem]">
	{#each modelDetails as modelDetail}
		<ModelCards {modelDetail} />
	{/each}
	<dialog id="f">
		<form enctype="multipart/form-data" on:submit|preventDefault>
			<label for="modalName">Feature:</label>
			<input type="text" id="modalName" name="modalName" bind:this={featureName} required /><br
			/><br />
			<label for="modalValue">Feature:</label>
			<input
				type="text"
				id="modalValue"
				name="modalValue"
				bind:this={featureProperty}
				required
			/><br /><br />

			<button
				type="submit"
				on:click={() => {
					modelDetails = [
						...modelDetails,
						{ name: featureName.value, value: featureProperty.value }
					];
					f.close();
				}}>Submit</button
			>
			<button
				type="button"
				on:click={() => {
					f.close();
				}}>Cancel</button
			>
		</form>
	</dialog>
	<img
		on:click={() => {
			f.showModal();
		}}
		src={addCards}
		alt=""
		class="absolute h-[3rem] right-[3rem] bottom-[3rem] hover:cursor-pointer"
	/>
</main>
