document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const dob = document.getElementById('dob').value;
  const year = document.getElementById('year').value;
  const email = document.getElementById('email').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (!firstName || !lastName || !dob || !year || !email || !username || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
  }

  if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
  }

  alert(`Welcome, ${firstName} ${lastName}! Your account has been created.`);
});

function togglePasswordVisibility(id) {
  const passwordField = document.getElementById(id);
  passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
}