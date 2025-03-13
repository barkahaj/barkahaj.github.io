let toggleButton = document.getElementById('toggle-button');
let toggleContainer = document.getElementById('toggle-container');
let aboutMeTitle = document.getElementById('about-me-title');
let aboutMeDescription = document.getElementById('about-me-description');
let letsCollaborate = document.getElementById('lets-collaborate');
let footerLinks = document.querySelectorAll(".footer-menu");

let isDarkMode = false;

let darkMode = () => {

    if (isDarkMode) {
        //button
        toggleButton.style.backgroundColor = 'black';
        toggleButton.style.left = '5px';
        toggleContainer.style.backgroundColor = 'white';
        

        // Light mode
        document.body.style.backgroundColor = 'white';
        aboutMeTitle.style.color = 'black';
        aboutMeDescription.style.color = 'black';
        letsCollaborate.style.color = 'black';
        
        footerLinks.forEach(link => {
            link.style.color = 'black';
        })

    } else {
        //button
        toggleButton.style.backgroundColor = 'white';
        toggleButton.style.left = '35px';
        toggleContainer.style.backgroundColor = 'black';

        // Dark mode
        document.body.style.backgroundColor = 'black';
        aboutMeTitle.style.color = 'white';
        aboutMeDescription.style.color = 'white';
        letsCollaborate.style.color = 'white';
        
        footerLinks.forEach(link => {
            link.style.color = 'white';
        })

    }

    isDarkMode = !isDarkMode;
}

toggleButton.addEventListener('click', darkMode);
