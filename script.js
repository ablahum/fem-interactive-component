const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    buttons.forEach((btn) => btn.classList.remove('active'));
    this.classList.add('active');
  });
});

const submit = document.getElementsByClassName('submit');

console.log(submit);
