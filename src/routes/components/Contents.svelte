<script>
    import ContentCards from "./ContentCards.svelte";
    import addButton from "../../assets/icons/add.png";
    import expandButton from "../../assets/icons/expand.png";
    export let company;
    export let currentCompany;
    export let updateContents;
    let input;
    let imageInput;
    let selected;
</script>

<main class= " relative bg-[] w-[85%] h-screen flex gap-[6rem] p-8 flex-wrap">
    {#if company !== undefined}
        {#each company.models as model}
            <ContentCards {model} {currentCompany} {selected}/>
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
    
      
    <img on:click={()=>{d.showModal()}} src = {addButton} class = "absolute h-[3rem] bottom-[3rem] right-[3rem] hover:cursor-pointer" alt=""/>
    <a href="/ModelDetails"><img src={expandButton} alt="" class="absolute h-[3rem] top-[3rem] right-[3rem] hover:cursor-pointer"/></a>
</main>