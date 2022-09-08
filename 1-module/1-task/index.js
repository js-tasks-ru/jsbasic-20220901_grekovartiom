function factorial(n) {
  let resolve = n;
  if ( n === 1 || n === 0) {
    resolve = 1;
  } else {
    for (let i = 1; i < n; i++) {
      resolve = n*n-i;
    }
  }
  return resolve;
  }
