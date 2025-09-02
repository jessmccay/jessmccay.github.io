const plants = [
    {
        name: "Bitterroot (Lewisia rediviva)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Lewisia_rediviva_4.jpg/320px-Lewisia_rediviva_4.jpg",
        description: "Montana's state flower, this pink-blossomed perennial is a traditional food source for the Confederated Salish and Kootenai Tribes (CSKT), symbolizing survival."
    },
    {
        name: "Coneflowers (Echinacea and Gaillardia spp.)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Echinacea_purpurea07.jpg/320px-Echinacea_purpurea07.jpg",
        description: "Found in prairies and meadows, these drought-resistant plants attract pollinators."
    },
    {
        name: "Western blue virgin's bower (Clematis occidentalis)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Clematis_occidentalis_Bugle_near_Zortman_Montana.JPG/320px-Clematis_occidentalis_Bugle_near_Zortman_Montana.JPG",
        description: "This native vine with violet flowers drapes over shrubs and trees."
    },
    {
        name: "Lewis' mock-orange (Philadelphus lewisii)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Philadelphus_lewisii_061806.jpg/320px-Philadelphus_lewisii_061806.jpg",
        description: "A native shrub with fragrant white blooms, it belongs to the hydrangea family."
    },
    {
        name: "Wild strawberry (Fragaria virginiana)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Fragaria_virginiana-04-08-11.jpg/320px-Fragaria_virginiana-04-08-11.jpg",
        description: "A delicious, edible groundcover found in shaded areas."
    },
    {
        name: "Yarrow (Achillea millefolium)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Achillea_millefolium_6879.JPG/320px-Achillea_millefolium_6879.JPG",
        description: "A native forb, it can also act as a groundcover in lawns."
    },
    {
        name: "Douglas fir (Pseudotsuga menziesii)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pseudotsuga_menziesii_002.JPG/320px-Pseudotsuga_menziesii_002.JPG",
        description: "A dominant tree species in the region's forests."
    },
    {
        name: "Ponderosa pine (Pinus ponderosa)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Pinus_ponderosa_0301.JPG/320px-Pinus_ponderosa_0301.JPG",
        description: "Another common tree in forested and montane regions."
    }
];


const animals = [
    {
        name: "Grizzly Bear",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Grizzly_Bear_in_Montana.jpg/320px-Grizzly_Bear_in_Montana.jpg",
        description: "A large bear species native to the mountainous regions of Montana, important for ecosystem balance."
    },
    {
        name: "Bald Eagle",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Haliaeetus_leucocephalus_Brazil_2004-2020_3387.jpg/320px-Haliaeetus_leucocephalus_Brazil_2004-2020_3387.jpg",
        description: "The iconic bird of prey with a white head, commonly seen near lakes and rivers in Montana."
    },
    {
        name: "Mountain Lion",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Mountain_lion_running.jpg/320px-Mountain_lion_running.jpg",
        description: "Also known as cougar or puma, a large solitary cat native to the western US including Montana."
    }
];

function createCard(item, container) {
    const card = document.createElement('div');
    card.className = "card";
    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <h4>${item.name}</h4>
    `;
    card.onclick = () => showDetails(item);
    container.appendChild(card);
}

function showDetails(item) {
    const detailsSection = document.getElementById('detailsSection');
    document.getElementById('detailsName').textContent = item.name;
    const img = document.getElementById('detailsImage');
    img.src = item.image;
    img.alt = item.name;
    document.getElementById('detailsDescription').textContent = item.description;
    detailsSection.classList.remove('hidden');
}

function closeDetails() {
    document.getElementById('detailsSection').classList.add('hidden');
}

function showPlants() {
    document.getElementById('plantsSection').classList.remove('hidden');
    document.getElementById('animalsSection').classList.add('hidden');
    closeDetails();
}

function showAnimals() {
    document.getElementById('animalsSection').classList.remove('hidden');
    document.getElementById('plantsSection').classList.add('hidden');
    closeDetails();
}

document.addEventListener('DOMContentLoaded', () => {
    const plantsList = document.getElementById('plantsList');
    const animalsList = document.getElementById('animalsList');

    plants.forEach(plant => createCard(plant, plantsList));
    animals.forEach(animal => createCard(animal, animalsList));

    document.getElementById('btnPlants').onclick = showPlants;
    document.getElementById('btnAnimals').onclick = showAnimals;
    document.getElementById('closeDetails').onclick = closeDetails;

    // Default show plants on load
    showPlants();
});
