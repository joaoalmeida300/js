let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

let media = (nota1+nota2+nota3) / 3;

if (media >= 7){
    alert("VocÊ foi APROVADO com a média: " + media.toFixed(2));
} else {
    alert("VocÊ foi REPROVADO com a média: " + media.toFixed(2));
}