<script>
    import logo from '../../assets/logoipsum.svg'
    import SideCards from './SideCards.svelte';
    export let companies;
</script>

<aside class= "bg-[#363740] h-screen w-[15%] flex flex-col">
    <img class=" w-[13rem] p-[1.4rem]" src = {logo} alt="">
    <div class= "pt-[3rem] flex flex-col items-start text-[#a4a6b3]">
        {#each companies as company}
        <SideCards companyName = {company.companyName}/>
        {/each}
    </div>
</aside>