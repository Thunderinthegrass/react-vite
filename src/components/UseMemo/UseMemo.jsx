import React from 'react'

const UseMemo = () => {

  // function factorial(n) {
  //   if (n <= 1) return n;
  //   return n * factorial(n - 1);
  // }
  // console.log("факториал: ", factorial(5))

  function memoize(fibonacci) {
    const cache = {};

    return function (n) {
      if (n in cache) {
        return cache[n];
      } else {
        const result = fibonacci(n);
        cache[n] = result;
        console.log(cache)
        console.log(cache[n])
        console.log("Функция вызвана")
        return result;
      }
    }
  }

  function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 1);
  }

  const memoizedFibonacci = memoize(fibonacci);

  // console.log(fibonacci(3))
  console.log(memoizedFibonacci(5));
  console.log(memoizedFibonacci(10));
  console.log(memoizedFibonacci(15));
  console.log(memoizedFibonacci(5));
  console.log(memoizedFibonacci(10));
  console.log(memoizedFibonacci(15));
  console.log(memoizedFibonacci(5));
  console.log(memoizedFibonacci(10));
  console.log(memoizedFibonacci(15));
  console.log(memoizedFibonacci(5));
  console.log(memoizedFibonacci(10));
  console.log(memoizedFibonacci(15));

  return (
    <div>
      <h2>UseMemo</h2>
    </div>
  )
}

export default UseMemo;