<script>
    import logo from '../../assets/logoipsum.svg';
    import addButton from '../../assets/icons/add-side.png'
    import SideCards from './SideCards.svelte';
    import { data1 } from '../../stores/data1';
    let companies;
    data1.subscribe((value) => {
        companies = value;
    });
    let companyName;
    export let open = false;
</script>

<aside class= "absolute bg-[#363740] h-screen w-[15%] " class:open>
    <nav class="flex flex-col">
      <img class=" w-[13rem] p-[1.4rem] block" src = {logo} alt="">
      <div class= "pt-[3rem] flex flex-col items-start text-[#a4a6b3]">
          {#each companies as company}
          <SideCards {company}/>
          {/each}
      </div>
      <dialog id="c" >
          <form enctype="multipart/form-data">
            <label for="modalName">Model Name:</label>
            <input type="text" id="modalName" name="modalName" bind:this = {companyName} required><br><br>
      
            <button type="submit" on:click={()=>{
              data1.update((prev) => [ ...prev, {companyName: companyName.value,
              models: []}]);

              c.close();
            }}>Submit</button>
            <button type="button" on:click={()=>{c.close()}}>Cancel</button>
          </form>
      </dialog>
      <img on:click={()=>{c.showModal()}} class="block w-[4rem] self-center pt-4 hover:cursor-pointer" src={addButton} alt="">
    </nav>
</aside>


<style>
	aside {
    z-index: 20;
		left: -100%;
		transition: left 0.3s ease-in-out
	}
	
	.open {
		left: 0
	}
</style>