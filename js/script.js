// Banner Slideshow Logic with alternating slide direction
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.banner-slideshow .slide');
  let current = 0;
  let forward = true;

  function showSlide(index, direction = 'right') {
    slides.forEach((slide, i) => {
      slide.classList.remove('active', 'slide-in-right', 'slide-in-left');
      if (i === index) {
        slide.classList.add('active', direction === 'right' ? 'slide-in-right' : 'slide-in-left');
      }
    });
  }

  function nextSlide() {
    let prev = current;
    if (forward) {
      current++;
      if (current >= slides.length) {
        current = slides.length - 2;
        forward = false;
      }
    } else {
      current--;
      if (current < 0) {
        current = 1;
        forward = true;
      }
    }
    showSlide(current, forward ? 'right' : 'left');
  }

  showSlide(current, 'right');
  setInterval(nextSlide, 4000); // Change slide every 4 seconds
});

// WhatsApp Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
  // Replace with your restaurant's WhatsApp number (no + or spaces)
  const whatsappNumber = "27721234567";
  document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !message) return;
    const text = encodeURIComponent(`Hello, my name is ${name}.\n${message}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  });
});

// Smooth scrolling to sections
document.querySelectorAll('.hero nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target && target.scrollIntoView({ behavior: 'smooth' });
  });
});

document.querySelectorAll('.card-bg').forEach(bg => {
  const img = new Image();
  const url = bg.style.backgroundImage.slice(5, -2);
  img.src = url;
  img.onload = () => bg.style.opacity = '1';
});

// Bubble Animation Around the Page (not popup)
let bubbleInterval; // <-- Move to global scope

document.addEventListener('DOMContentLoaded', function () {
  const bubbleBgContainer = document.getElementById('bubble-bg-container');
  function createBgBubble() {
    if (!bubbleBgContainer) return;
    const bubble = document.createElement('div');
    bubble.className = 'bubble-bg';
    const size = Math.random() * 32 + 24; // 24px to 56px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 98}%`;
    bubble.style.background = `linear-gradient(135deg, #f5c27f 60%, #fff 100%)`;
    bubbleBgContainer.appendChild(bubble);
    setTimeout(() => bubble.remove(), 7000);
  }
  bubbleInterval = setInterval(createBgBubble, 400);
});

// Promotion Popup Logic (remove bubble animation from popup)
document.addEventListener('DOMContentLoaded', function () {
  // List your 10 promo image paths here (update with your actual image paths)
  const promoImages = [
    '../media/images/pop1.png',
    '../media/images/pop2.png',
    '../media/images/pop3.png',
  ];
  // Pick a random image
  const promoImg = document.getElementById('promo-img');
  if (promoImg) {
    const random = Math.floor(Math.random() * promoImages.length);
    promoImg.src = promoImages[random];
  }
  // Show popup
  const popup = document.getElementById('promo-popup');
  if (popup) popup.style.display = 'flex';

  // Close popup
  const closeBtn = document.getElementById('promo-close');
  if (closeBtn) {
    closeBtn.onclick = function () {
      popup.style.display = 'none';
      // Stop the bubble animation when popup is closed
      if (typeof bubbleInterval !== 'undefined') {
        clearInterval(bubbleInterval);
        bubbleInterval = undefined;
      }
    };
  }
});

// Toggle mobile nav
const navToggle = document.querySelector('.mobile-nav-toggle');
const mainNav = document.querySelector('.main-nav');
navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
  document.body.classList.toggle('nav-open');
});

//Wine page
    document.querySelectorAll('.menu-card').forEach(card => {
      card.addEventListener('click', function(e) {
        e.preventDefault();
        const menu = this.getAttribute('data-menu');
        if (!menu) return;
        document.getElementById('wine-champagne-details').style.display = 'block';
        document.querySelectorAll('#wine-champagne-details .menu-detail').forEach(detail => {
          detail.style.display = 'none';
        });
        const show = document.getElementById('menu-' + menu);
        if (show) show.style.display = 'block';
        document.getElementById('wine-champagne-details').scrollIntoView({behavior: 'smooth'});
      });
    });

    //Drinks page
    document.querySelectorAll('.menu-card').forEach(card => {
      card.addEventListener('click', function(e) {
        e.preventDefault();
        const menu = this.getAttribute('data-menu');
        if (!menu) return;
        document.getElementById('drinks-menu-details').style.display = 'block';
        document.querySelectorAll('#drinks-menu-details .menu-detail').forEach(detail => {
          detail.style.display = 'none';
        });
        const show = document.getElementById('menu-' + menu);
        if (show) show.style.display = 'block';
        document.getElementById('drinks-menu-details').scrollIntoView({behavior: 'smooth'});
      });
    });

    //Food Page
    document.querySelectorAll('.menu-card').forEach(card => {
      card.addEventListener('click', function(e) {
        e.preventDefault();
        const menu = this.getAttribute('data-menu');
        if (!menu) return;
        document.getElementById('food-menu-details').style.display = 'block';
        document.querySelectorAll('#food-menu-details .menu-detail').forEach(detail => {
          detail.style.display = 'none';
        });
        const show = document.getElementById('menu-' + menu);
        if (show) show.style.display = 'block';
        document.getElementById('food-menu-details').scrollIntoView({behavior: 'smooth'});
      });
    });
