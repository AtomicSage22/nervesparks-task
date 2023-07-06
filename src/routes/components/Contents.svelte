<script>
    import ContentCards from "./ContentCards.svelte";
    import addButton from "../../assets/icons/add.png";
    export let company;
    export let currentCompany;
    export let updateContents;
    let input;
    let imageInput;
</script>

<main class= " relative bg-[#F7F8FC] w-[85%] h-screen flex gap-[4rem] p-8">
    {#if company !== undefined}
        {#each company.models as model}
            <ContentCards name = {model.modelName} image = {model.modelImage} {currentCompany}/>
        {/each}
    {/if}
    <dialog id="d">
        <form enctype="multipart/form-data">
          <label for="modalName">Model Name:</label>
          <input type="text" id="modalName" name="modalName" bind:this = {input} required><br><br>
          
          <label for="modalImage">Model Image:</label>
          <input type="file" id="modalImage" name="modalImage" bind:this = {imageInput} accept="image/*" required><br><br>
          
          <button type="submit" on:click={()=>{
            updateContents(input, imageInput)
          }}>Submit</button>
          <button type="button" on:click={()=>{d.close()}}>Cancel</button>
        </form>
    </dialog>
      
    <img on:click={()=>{d.showModal()}} src = {addButton} class = "absolute h-[4rem] bottom-[3rem] right-[3rem] hover:cursor-pointer" alt="">
</main>