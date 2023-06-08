var placeholders = document.querySelectorAll('[data-placeholder]');
for (var i = 0; i < placeholders.length; i++) {
  var input = placeholders[i];
  var placeholderText = input.getAttribute('data-placeholder'); 
  input.value = placeholderText; 
  input.classList.add('placeholder'); 
  input.addEventListener('focus', onInputFocus); 
  input.addEventListener('blur', onInputBlur); 
}

function onInputFocus(e) {
  var input = e.target;
  var placeholderText = input.getAttribute('data-placeholder');
  if (input.value === placeholderText) { 
    input.value = ''; 
  }
  input.classList.remove('placeholder');
}

function onInputBlur(e) {
  var input = e.target;
  var placeholderText = input.getAttribute('data-placeholder');
  if (input.value === '') 
    input.value = placeholderText; 
    input.classList.add('placeholder');
}
