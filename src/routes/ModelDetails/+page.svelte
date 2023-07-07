<script>
    import addCards from "../../assets/icons/add.png"
    import ModelCards from "../components/ModelCards.svelte";

    let featureName;
    let featureProperty

    let modelDetails = [
        {
            name: "Price",
            value: "Rs.6.60 Lakh"
        },
        {
            name: "Mileage",
            value: "23.64 kmpl"
        },
        {
            name: "Engine",
            value: "1199 to 1497 cc"
        },
        {
            name: "Safety",
            value: "5 Star (Global NCAP)"
        },
        {
            name: "Fuel Type",
            value: "Petrol, CNG & Diesel"
        },
        {
            name: "Transmission",
            value: "Manual & Automatic"
        },
        {
            name: "Seating Capacity",
            value: "5 Seater"
        },
    ]
</script>

<main class= "relative h-screen w-screen bg-[#F7F8FC] flex flex-wrap gap-4 p-[3rem]">
    {#each modelDetails as modelDetail}
        <ModelCards {modelDetail}/>
    {/each}
    <dialog id="f">
        <form enctype="multipart/form-data">
          <label for="modalName">Feature:</label>
          <input type="text" id="modalName" name="modalName" bind:this = {featureName} required><br><br>
          <label for="modalValue">Feature:</label>
          <input type="text" id="modalValue" name="modalValue" bind:this = {featureProperty} required><br><br>
            

          <button type="submit" on:click={()=>{
            modelDetails = [...modelDetails, {name: featureName.value,
            value: featureProperty.value}];
            f.close();
          }}>Submit</button>
          <button type="button" on:click={()=>{f.close()}}>Cancel</button>
        </form>
    </dialog>
    <img on:click={()=>{f.showModal()}} src={addCards} alt="" class= "absolute h-[4rem] right-[3rem] bottom-[3rem]">
</main>