function createPhoneNumber(numbers) {
    const areaCode = numbers.slice(0, 3).join('');
    const firstPart = numbers.slice(3, 6).join('');
    const secondPart = numbers.slice(6).join('');
  
    return `(${areaCode}) ${firstPart}-${secondPart}`;
  }
  console.log(createPhoneNumber([5, 5, 5, 1, 3, 4, 7, 8, 9, 0])); // Devuelve "(555) 134-7890"
  console.log(createPhoneNumber([3, 0, 5, 1, 2, 7, 7, 2, 4, 9])); // Devuelve "(305) 127-7249"
    