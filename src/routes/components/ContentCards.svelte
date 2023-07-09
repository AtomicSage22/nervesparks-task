<script>
	import { currentDetails } from '../../stores/currentDetails';
	let selectedModel;

	currentDetails.subscribe((value) => {
		selectedModel = value.currentModel;
	});

	export let model;
</script>

<div
	class={`${
		selectedModel === model.modelName ? 'border-2 border-blue-800 hover:border-none' : ''
	} bg-white h-[15rem] flex flex-col gap-1 justify-center items-center w-[18rem] border-[2px] border-[#dfe0e] border-solid rounded-[0.5rem] hover:shadow-[inset_0_0_0_2px_#3751ff] hover:cursor-pointer`}
	on:click={() => {
		currentDetails.update((prev) => ({ ...prev, currentModel: model.modelName }));
	}}
>
	<img class="h-[5rem]" src={model.modelImage} alt="" />
	<h2 class="text-xl font-medium pt-3">{model.modelName}</h2>
</div>
