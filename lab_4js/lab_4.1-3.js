let book1 = {};
book1.title = "KUKI";
book1.pubYear = 2003;
book1.price = 2000;

let book2 = {
  title: "CS",
  pubYear: 2023,
  price: 1000,
};

for (let prop in book1) {
  console.log(`${prop}: ${book1[prop]}`);
}

for (let prop in book2) {
  console.log(`${prop}: ${book2[prop]}`);
}

book1.show = function() {
  console.log(`Title: ${this.title}, Price: ${this.price}`);
}

book2.show = function() {
  console.log(`Title: ${this.title}, Price: ${this.price}`);
}

book1.show();
book2.show();

function isEmpty(obj) {
  for (let prop in obj) {
    return false;
  }
  return true;
}

console.log(isEmpty(book1));
console.log(isEmpty(book2));
