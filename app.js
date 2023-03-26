const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    let value = button.getAttribute('data-num');
    if (value == '=') {
      screen.value = eval(screen.value);
    } else if (value == 'C') {
      screen.value = '';
    } else {
      screen.value += value;
    }
  });
});
