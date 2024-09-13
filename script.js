document.querySelector('.navbar-toggler').addEventListener('click', function() {
    document.getElementById('navbarMenu').classList.toggle('active');
  });

  // script.js

// Toggle menu saat tombol hamburger diklik
document.querySelector('.navbar-toggler').addEventListener('click', function() {
  const navbarMenu = document.getElementById('navbarMenu');
  navbarMenu.classList.toggle('active');
});

// Menambahkan efek perubahan background navbar saat scroll
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('active');
  } else {
      navbar.classList.remove('active');
  }
});

// Smooth scroll ke bagian tertentu saat link diklik
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.getElementById('navbarToggler');
  const navbarMenu = document.getElementById('navbarMenu');

  navbarToggler.addEventListener('click', function () {
    navbarMenu.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarMenu = document.querySelector('#navbarMenu');

  navbarToggler.addEventListener('click', function () {
    navbarMenu.classList.toggle('active');
    navbarToggler.classList.toggle('active');
  });
});
