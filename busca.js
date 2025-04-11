/** 
 * Busca linear visual mostrando o processo passo a passo até encontrar o valor escolhido.
 * Busca linear é um método de procurar um elemento específico em uma lista ou vetor. 
 * Ela verifica cada elemento sequencialmente 
 * desde o início até encontrar o que está procurando ou chegar ao fim sem encontrar nada.
 * 
 * */

new p5((sketch) => {
    let valores = [];
    let alvo;
    let indiceAtual = 0;
    let encontrado = -1;

    sketch.setup = () => {
        sketch.createCanvas(400, 200).parent('busca');
        valores = Array.from({length: 50}, () => Math.floor(sketch.random(10, 100)));
        alvo = valores[Math.floor(sketch.random(valores.length))]; 
        sketch.frameRate(10);
    };

    // Função de busca linear isolada (sem interface gráfica)
    function buscaLinearPassoAPasso(lista, alvo, passoAtual) {
        if (passoAtual >= lista.length) return -1; // não achou
        if (lista[passoAtual] === alvo) return passoAtual; // achou
        return -2; // continua buscando
    }

    sketch.draw = () => {
        sketch.background(240);

        // desenha a visualização da lista
        valores.forEach((v, idx) => {
            sketch.fill(idx === indiceAtual ? 'orange' : 'gray');
            sketch.rect(idx * 8, sketch.height - v, 7, v);
        });

        // executa um passo da busca linear
        let resultado = buscaLinearPassoAPasso(valores, alvo, indiceAtual);

        if (resultado >= 0) { // encontrou
            encontrado = resultado;
            sketch.fill('green');
            sketch.rect(encontrado * 8, sketch.height - valores[encontrado], 7, valores[encontrado]);
            sketch.noLoop();
        } else if (resultado === -1) { // não encontrou e terminou a busca
            sketch.noLoop();
        } else { // continua procurando
            indiceAtual++;
        }

        sketch.fill(0);
        sketch.text(`Buscando: ${alvo}`, 10, 20);
        if (encontrado >= 0) {
            sketch.text(`Encontrado em: ${encontrado}`, 10, 40);
        } else if (resultado === -1) {
            sketch.text(`Valor não encontrado`, 10, 40);
        }
    };
});


/*
let vetor = [4, 8, 15, 16, 23, 42];
let alvo = 15; // valor procurado

function gerarVetorAleatorio(tamanho) {
    let vetor = [];

    for (let i = 0; i < tamanho; i++) {
        let valorAleatorio = Math.floor(Math.random() * 1000000) + 1;
        vetor.push(valorAleatorio);
    }

    return vetor;
}

// Gerando o vetor com 1 milhão de valores
//const vetor = gerarVetorAleatorio(1000000);

function buscaLinear(vetor, alvo) {
    for (let i = 0; i < vetor.length; i++) {
        if (lista[i] === alvo) {
            return i; // Retorna o índice onde encontrou o valor
        }
    }
    return -1; // Não encontrou
}

let indice = buscaLinear(vetor, alvo);
console.log(indice); // Vai imprimir 2, porque valores[2] é 15

*/