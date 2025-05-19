const card = document.getElementById('on-hover-card');
const button = document.getElementById('appear-on-screen');

button.style.transform = 'translateY(100px)';
button.style.transition = 'transform 0.3s ease';

const handleHover = () => {
    button.style.transform = 'translateY(0px)';  
}

const handleLeave = () => {
    button.style.transform = 'translateY(100px)';
}

card.addEventListener('mouseenter', handleHover);
card.addEventListener('mouseleave', handleLeave);
