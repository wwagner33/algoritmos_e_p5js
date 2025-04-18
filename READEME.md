# Conceitos de Programação utilizando Javascript e P5.js

**Autor:** Prof. Wellington Wagner F. Sarmento
**Instituto UFC Virtual**
**Universidade Federal do Ceará**

Este material apresenta conceitos fundamentais de programação utilizando JavaScript e a biblioteca gráfica P5.js.

## Uso de Vetores (Arrays e p5.Vector)
Vetores são estruturas essenciais em programação para armazenar e manipular conjuntos de dados. No exemplo das bolinhas, usamos arrays para armazenar posições e velocidades. Cada bolinha tem sua posição e velocidade atualizada continuamente, com colisões detectadas visualmente.

**Exemplo Portugol:**
```portugol
Para cada bolinha de 1 até N faça
  posicao[bolinha] <- posicao[bolinha] + velocidade[bolinha]
  Se posicao[bolinha] ultrapassa bordas então
    velocidade[bolinha] <- velocidade[bolinha] * -1
  FimSe
FimPara
```

**JavaScript/P5.js:**
```javascript
posicoes.push(sketch.createVector(
    sketch.random(30, sketch.width - 30),
    sketch.random(30, sketch.height - 30)
));

velocidades.push(sketch.createVector(
    sketch.random(1, 3),
    sketch.random(1, 3)
));

posicoes[i].add(velocidades[i]);
```

## Ordenação Simples (Bubble Sort)
A ordenação é a organização de elementos em uma sequência específica, como do menor para o maior. O algoritmo Bubble Sort compara repetidamente elementos adjacentes e os troca se estiverem na ordem incorreta.

**Exemplo Portugol:**
```portugol
Para i de 1 até N faça
  Para j de 1 até N - i faça
    Se vetor[j] > vetor[j + 1] então
      trocar vetor[j] com vetor[j + 1]
    FimSe
  FimPara
FimPara
```

**JavaScript/P5.js:**
```javascript
if (valores[j] > valores[j + 1]) {
    [valores[j], valores[j + 1]] = [valores[j + 1], valores[j]];
}
```

## Busca Linear Simples
A busca linear verifica sequencialmente cada elemento de uma lista até encontrar um valor desejado ou chegar ao fim sem sucesso.

**Exemplo Portugol:**
```portugol
Para i de 1 até N faça
  Se lista[i] = alvo então
    retornar i
  FimSe
FimPara
retornar -1 // não encontrado
```

**JavaScript/P5.js:**
```javascript
function buscaLinear(vetor, alvo) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === alvo) return i;
    }
    return -1;
}
```

## Cálculo da Menor Distância (Força Bruta)
Este algoritmo encontra o par de pontos mais próximos em um conjunto verificando todas as possíveis combinações de pontos.

**Exemplo Portugol:**
```portugol
menor_distancia <- infinito
Para i de 1 até N faça
  Para j de i + 1 até N faça
    distancia_atual <- distancia entre ponto[i] e ponto[j]
    Se distancia_atual < menor_distancia então
      menor_distancia <- distancia_atual
      par_mais_proximo <- {ponto[i], ponto[j]}
    FimSe
  FimPara
FimPara
```

**JavaScript/P5.js:**
```javascript
for (let i = 0; i < pontos.length; i++) {
    for (let j = i + 1; j < pontos.length; j++) {
        let d = pontos[i].dist(pontos[j]);
        if (d < minDist) {
            minDist = d;
            parMaisProximo = [pontos[i], pontos[j]];
        }
    }
}
```

## Como visualizar os códigos
Para visualizar a execução dos códigos, abra o arquivo `index.html` em seu navegador. Cada algoritmo estará disponível visualmente para acompanhamento e compreensão interativa dos conceitos.

> **Importante:**  
> Para poder ver o código em seu navegador, utilize a ferramenta **Inspecionar**. No Chrome e Firefox, é só teclar **F12**.
>
> Na aba **Console**, você verá o código JavaScript que está sendo executado.
>
> Você pode interagir com o código, alterando valores e vendo os resultados em tempo real.