/**
 * Visualização do Bubble Sort, destacando os elementos comparados em vermelho.
 * 
 */
new p5((sketch) => {
    let valores = [];
    let i = 0, j = 0;

    sketch.setup = () => {
        sketch.createCanvas(400, 200).parent('ordenacao');
        valores = Array.from({length: 50}, () => sketch.random(sketch.height));
    };

    sketch.draw = () => {
        sketch.background(240);

        // Visualiza os valores como barras
        for (let k = 0; k < valores.length; k++) {
            sketch.stroke(0);
            sketch.fill(k == j || k == j + 1 ? 'red' : 'gray');
            sketch.rect(k * 8, sketch.height - valores[k], 7, valores[k]);
        }

        // Bubble Sort passo a passo
        if (i < valores.length) {
            if (valores[j] > valores[j + 1]) {
                [valores[j], valores[j + 1]] = [valores[j + 1], valores[j]];
            }
            j++;
            if (j >= valores.length - i - 1) {
                j = 0;
                i++;
            }
        } else {
            sketch.noLoop(); // finaliza quando ordenado
        }
    };
});
