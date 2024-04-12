const welcomeElement = document.querySelector('.welcome');
const companyElement = document.querySelector('.companyName');

fetch('../data.json')
    .then((res) => res.json())
    .then((response) => {
        welcomeElement.innerText = `Olá, ${response.user}`;
        companyElement.innerText = response.company;
    })
