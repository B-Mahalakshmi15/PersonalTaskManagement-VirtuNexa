document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
  
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.1)';
      });
      link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
      });
    });
  
    const smoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjust scroll position
        behavior: 'smooth',
      });
    };
  
    navLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });
  
    // Add scrolling effect for the navbar on scroll
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#3c6e6e';
      } else {
        navbar.style.backgroundColor = '#fc5c65';
      }
    })
    document.getElementById("task-nav").addEventListener("click", function() {
        const taskList = document.getElementById("task-list");
        taskList.style.display = taskList.style.display === "block" ? "none" : "block";
      });
      
      document.getElementById("message-nav").addEventListener("click", function() {
        const messageList = document.getElementById("message-list");
        messageList.style.display = messageList.style.display === "block" ? "none" : "block";
      });
      
      document.getElementById("notification-nav").addEventListener("click", function() {
        const notificationList = document.getElementById("notification-list");
        notificationList.style.display = notificationList.style.display === "block" ? "none" : "block";
      });
      
      document.getElementById("profile-nav").addEventListener("click", function() {
        const profileSection = document.getElementById("profile");
        profileSection.style.display = profileSection.style.display === "block" ? "none" : "block";
      });
      
      
  });
  