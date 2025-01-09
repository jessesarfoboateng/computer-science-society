 // Scroll to Resources Section
 function scrollToResources() {
  document.getElementById("resources").scrollIntoView({ behavior: "smooth" });
}

// Scroll to Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Back-to-Top Button Visibility
window.onscroll = function () {
  const btn = document.querySelector(".back-to-top");
  if (document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Filter Resources
function filterResources() {
  const searchQuery = document
    .getElementById("search-bar")
    .value.toLowerCase();
  const cards = document.querySelectorAll(".resource-card");
  cards.forEach((card) => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(searchQuery) ? "block" : "none";
  });
}