# Conceitos de Programação utilizando Javascript e P5.js

**Autor:** Prof. Wellington Wagner F. Sarmento\
**Instituto UFC Virtual**\
**Universidade Federal do Ceará**

Este material apresenta conceitos fundamentais de programação utilizando JavaScript e a biblioteca gráfica P5.js.

## Como baixar e clonar o repositório usando Git (Windows)

### Instalando Git

1. Acesse o site oficial do Git: [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Baixe o instalador para Windows.
3. Execute o instalador e siga as instruções padrão de instalação.
4. Após a instalação, abra o Git Bash (encontrado no menu iniciar).

### Clonando o repositório

Execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/wwagner33/algoritmos_e_p5js.git
```

O repositório será copiado para seu computador. Acesse a pasta criada (`algoritmos_e_p5js`) e abra o arquivo `index.html` em seu navegador para interagir com os exemplos.

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
let posicoes = [],
  velocidades = [],
  numBolinhas = 5;

sketch.setup = () => {
  sketch.createCanvas(400, 200).parent("vetores");
  for (let i = 0; i < numBolinhas; i++) {
    posicoes.push(
      sketch.createVector(
        sketch.random(30, sketch.width - 30),
        sketch.random(30, sketch.height - 30)
      )
    );
    velocidades.push(
      sketch.createVector(sketch.random(1, 3), sketch.random(1, 3))
    );
  }
};

sketch.draw = () => {
  sketch.background(240);
  for (let i = 0; i < numBolinhas; i++) {
    posicoes[i].add(velocidades[i]);
    if (posicoes[i].x > sketch.width || posicoes[i].x < 0)
      velocidades[i].x *= -1;
    if (posicoes[i].y > sketch.height || posicoes[i].y < 0)
      velocidades[i].y *= -1;
    sketch.fill(255, 0, 0);
    sketch.ellipse(posicoes[i].x, posicoes[i].y, 30, 30);
  }
};
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
let valores = [],
  i = 0,
  j = 0;

sketch.setup = () => {
  sketch.createCanvas(400, 200).parent("ordenacao");
  valores = Array.from({ length: 50 }, () => sketch.random(sketch.height));
};

sketch.draw = () => {
  sketch.background(240);
  for (let k = 0; k < valores.length; k++) {
    sketch.stroke(0);
    sketch.fill(k == j || k == j + 1 ? "red" : "gray");
    sketch.rect(k * 8, sketch.height - valores[k], 7, valores[k]);
  }

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
    sketch.noLoop();
  }
};
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
function buscaLinearPassoAPasso(lista, alvo, passoAtual) {
  if (passoAtual >= lista.length) return -1;
  if (lista[passoAtual] === alvo) return passoAtual;
  return -2;
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
function encontrarParMaisProximo(pontos) {
  let parMaisProximo = [pontos[0], pontos[1]],
    minDist = pontos[0].dist(pontos[1]);
  for (let i = 0; i < pontos.length; i++)
    for (let j = i + 1; j < pontos.length; j++)
      if (pontos[i].dist(pontos[j]) < minDist)
        [minDist, parMaisProximo] = [
          pontos[i].dist(pontos[j]),
          [pontos[i], pontos[j]],
        ];
  return { parMaisProximo, minDist };
}
```

## Como visualizar os códigos

Para visualizar a execução dos códigos, abra o arquivo `index.html` em seu navegador. Cada algoritmo estará disponível visualmente para acompanhamento e compreensão interativa dos conceitos.

> **Importante:**  
> Para poder ver o código em seu navegador, utilize a ferramenta **Inspecionar**. No Chrome e Firefox, é só teclar **F12**.
> Na aba **Console**, você verá o código JavaScript que está sendo executado.
> Você pode interagir com o código, alterando valores e vendo os resultados em tempo real.


## Exercícios

### 1) Extensão de Vetores

Adicione uma funcionalidade ao exemplo das bolinhas, permitindo alterar dinamicamente o número de bolinhas exibidas usando teclas (por exemplo, seta para cima aumenta e seta para baixo diminui).

### 2) Melhoria do Bubble Sort

Implemente um contador que exiba o número total de comparações e trocas realizadas durante o processo de ordenação Bubble Sort.

### 3) Busca Linear Interativa

Crie uma entrada de dados onde o usuário possa inserir o valor a ser buscado no array, iniciando uma nova busca interativa visualmente.

### 4) Desafio de Distância

Modifique o algoritmo de **menor distância** para exibir visualmente não só o par mais próximo, mas também o par de pontos mais distantes.