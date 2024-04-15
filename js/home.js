const welcomeElement = document.querySelector('.welcome');
const companyElement = document.querySelector('.companyName');
const mainElement = document.querySelector('main');

fetch('../data.json')
    .then((res) => res.json())
    .then((response) => {
        welcomeElement.innerText = `Olá, ${response.user}`;
        companyElement.innerText = response.company;

        response.warns.forEach(warn => {
            const warnElement = document.createElement('section');
            warnElement.className = 'warnElement';

            const title = document.createElement('h2');
            title.textContent = warn.name;
            warnElement.appendChild(title);

            const imageDiv = document.createElement('div');
            imageDiv.className = 'image';
            const imageWrapper = document.createElement('div');
            imageWrapper.className = 'img-wrapper';
            imageWrapper.style.boxShadow = `5px 5px 0px 0px ${warn.color}`;
            const img = document.createElement('img');
            img.src = `assets/images/${warn.image}`;
            img.alt = warn.imageDescription;
            imageWrapper.appendChild(img);
            imageDiv.appendChild(imageWrapper);
            warnElement.appendChild(imageDiv);

            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'actions';
            const alertButton = document.createElement('button');
            const alertIcon = document.createElement('ion-icon');
            alertIcon.setAttribute('name', 'alert-circle-sharp');
            alertButton.appendChild(alertIcon);
            actionsDiv.appendChild(alertButton);
            const helpButton = document.createElement('button');
            const helpIcon = document.createElement('ion-icon');
            helpIcon.setAttribute('name', 'help-circle-sharp');
            helpButton.appendChild(helpIcon);
            actionsDiv.appendChild(helpButton);
            warnElement.appendChild(actionsDiv);

            const notificationDiv = document.createElement('div');
            notificationDiv.className = 'notification';
            notificationDiv.style.backgroundColor = warn.color
            const warningIcon = document.createElement('ion-icon');
            warningIcon.setAttribute('name', 'warning-outline');
            notificationDiv.appendChild(warningIcon);
            warnElement.appendChild(notificationDiv);

            mainElement.appendChild(warnElement);
        });
    });
