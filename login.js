const loginForm = document.getElementById('login-form');
const loginErrorMessage = document.getElementById('login-error-message');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  loginErrorMessage.textContent = '';

  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();

  if (!validateEmail(email)) {
    loginErrorMessage.textContent = 'Invalid email format';
    return;
  }

  if (password === '') {
    loginErrorMessage.textContent = 'Password cannot be empty';
    return;
  }

  alert('Login successful!');
  window.location.href = 'dashboard.html';
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
