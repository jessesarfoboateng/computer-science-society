const button = document.getElementById('joinButton');
const successMessage = document.getElementById('successMessage');

button.addEventListener('click', () => {
    button.style.display = 'none';
    successMessage.style.display = 'block';
});