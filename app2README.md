# OPRAÇÕES DE REDUÇÃO:
```
const number = "123456";
const sumOfDigits = number.split("").reduce( (acc, digit) => {
    return acc + parseInt(digit, 10);
}, 0);

console.log(sumOfDigits);
```
## A técnica usada é conhecida como redução ou folding em programação funcional.
### Soma de Elementos:
#### Passo a Passo do Cálculo:
#### 1 Declaração da String:
```
const number = "123456";
```
#### Aqui, estamos definindo uma constante chamada number que armazena a string "123456".

#### 2 Divisão da String em um Array:
```
const digits = number.split("");
```
#### O método split("") é chamado na string, o que divide a string em um array de caracteres individuais.
#### O resultado será: ["1", "2", "3", "4", "5", "6"].

### 3 Uso do reduce() para Somar os Dígitos:3
```
const sumOfDigits = digits.reduce((acc, digit) => {
  return acc + parseInt(digit, 10);
}, 0);
```
#### reduce percorre cada elemento do array e acumula um resultado final baseado na função fornecida.
#### A função acumuladora (acc, digit) => { return acc + parseInt(digit, 10); } é usada para somar os dígitos.
#### O valor inicial do acumulador acc é 0.

### 4 Função Acumuladora Explicada Iteração por Iteração:

#### Vamos detalhar como o acumulador acc e o valor atual digit mudam em cada iteração:

#### Iteração 1:

#### digit é "1".
#### acc é 0.
#### parseInt("1", 10) converte "1" para 1.
#### acc + 1 resulta em 1.
#### acc se torna 1.
#### Iteração 2:

#### digit é "2".
#### acc é 1.
#### parseInt("2", 10) converte "2" para 2.
#### acc + 2 resulta em 3.
#### acc se torna 3.
#### Iteração 3:

#### digit é "3".
#### acc é 3.
#### parseInt("3", 10) converte "3" para 3.
#### acc + 3 resulta em 6.
#### acc se torna 6.
#### Iteração 4:

#### digit é "4".
#### acc é 6.
#### parseInt("4", 10) converte "4" para 4.
#### acc + 4 resulta em 10.
#### acc se torna 10.
#### Iteração 5:

#### digit é "5".
#### acc é 10.
#### parseInt("5", 10) converte "5" para 5.
#### acc + 5 resulta em 15.
#### acc se torna 15.
#### Iteração 6:

#### digit é "6".
#### acc é 15.
#### parseInt("6", 10) converte "6" para 6.
#### acc + 6 resulta em 21.
#### acc se torna 21.

### 5 Resultado Final:

#### Após todas as iterações do reduce, o acumulador acc conterá a soma de todos os dígitos na string "123456".
#### O resultado será 21.

### Exibição do Resultado:
```
console.log(sumOfDigits);  // 21
```
#### console.log(sumOfDigits) imprime o valor 21 no console.

### Resumo;
#### O código number.split("").reduce((acc, digit) => { return acc + parseInt(digit, 10); }, 0); faz o seguinte:

#### 1 Divide a string "123456" em um array de caracteres: ["1", "2", "3", "4", "5", "6"].
#### 2 Usa reduce para percorrer o array e acumular a soma dos dígitos:
#### A função acumuladora converte cada caractere em um número usando parseInt(digit, 10).
#### Adiciona o número ao acumulador acc.
#### Retorna o acumulador atualizado para a próxima iteração.
#### 3 O resultado final é a soma dos dígitos, que é 21.
#### Isso permite somar eficientemente os dígitos de um número representado como uma string.