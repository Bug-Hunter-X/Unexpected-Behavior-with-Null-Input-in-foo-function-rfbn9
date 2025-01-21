function foo(a, b) {
  if (a === null || b === null) {
    console.warn('Null values encountered. Using default values.');
    a = a || 0; // Assign default value if a is null or undefined
    b = b || 0; // Assign default value if b is null or undefined
  }
  // ... rest of the function
} 