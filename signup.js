const signupForm = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  errorMessage.textContent = '';

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!validateEmail(email)) {
    errorMessage.textContent = 'Invalid email format';
    return;
  }

  if (password.length < 6) {
    errorMessage.textContent = 'Password must be at least 6 characters';
    return;
  }

  alert('Signup successful!');
  window.location.href = 'login.html';
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
