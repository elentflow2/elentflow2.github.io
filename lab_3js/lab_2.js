"use strict";

function pow(x,n){
  if (n == 0){
    return 1;
  }
  else if (n < 0){
    return 1 / pow(x,-n);
  }
  else {
    return x * pow(x,n - 1);
  }
}

function sumTo(n){
  if (n == 1){
    return 1;
  }
  else {
    return n + sumTo(n - 1);
  }
}

function factorial(n){
  if (n == 0){
    return 1n;
  }
  else{
    return BigInt(n) * factorial(n - 1);
  }
}

export function fib(n){
  let x = 0n;
  let y = 1n;
  if (n == 0){
    return x;
  }
  else if (n == 1){
    return y
  }
  else{
    for (let j = 2; j <= n; j++) {
            let c = x + y;
            x = y;
            y = c;
        }

        return y;
  }
}

function compare(x){
  return function (y){
    if (x == y){
      return null;
    }
    if (x > y){
      return false
    }
    if (x < y){
      return true
    }
  }
}

function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
