let obj = {
    className: 'open menu'
}

obj.addClass = function addClass(cls) {
    let arr = this.className.split(" ");
    if (!arr.includes(cls)) {
        arr.push(cls)
    }
    this.className = arr.join(" ");
}

obj.addClass('kuki'); 
obj.addClass('open'); 

console.log(obj.className);

obj.removeClass = function removeClass(cls) {
    let arr = this.className.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            arr.splice(i, 1);
            i--;
        }
    }
    obj.className = arr.join(' ');
}

obj.removeClass('kuki'); 
obj.removeClass('kukii');

console.log(obj.className);
