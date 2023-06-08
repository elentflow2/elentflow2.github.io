let hider = document.getElementById('hider'); 
let text = document.getElementById('text');
hider.onclick = function() {
  if (text.style.display === 'none') {
    text.style.display = 'block';
    hider.value = 'Спрятать текст';
  } 
  else {
    text.style.display = 'none';
    hider.value = 'Показать текст';
  }
};
