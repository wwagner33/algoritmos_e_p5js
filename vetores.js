/**
 * Uma bolinha vermelha movendo-se horizontalmente e rebatendo nas bordas. 
 * Usa a classe p5.Vector para representar posição e velocidade.
 */
new p5((sketch) => {
    let pos, vel;

    sketch.setup = () => {
        sketch.createCanvas(400, 200).parent('vetores');
        pos = sketch.createVector(50, 100);
        vel = sketch.createVector(2.5, 0);
    };

    sketch.draw = () => {
        sketch.background(240);
        
        // Atualiza posição
        pos.add(vel);

        // Rebater na borda
        if (pos.x > sketch.width || pos.x < 0) vel.x *= -1;

        // Desenha círculo
        sketch.fill(255, 0, 0);
        sketch.ellipse(pos.x, pos.y, 30, 30);

        // Exibe vetor
        sketch.stroke(0);
        sketch.line(pos.x, pos.y, pos.x + vel.x * 10, pos.y);
    };
});
