const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const imgDetails = document.querySelector(".img-details");
const imageWrapper = document.querySelector(".img-wrapper");
const titleContent = document.querySelector(".title-content");
const group = document.querySelector(".group");
const detailsContent = document.querySelector(".details-content");

fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        const warn = data.warns[id];

        imgDetails.src = `assets/images/${warn.image}`;
        imgDetails.alt = warn.imageDescription;
        imageWrapper.style.boxShadow = `5px 5px 0px 0px ${warn.color}`;
        titleContent.innerText = warn.name;
        group.innerText = warn.group;
        detailsContent.innerText = warn.details;
    });
