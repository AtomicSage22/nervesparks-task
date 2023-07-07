<script>
    import SideBar from "./components/SideBar.svelte";
    import Contents from "./components/Contents.svelte";
    import altroz from "../assets/cars/tata-altroz.webp";
    import harrier from "../assets/cars/tata-harrier.webp";
    import nexon from "../assets/cars/tata-nexon.webp";
    import safari from "../assets/cars/tata-safari.webp";
    import tiago from "../assets/cars/tata-tiago.webp";
    let companies = [
        {companyName: "Tata Motors Ltd",
        models: [
            {
                modelName: "Tata Altroz",
                modelImage: altroz,
                modelDetails: {}
            },
            {
                modelName: "Tata Harrier",
                modelImage: harrier,
                modelDetails: {}
            },
            {
                modelName: "Tata Nexon",
                modelImage: nexon,
                modelDetails: {}
            },
            {
                modelName: "Tata Safari",
                modelImage: safari,
                modelDetails: {}
            },
            {
                modelName: "Tata Tiago",
                modelImage: tiago,
                modelDetails: {}
            }
            ]},
        {companyName: "Maruti Suzuki India Ltd",
        models: [
            {
                modelName: "",
                modelImage: "",
                modelDetails: {}
            },
            {
                modelName: "",
                modelImage: "",
                modelDetails: {}
            },
            {
                modelName: "",
                modelImage: "",
                modelDetails: {}
            },
            {
                modelName: "",
                modelImage: "",
                modelDetails: {}
            },
            {
                modelName: "",
                modelImage: "",
                modelDetails: {}
            }
        ]},
        {companyName: "Mahindra and Mahindra Ltd",
        models: [
            {
                modelName: "",
                modelImage: "",
                modelDetails: {}
            },
            {
                modelName: "",
                modelImage: "",
                modelDetails: {}
            },
            {
                modelName: "",
                modelImage: "",
                modelDetails: {}
            },
            {
                modelName: "",
                modelImage: "",
                modelDetails: {}
            },
            {
                modelName: "",
                modelImage: "",
                modelDetails: {}
            }
        ]},
        {companyName: "Bajaj Auto Ltd",
        models: [
            {
                modelName: "",
                modelImage: "",
                modelDetails: {}
            },
            {
                modelName: "",
                modelImage: "",
                modelDetails: {}
            },
            {
                modelName: "",
                modelImage: "",
                modelDetails: {}
            },
            {
                modelName: "",
                modelImage: "",
                modelDetails: {}
            },
            {
                modelName: "",
                modelImage: "",
                modelDetails: {}
            }
        ]},
        {companyName: "TVS Motor Company Ltd",
        models: [
            {
                modelName: "",
                modelImage: "",
                modelDetails: {}
            },
            {
                modelName: "",
                modelImage: "",
                modelDetails: {}
            },
            {
                modelName: "",
                modelImage: "",
                modelDetails: {}
            },
            {
                modelName: "",
                modelImage: "",
                modelDetails: {}
            },
            {
                modelName: "",
                modelImage: "",
                modelDetails: {}
            }
        ]},
    ]

    let currentCompany;

    const updateMain = (company) =>{
        currentCompany = company;
    }
    const updateContents = (name, image) =>{
        currentCompany.models = [...currentCompany?.models,{
            modelName: name.value,
            modelImage: URL.createObjectURL(image.files[0]),
            modelDetails: {}}]
            d.close();
    }
</script>
<section class="flex h-screen w-screen">
    <SideBar companies = {companies} {updateMain} />
    <Contents company = {currentCompany} {updateContents}/>
</section>
