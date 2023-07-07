<script>
    export let model;
    export let selected;
</script>

<div on:click={()=>{
    selected = model
    console.log(selected)
    }} class= "{selected === model? 'shadow-[inset_0_0_0_2px_#3751ff]': ''} bg-white h-[15rem] flex flex-col gap-1 justify-center items-center w-[18rem] border-[2px] border-[#dfe0e] border-solid rounded-[0.5rem] hover:shadow-[inset_0_0_0_2px_#3751ff] hover:cursor-pointer">
    <img class= "h-[5rem]" src={model.modelImage} alt="">
    <h2 class= "text-xl font-medium pt-3">{model.modelName}</h2>
</div>