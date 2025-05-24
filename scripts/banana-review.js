document.addEventListener('DOMContentLoaded', () => {
  const reviewForm = document.getElementById('review-form');
  const reviewsContainer = document.getElementById('reviews-container');

  const defaultReviews = [
    { name: "Anna B.", text: "Absolutely love this Banana! Rich and pure.", rating: 5 },
    { name: "James K.", text: "Best banana I’ve ever eaten. Highly recommend.", rating: 4 },
    { name: "Rita M.", text: "Smooth texture and natural flavor. No regrets!", rating: 5 },
    { name: "Tom O.", text: "I enjoy every bit of it! Highly recommended", rating: 4 }
  ];

  function loadReviews() {
    let reviews = JSON.parse(localStorage.getItem('terraBananaReviews'));

    if (!reviews || reviews.length === 0) {
      reviews = defaultReviews;
      localStorage.setItem('terraBananaReviews', JSON.stringify(reviews));
    }

    reviewsContainer.innerHTML = ''; // Clear container

    reviews.forEach(review => {
      const div = document.createElement('div');
      div.classList.add('review-card');
      div.innerHTML = `
        <strong>${review.name}</strong>
        <div class="stars">${'⭐'.repeat(review.rating)}</div>
        <p>${review.text}</p>
      `;
      reviewsContainer.appendChild(div);
    });
  }

  if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('reviewer-name').value.trim();
      const text = document.getElementById('review-text').value.trim();
      const rating = parseInt(document.getElementById('review-rating').value);

      if (!name || !text || isNaN(rating)) {
        alert('Please fill out all fields and choose a rating.');
        return;
      }

      const newReview = { name, text, rating };
      const reviews = JSON.parse(localStorage.getItem('terraBananaReviews')) || [];
      reviews.push(newReview);
      localStorage.setItem('terraBananaReviews', JSON.stringify(reviews));

      alert('Thanks for your review!');
      reviewForm.reset();
      loadReviews();
    });
  }

  loadReviews(); 
});

