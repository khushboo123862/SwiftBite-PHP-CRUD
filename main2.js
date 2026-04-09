

const signInBtn = document.getElementById('signInBtn');
const loginForm = document.getElementById('loginForm');
const closeBtn = document.querySelector('.closeBtn');

signInBtn.addEventListener('click', () => {
  loginForm.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  loginForm.style.display = 'none';
});

// Optional: Close form when clicking outside the modal
window.addEventListener('click', (e) => {
  if (e.target === loginForm) {
    loginForm.style.display = 'none';
  }
});
