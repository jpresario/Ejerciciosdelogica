function drawX(tamano) {
    if (tamano % 2 === 0) {
      tamano++; // Asegurarse de que el tamaño sea impar para una X simétrica
    }
  
    for (let i = 1; i <= tamano; i++) {
      let linea = "";
      for (let j = 1; j <= tamano; j++) {
        if (j === i || j === tamano - i + 1) {
          linea += "*";
        } else {
          linea += " ";
        }
      }
      console.log(linea);
    }
  }
  drawX(5);
