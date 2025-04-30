/**
 * Algoritmo força bruta que encontra o par de pontos mais próximos, 
 * indicando visualmente os pontos encontrados. 
 * */

// Função que recebe um array de pontos e retorna o par mais próximo deles
function encontrarParMaisProximo(pontos) {
    let parMaisProximo = [pontos[0], pontos[1]];
    let minDist = pontos[0].dist(pontos[1]);

    for (let i = 0; i < pontos.length; i++) {
        for (let j = i + 1; j < pontos.length; j++) {
            let d = pontos[i].dist(pontos[j]);
            if (d < minDist) {
                minDist = d;
                parMaisProximo = [pontos[i], pontos[j]];
            }
        }
    }

    return { parMaisProximo, minDist };
}

// Interface gráfica com p5.js
new p5((sketch) => {
    let pontos = [];
    let resultado;

    sketch.setup = () => {
        sketch.createCanvas(600, 300).parent('distancia');
        pontos = Array.from({ length: 20 }, () => 
            sketch.createVector(sketch.random(sketch.width), sketch.random(sketch.height))
        );

        resultado = encontrarParMaisProximo(pontos);
    };

    sketch.draw = () => {
        sketch.background(240);
        sketch.fill(0);

        // desenha todos os pontos
        pontos.forEach(p => sketch.circle(p.x, p.y, 6));

        // desenha a linha entre os pontos mais próximos
        sketch.stroke('red');
        sketch.strokeWeight(2);
        sketch.line(
            resultado.parMaisProximo[0].x, resultado.parMaisProximo[0].y,
            resultado.parMaisProximo[1].x, resultado.parMaisProximo[1].y
        );

        // exibe a distância mínima
        sketch.fill('red');
        sketch.noStroke();
        sketch.text(
            `Menor distância: ${sketch.nf(resultado.minDist, 1, 2)}`,
            10, 20
        );
    };
});

