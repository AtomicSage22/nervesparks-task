<script>
    import addCards from "../../assets/icons/add.png"
    import ModelCards from "../components/ModelCards.svelte";
    import { currentDetails } from "../../stores/currentDetails";

    let featureName;
    let featureProperty
    let currentModel;
    currentDetails.subscribe((value) => {
        currentModel = value.currentModel;
    });
</script>

<main class= "relative h-screen w-screen bg-[#F7F8FC] flex flex-wrap gap-4 p-[3rem]">
    {#each currentModel.modelDetails as modelDetail}
        <ModelCards {modelDetail}/>
    {/each}
    <dialog id="f">
        <form enctype="multipart/form-data">
          <label for="modalName">Feature:</label>
          <input type="text" id="modalName" name="modalName" bind:this = {featureName} required><br><br>
          <label for="modalValue">Feature:</label>
          <input type="text" id="modalValue" name="modalValue" bind:this = {featureProperty} required><br><br>
            

          <button type="submit" on:click={()=>{
            currentDetails.update((prev) => ({ ...prev, currentModel: {...prev.currentModel, modelDetails: [...prev.currentModel.modelDetails, {name: featureName.value, value: featureProperty.value}]} }));
            f.close();
          }}>Submit</button>
          <button type="button" on:click={()=>{f.close()}}>Cancel</button>
        </form>
    </dialog>
    <img on:click={()=>{f.showModal()}} src={addCards} alt="" class= "absolute h-[3rem] right-[3rem] bottom-[3rem] hover:cursor-pointer">
</main>