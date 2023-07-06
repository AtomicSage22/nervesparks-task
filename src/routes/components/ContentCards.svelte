<script>
    export let name;
    export let image;
</script>

<div class= "bg-white h-[15rem] flex flex-col gap-1 justify-center items-center w-[18rem] border-[2px] border-[#dfe0e] border-solid rounded-[0.5rem] hover:shadow-[inset_0_0_0_2px_#3751ff] hover:cursor-pointer">
    <img class= "h-[5rem]" src={image} alt="">
    <h2 class= "text-xl font-medium pt-3">{name}</h2>
</div>