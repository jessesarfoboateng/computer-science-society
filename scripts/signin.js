// Toggling password visibility
    const togglePasswordBtn = document.getElementById('toggle-password');
    const passwordField = document.getElementById('password');

    togglePasswordBtn.addEventListener('click', () => {
        const isPasswordVisible = passwordField.type === 'text';
        passwordField.type = isPasswordVisible ? 'password' : 'text';
        togglePasswordBtn.textContent = isPasswordVisible ? '👁️' : '🙈';
    });

    // Form validation
    const signInForm = document.getElementById('sign-in-form');
    const usernameField = document.getElementById('username');

    signInForm.addEventListener('submit', (e) => {
        if (!usernameField.value.trim() || !passwordField.value.trim()) {
            e.preventDefault(); // Prevent form submission
            alert('Please fill in both the username/email and password fields.');
        } else {
            alert('Sign-in successful!');
        }
    });
