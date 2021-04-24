function botao(){
    document.getElementById("agradecimento").innerHTML = "obrigado por clickar";

    /* alert("brigado"); */
}

function redirec(){
    window.open("https://google.pt/");  //janela separada
    /* window.location.href="https://google.pt/"; */ // janela atual
}

function trocartexto(elemento){
    /* document.getElementById("agradecimento").innerHTML = "trocou"; */
    elemento.innerHTML = "Obrigado!";
}

function voltar(elemento){
    /* document.getElementById("agradecimento").innerHTML = "obrigado por clickar";  */
    elemento.innerHTML = "ja foi";
}

function frosquinhas(){
    console.log("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/* 
function soma(n1, n2) {
    return n1 + n2;
}

function validaIdade(idade){
    var validar; //<--- parem com var assim, usem globais
    if(idade >= 18) {
    var validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("idade?");
console.log(validaIdade(idade));

 */
/* console.log(soma(5, 10)); */

/* var d = new Date();
console.log("hoje " + getDate() ); */

/* var d = new Date();
alert(d.getMonth() );
alert(d.getMinutes() );
alert(d.getHours() );

 */
/* var count = 0;

for(count = 0; count < 5; count++){
    alert(count);
}
 */
/* var count = 0;
while (count <= 5){
    console.log(count);
    count = count + 1;
} */

/* 
var idade = prompt("qual é a sua idade?");
if (idade > 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}; 
*/

/* var fruta = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(fruta.nome); 
alert(fruta[1].nome);
*/

/* 
var lista = ["maça", "pera", "laranja"];
lista.pop(); //remove o ultimo elemento do array
lista.push("uva");
console.log(lista[1]);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join(" - "));
*/

/*
var nome = "José";
alert("bem vindo " + nome);
var n1 = 5;
var n2 = 3;
var frase = "Jap é melhor do mundo";
alert(nome + " tem " + idade + " anos");
console.log(nome);
console.log(n1 * n2);
console.log(frase.toLowerCase());
alert(frase.replace("Jap", "Br"))
*/