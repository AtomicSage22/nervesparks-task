<script>
    import logo from '../../assets/logoipsum.svg';
    import addButton from '../../assets/icons/add.png'
    import SideCards from './SideCards.svelte';
    export let companies;
    export let updateMain;
</script>

<aside class= "bg-[#363740] h-screen w-[15%] flex flex-col">
    <img class=" w-[13rem] p-[1.4rem]" src = {logo} alt="">
    <div class= "pt-[3rem] flex flex-col items-start text-[#a4a6b3]">
        {#each companies as company}
        <SideCards {company} {updateMain}/>
        {/each}
    </div>
    <img class="w-[4rem] self-center pt-4 hover:cursor-pointer" src={addButton} alt="">
</aside>