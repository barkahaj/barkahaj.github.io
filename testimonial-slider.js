// Array of testimonials, each with a message, name, occupation, and background color
const testimonials = [
    {
        message: "This service completely transformed our online presence! The team was professional, efficient, and delivered outstanding results.",
        name: "Alice Johnson",
        occupation: "Marketing Manager",
        color: "lightblue"
    },
    {
        message: "I couldn't be happier with the website they built for my business. It's sleek, fast, and exactly what I envisioned!",
        name: "Michael Smith",
        occupation: "Small Business Owner",
        color: "lightgreen"
    },
    {
        message: "A fantastic experience from start to finish! The customer support was top-notch, and the final product exceeded my expectations.",
        name: "Jessica Lee",
        occupation: "Freelance Designer",
        color: "lightcoral"
    }
];

let currentIndex = 0;

const testimonialMessage = document.getElementById("testimonial-message");
const leftButton = document.getElementById("turn-left");
const rightButton = document.getElementById("turn-right");

const updateTestimonial = () => {
   
    testimonialMessage.innerHTML = `
        <p>"${testimonials[currentIndex].message}"</p>
        <br>
        <h3>${testimonials[currentIndex].name}</h3>
        <p>${testimonials[currentIndex].occupation}</p>
        <br>
    `;
};


const nextTestimonial = () => {
    
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial();
};


const prevTestimonial = () => {
   
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
};


rightButton.addEventListener("click", nextTestimonial);
leftButton.addEventListener("click", prevTestimonial);


updateTestimonial();
