const userName = document.querySelector(".userName");
const userImage = document.querySelector(".userImage");


fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        userImage.src = `assets/worker/${data.userImage}`;
        userName.innerText = data.user;
    })
