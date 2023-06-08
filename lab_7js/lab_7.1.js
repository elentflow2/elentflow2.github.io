let selectedOption = music.options[music.selectedIndex];
console.log( music.options[music.selectedIndex] );
console.log( selectedOption.value );
console.log( selectedOption.text );
let newOption = new Option("Классика", "Classic");
music.append(newOption);
newOption.selected = true;
