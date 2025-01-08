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

