// **Exercício 1: Cálculo de Desconto**

// Crie um programa que solicite o valor total de uma compra. Se o valor for maior que R$100, aplique um desconto de 10%. Exiba o valor final da compra com ou sem desconto.

// **Exercício 2: Verificação de Elegibilidade para Dirigir**

// Crie um programa para verificar se a pessoa tem mais de 18 anos e possui habilitação, caso contrário, não poderá dirigir.

// **Exercício 3: Cálculo de Média**

// Desenvolva um programa em JavaScript que receba 3 notas de um aluno (nota 1 e nota 2 e nota 3). O programa deverá calcular a média dessas três notas. Com base na média, o programa deve exibir uma mensagem informando se o aluno foi "Aprovado" (média maior ou igual a 7) ou "Reprovado" (média menor que 7).

// **Requisitos:**

const numero = prompt('digite um valor');

if (numero > 100) {
    const total = numero * (1-10/100)
    alert('com desconto'+ total)} else {
        alert('sem desconto'+ numero)
    }
// numero % 10 === 100 ? alert("com desconto") : alert("sem desconto")

let idade = 20;
let temHabilitacao = true; //true para sim, false para não

// Verificação
if (idade>= 18 && temHabilitacao) {
    console.log("Você pode  dirigir.");
} else {
    console.log("Você não pode dirigir.");
}
// Exercício 3: Cálculo de Média

// 1. O programa deve solicitar ao usuário que insira as três notas do aluno.
// 2. As notas inseridas devem ser armazenadas em variáveis.
// Solicita as 3 notas do usuário
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));

// 3. O programa deve calcular a média das três notas.
// Calcula a média das três notas
let media = (nota1 + nota2 + nota3) / 3;

// 4. Utilize uma estrutura condicional para verificar se a média é maior ou igual a 7.
// 5. Se a média for maior ou igual a 7, exiba a "Aprovado".
// 6. Caso contrário (média menor que 7), exiba a mensagem: "Reprovado".
// 7. O programa deve exibir a média calculada junto com a mensagem de aprovação ou reprovação.
// Verifica se o aluno foi aprovado ou reprovado

if (media >= 7 && media <= 10) { 
   alert( 'Aprovado')
} else if( media <=6 && media >=4){
    alert('Recuperação')
} else if (media > 10){ 
} else { 
    alert('Digite um número válido')
    alert('Reprovado')
}
    alert("Média: " + media.toFixed(2) + " - Reprovado")

    // Utilize uma estrutura de condição para receber um número de 1 a 7 e exibir o dia da semana correspondente (1 para Domingo, 2 para )
switch (dia) { 
    case 1:
        alert('Domingou')
    case 2:
        alert('Segundou')
    case 3:
        alert('Terçou')
    case 4:
        alert('Quartou')
    case 5:
        alert('Quintou')
    case 6:
        alert('Sextou')
    case 7:
        alert('Sabadou')
    case 8:

