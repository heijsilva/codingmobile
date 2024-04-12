const welcomeElement = document.querySelector('.welcome');
const companyElement = document.querySelector('.companyName');
const mainElement = document.querySelector('main');

fetch('../data.json')
    .then((res) => res.json())
    .then((response) => {
        welcomeElement.innerText = `Olá, ${response.user}`;
        companyElement.innerText = response.company;
        response.warns.forEach(warn => {
            mainElement.innerHTML += `
            <section>
            <div class="title">
                <h2>${warn.name}</h2>
            </div>
            <div class="image">
                <div class="content">
                    <div class="img-wrapper">
                        <img src="assets/images/${warn.image}" alt="${warn.imageDescription}">
                    </div>
                    <div class="bg-color"></div>
                </div>
            </div>
            <div class="actions">
                <button><ion-icon name="alert-circle-sharp"></ion-icon></button>
                <button><ion-icon name="help-circle-sharp"></ion-icon></button>
            </div>
            <div class="notification">
                <ion-icon name="warning-outline"></ion-icon>
            </div>
        </section>
            `;
        });
    });
