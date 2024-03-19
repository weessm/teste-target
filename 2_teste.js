function verificaFibo(num) {
  let sequenciaFibo = [0, 1];

  while (sequenciaFibo[sequenciaFibo.length - 1] <= num) {
    sequenciaFibo.push(
      sequenciaFibo[sequenciaFibo.length - 1] +
        sequenciaFibo[sequenciaFibo.length - 2]
    );

    if (sequenciaFibo.includes(num)) {
      return `${num} pertence à sequência de Fibonacci.`;
    }
  }

  return `${num} não pertence à sequência de Fibonacci.`;
}

const numeroEntrada = 7; // Número a ser verificado
console.log(verificaFibo(numeroEntrada));
