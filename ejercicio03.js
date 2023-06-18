function countNameRepetitions(names) {
    const count = {};
    
    names.forEach((name) => {
      if (count[name]) {
        count[name] += '*';
      } else {
        count[name] = '*';
      }
    });
  
    return count;
  }
  const nombres = ['Juan', 'María', 'Pedro', 'Juan', 'María', 'María'];
const resultado = countNameRepetitions(nombres);
console.log(resultado);
