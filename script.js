const main = document.querySelector('.wrapper');
const thanks = document.querySelector('.thank-wrapper');

const buttons = document.querySelectorAll('.rate');
const submit = document.getElementById('submit');

const rating = document.getElementById('rating');

// when rating button clicked
buttons.forEach((button) => {
  button.addEventListener('click', function () {
    buttons.forEach((btn) => btn.classList.remove('active'));
    this.classList.add('active');
  });
});

// when submit button clicked
submit.addEventListener('click', function () {
  thanks.classList.remove('hidden');
  main.style.display = 'none';
});

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    rating.innerHTML = button.innerHTML;
  });
});
