
document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetSection = document.querySelector(event.target.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const animatedImages = document.querySelectorAll('.animated-image');
animatedImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.animation = "float-hover 1s infinite ease-in-out";
    });
    image.addEventListener('mouseout', () => {
        image.style.animation = "float 2s infinite ease-in-out";
    });
});

const ngoRequests = [
    { name: "Helping Hands", foodNeeded: "Rice", quantity: 50, contact: "9876543210" },
    { name: "Hunger Relief", foodNeeded: "Bread", quantity: 20, contact: "8765432109" },
    { name: "Care Givers", foodNeeded: "Vegetables", quantity: 30, contact: "7654321098" },
];

const servicesSection = document.getElementById('services');
const ngoList = document.createElement('div');
ngoList.classList.add('ngo-list');
servicesSection.appendChild(ngoList);

ngoRequests.forEach(ngo => {
    const ngoCard = document.createElement('div');
    ngoCard.classList.add('ngo-card');
    ngoCard.innerHTML = `
        <h3>${ngo.name}</h3>
        <p><strong>Food Needed:</strong> ${ngo.foodNeeded}</p>
        <p><strong>Quantity:</strong> ${ngo.quantity} kg</p>
        <p><strong>Contact:</strong> ${ngo.contact}</p>
    `;
    ngoList.appendChild(ngoCard);
});


const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => {
    observer.observe(section);
});

const footer = document.querySelector('footer');
const currentYear = new Date().getFullYear();
footer.innerHTML = `© ${currentYear} Food Rescue | Connecting Food to People in Need`;

const donationForm = document.getElementById('donationForm');
donationForm.addEventListener('submit', event => {
    event.preventDefault();
    const donorName = document.getElementById('donorName').value;
    const foodItem = document.getElementById('foodItem').value;
    const quantity = document.getElementById('quantity').value;

    alert(`Thank you, ${donorName}! Your donation of ${quantity} kg of ${foodItem} has been received.`);
    donationForm.reset();
});
