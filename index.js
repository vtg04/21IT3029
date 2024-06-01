const express = require('express');

const app = express();
const PORT = 9876;
const WINDOW_SIZE = 10;

let numbersStorage = [];

// Function to generate prime numbers
const generatePrimeNumbers = (count) => {
  let primes = [];
  let num = 2;
  while (primes.length < count) {
    if (isPrime(num)) primes.push(num);
    num++;
  }
  return primes;
};

const isPrime = (num) => {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

// Function to generate Fibonacci numbers
const generateFibonacciNumbers = (count) => {
  let fibs = [0, 1];
  while (fibs.length < count) {
    let next = fibs[fibs.length - 1] + fibs[fibs.length - 2];
    fibs.push(next);
  }
  return fibs.slice(0, count);
};

// Function to generate even numbers
const generateEvenNumbers = (count) => {
  let evens = [];
  for (let i = 0; evens.length < count; i++) {
    if (i % 2 === 0) evens.push(i);
  }
  return evens;
};

// Function to generate random numbers
const generateRandomNumbers = (count) => {
  let randoms = [];
  for (let i = 0; i < count; i++) {
    randoms.push(Math.floor(Math.random() * 100));
  }
  return randoms;
};

const THIRD_PARTY_API_FUNCTIONS = {
  'p': generatePrimeNumbers,
  'f': generateFibonacciNumbers,
  'e': generateEvenNumbers,
  'r': generateRandomNumbers
};

app.get('/numbers/:numberid', (req, res) => {
  const { numberid } = req.params;

  if (!THIRD_PARTY_API_FUNCTIONS[numberid]) {
    return res.status(400).json({ error: 'Invalid number ID' });
  }

  // Fetch numbers from the appropriate function
  const numbers = THIRD_PARTY_API_FUNCTIONS[numberid](WINDOW_SIZE);

  // Ensure unique numbers
  const uniqueNumbers = [...new Set(numbers)];

  // Update storage with unique numbers
  const windowPrevState = [...numbersStorage];
  uniqueNumbers.forEach(num => {
    if (!numbersStorage.includes(num)) {
      if (numbersStorage.length >= WINDOW_SIZE) {
        numbersStorage.shift();
      }
      numbersStorage.push(num);
    }
  });

  const windowCurrState = [...numbersStorage];

  // Calculate the average
  const avg = numbersStorage.length > 0
    ? (numbersStorage.reduce((acc, num) => acc + num, 0) / numbersStorage.length)
    : 0;

  res.json({
    windowPrevState,
    windowCurrState,
    numbers: uniqueNumbers,
    avg: parseFloat(avg.toFixed(2))
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});