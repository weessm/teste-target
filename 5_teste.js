function inverterString(string) {
  let stringInvertida = "";
  for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
  }
  return stringInvertida;
}

const stringEntrada = "Olá, Target!"; // String a ser invertida
console.log(inverterString(stringEntrada));
