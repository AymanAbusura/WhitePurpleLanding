const items = [
    { title: "How do I make a deposit or a withdrawal?", description: "You can deposit from $250 using a card or bank transfer. Withdrawals are fast—usually completed within 24 hours." },
    { title: "Can you use the platform at ShaddersAgent for free?", description: "Unlike other platforms that may charge fees, ShaddersAgent has no commissions, no signup fees, and no hidden fees imposed." },
    { title: "Is investing a safe thing to do?", description: "Investments should be approached realistically – all investments carry some risk. The risk is related to the volatility of digital assets." },
    { title: "Does ShaddersAgent have a mobile version?", description: "Provided you can work with a stable connection and browser, you can log onto ShaddersAgent right from the mobile device to make trades while stuck in the office or waiting for your meal at the restaurant. Take it on the go so that you don’t miss prime opportunities!" },
];

const carousel = document.getElementById('carousel');

items.forEach((item, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('item');
    carouselItem.style.setProperty('--index', index + 1);
    carouselItem.innerHTML = `
        <div class="item-body">
            <p class="carousel-title">${item.title}</p>
            <p class="carousel-text">${item.description}</p>
        </div>
    `;
    carousel.appendChild(carouselItem);
});