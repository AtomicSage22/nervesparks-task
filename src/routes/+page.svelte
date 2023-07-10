<script>
    import SideBar from "./components/SideBar.svelte";
    import Contents from "./components/Contents.svelte";
    import Hamburger from "./components/Hamburger.svelte";

    import altroz from "../assets/cars/tata-altroz.webp";
    import harrier from "../assets/cars/tata-harrier.webp";
    import nexon from "../assets/cars/tata-nexon.webp";
    import safari from "../assets/cars/tata-safari.webp";
    import tiago from "../assets/cars/tata-tiago.webp";
    
    let open = false;
</script>
<section class="flex h-screen w-screen">
    <SideBar bind:open/>
    <Hamburger bind:open={open}/>
    <Contents />
</section>
