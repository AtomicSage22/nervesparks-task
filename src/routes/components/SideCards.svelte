<script>
    export let company;
    export let updateMain;
</script>

<h3 on:click={updateMain(company)} class = "w-full text-lg font-medium text hover:bg-[#3e4049] p-[1.4rem] hover:text-[#dde2ff] hover:border-l-4 hover:border-l-[#dde2ff] border-solid hover:pl-[calc(1.1rem-4px)] hover:cursor-pointer">{company.companyName}</h3>