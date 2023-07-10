<script>
    import ContentCards from "./ContentCards.svelte";
    import addButton from "../../assets/icons/add.png";
    import expandButton from "../../assets/icons/expand.png";
    import { currentDetails } from "../../stores/currentDetails";
    import { data1 } from "../../stores/data1";
    let company;
    currentDetails.subscribe((value) => {
        company = value.currentCompany;
    });
    let input;
    let imageInput;
</script>

<main class= " pl-[15%] relative bg-[] w-[100%] h-screen flex gap-[6rem] p-8 flex-wrap">
    {#if company !== null}
        {#each company.models as model}
            <ContentCards {model}/>
        {/each}
    {/if}
    <dialog id="d">
        <form enctype="multipart/form-data">
          <label for="modalName">Model Name:</label>
          <input type="text" id="modalName" name="modalName" bind:this = {input} required><br><br>
          
          <label for="modalImage">Model Image:</label>
          <input type="file" id="modalImage" name="modalImage" bind:this = {imageInput} accept="image/*" required><br><br>
          
          <button type="submit" on:click={()=>{
            currentDetails.update((prev) => ({ ...prev, currentCompany: {...prev.currentCompany, models: [...prev.currentCompany.models, {modelName: input.value, modelImage: URL.createObjectURL(imageInput.files[0]), modelDetails: []}]} }));
            d.close();
          }}>Submit</button>
          <button type="button" on:click={()=>{d.close()}}>Cancel</button>
        </form>
    </dialog>
    
      
    <img on:click={()=>{d.showModal()}} src = {addButton} class = "absolute h-[3rem] bottom-[3rem] right-[3rem] hover:cursor-pointer" alt=""/>
    <a href="/ModelDetails"><img src={expandButton} alt="" class="absolute h-[3rem] top-[3rem] right-[3rem] hover:cursor-pointer"/></a>
</main>