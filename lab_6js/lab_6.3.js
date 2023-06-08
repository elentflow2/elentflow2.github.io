let hideButtons = document.querySelectorAll('.remove-button');
hideButtons.forEach(function(button)
button.addEventListener('click', function(event) {
let message = event.target.parentNode;
message.style.display = 'none';
