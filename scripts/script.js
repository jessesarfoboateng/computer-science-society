const profilePics = document.querySelectorAll('.profile-pic');

profilePics.forEach((pic, index) => {
  const delay = index * 0.5; // Delay each image's animation slightly
  pic.style.animationDelay = `${delay}s`;

  // Randomize starting position within the container
  const randomX = Math.random() * window.innerWidth - 50;
  const randomY = Math.random() * window.innerHeight - 50;
  pic.style.left = `${randomX}px`;
  pic.style.top = `${randomY}px`;
});


//Alerts user on successful subscription
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.newsletter-form');
  const input = document.querySelector('.newsletter-input');

  form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevents the form from refreshing the page

      const email = input.value.trim();
      if (validateEmail(email)) {
          alert(`Thank you for subscribing with: ${email}`);
          input.value = ''; // Clears the input field after submission
      } else {
          alert('Please enter a valid email address.');
      }
  });

  function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation pattern
      return emailPattern.test(email);
  }
});

