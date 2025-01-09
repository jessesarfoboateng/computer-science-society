document.getElementById('eventDate').addEventListener('input', function() {
  const selectedDate = new Date(this.value);
  const eventsContainer = document.getElementById('eventsContainer');
  const events = Array.from(eventsContainer.getElementsByClassName('event'));

  events.sort((a, b) => {
      const dateA = new Date(a.getAttribute('data-date'));
      const dateB = new Date(b.getAttribute('data-date'));
      const diffA = Math.abs(dateA - selectedDate);
      const diffB = Math.abs(dateB - selectedDate);
      return diffA - diffB || dateA - dateB;
  });

  // Clear and re-append sorted events
  eventsContainer.innerHTML = '';
  events.forEach(event => eventsContainer.appendChild(event));
});