<script>
    import SideBar from "./components/SideBar.svelte";
    const companies = [
        {companyName: "Tata Motors Ltd",
        models: []},
        {companyName: "Maruti Suzuki India Ltd",
        models: []},
        {companyName: "Mahindra and Mahindra Ltd",
        models: []},
        {companyName: "Bajaj Auto Ltd",
        models: []},
        {companyName: "TVS Motor Company Ltd",
        models: []},
    ]
</script>
<section class="flex h-screen w-screen">
    <SideBar companies = {companies}/>
    <main class= "bg-[#F7F8FC] w-[85%] h-screen"></main>
</section>
