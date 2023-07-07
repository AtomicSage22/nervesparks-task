<script>
    import logo from '../../assets/logoipsum.svg';
    import addButton from '../../assets/icons/add-side.png'
    import SideCards from './SideCards.svelte';
    export let companies;
    export let updateMain;
    let companyName;
</script>

<aside class= "bg-[#363740] h-screen w-[15%] flex flex-col">
    <img class=" w-[13rem] p-[1.4rem]" src = {logo} alt="">
    <div class= "pt-[3rem] flex flex-col items-start text-[#a4a6b3]">
        {#each companies as company}
        <SideCards {company} {updateMain}/>
        {/each}
    </div>
    <dialog id="c">
        <form enctype="multipart/form-data">
          <label for="modalName">Model Name:</label>
          <input type="text" id="modalName" name="modalName" bind:this = {companyName} required><br><br>
          
          <button type="submit" on:click={()=>{
            companies = [...companies, {companyName: companyName.value,
            models: []}];
            c.close()
          }}>Submit</button>
          <button type="button" on:click={()=>{c.close()}}>Cancel</button>
        </form>
    </dialog>
    <img on:click={()=>{c.showModal()}} class="w-[4rem] self-center pt-4 hover:cursor-pointer" src={addButton} alt="">
</aside>