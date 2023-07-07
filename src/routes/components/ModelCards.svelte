<script>
    export let modelDetail;
</script>

<div class= "bg-white h-[15rem] flex flex-col gap-1 justify-center items-center w-[18rem] border-[2px] border-[#dfe0e] border-solid rounded-[0.5rem] hover:shadow-[inset_0_0_0_2px_#3751ff] hover:cursor-pointer">
    <h2 class= "text-2xl font-medium">{modelDetail.value}</h2>
    <h3 class= "text-lg pt-2">{modelDetail.name}</h3>
</div>