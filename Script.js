document.addEventListener('DOMContentLoaded', () => {

  // Category Filtering Logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Application Form Handling
  const enrollmentForm = document.getElementById('enrollmentForm');
  const formSuccess = document.getElementById('formSuccess');

  if (enrollmentForm) {
    enrollmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulate form submission process
      enrollmentForm.style.opacity = '0.5';
      
      setTimeout(() => {
        enrollmentForm.reset();
        enrollmentForm.style.opacity = '1';
        formSuccess.classList.remove('hidden');
      }, 800);
    });
  }
});