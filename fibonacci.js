// Solution 1 - Iterative

function fib(n) {
  const number = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = number[number.length - 1];
    const b = number[number.length - 2];

    number.push(a + b);
  }
  return number[n];
}

// Solution 2 - Recursive

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}
