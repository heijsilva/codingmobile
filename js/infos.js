const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const imgDetails = document.querySelector(".img-details");
const imageWrapper = document.querySelector(".img-wrapper");
const titleContent = document.querySelector(".title-content");
const group = document.querySelector(".group");
const carosel = document.querySelector(".carosel");
const floorplaner = document.querySelector(".floorplaner-img");

fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        const warn = data.warns[id];

        imgDetails.src = `assets/images/${warn.image}`;
        imgDetails.alt = warn.imageDescription;
        imageWrapper.style.boxShadow = `5px 5px 0px 0px ${warn.color}`;

        titleContent.innerText = warn.name;
        group.innerText = warn.group;

        warn.workers.map(worker => {
            const item = document.createElement("div");
            item.className = 'item';
            const image = document.createElement("img");
            image.src = `assets/worker/${worker.image}`;
            const name = document.createElement("p");
            name.innerText = worker.name;

            item.appendChild(image);
            item.appendChild(name);

            carosel.appendChild(item);
        });

        floorplaner.src = `assets/floorplaner/${warn.floorPlaner}`;
    }
);
