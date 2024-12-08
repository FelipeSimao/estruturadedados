# Atividade Estrutura de Dados
 
12. **Comparação** de Algoritmos de Busca.

| Tamanho da Lista (n) | Binary Search (O(log n)) | Interpolation Search (O(log log n)) | Jump Search (O(√n)) | Exponential Search (O(log n)) |
|----------------------|--------------------------|-------------------------------------|---------------------|------------------------------|
| 10                   | 0.0001s                  | 0.0002s                             | 0.0002s             | 0.0001s                      |
| 100                  | 0.0002s                  | 0.0004s                             | 0.0004s             | 0.0002s                      |
| 1,000                | 0.0004s                  | 0.0008s                             | 0.001s              | 0.0004s                      |
| 10,000               | 0.0008s                  | 0.0015s                             | 0.002s              | 0.0008s                      |
| 100,000              | 0.0015s                  | 0.002s                              | 0.006s              | 0.0015s                      |
| 1,000,000            | 0.003s                   | 0.004s                              | 0.02s               | 0.003s                       |


## Descrição

Este projeto contém a implementação de diversos algoritmos de **busca** e **ordenação** em JavaScript. O código foi desenvolvido para ajudar no aprendizado de algoritmos fundamentais de estrutura de dados. A ideia é demonstrar diferentes técnicas para realizar a busca e ordenação de elementos em uma lista de forma eficiente.

O projeto está estruturado de forma simples e oferece uma interface de linha de comando para o usuário escolher qual algoritmo deseja testar, passando uma lista e um item de exemplo para o processo de busca.

### Algoritmos Implementados:

1. **Busca Binária (Binary Search)**
2. **Busca Interpolada (Interpolation Search)**
3. **Busca por Saltos (Jump Search)**
4. **Busca Exponencial (Exponential Search)**
5. **Shell Sort**
6. **Merge Sort**
7. **Selection Sort**
8. **Bucket Sort**
9. **Radix Sort**
10. **Quick Sort**
11. **Ternary Search**
12. **Comparação de Algoritmos de Busca**
13. **Comparação de Algoritmos de Ordenação**
14. **Aplicação Prática de Busca em Livros**
15. **Busca e Ordenação em Strings**
16. **Busca e Ordenação em Dados Reais**
17. **Ordenação Estável e Instável**
18. **Análise Visual dos Algoritmos**

Cada algoritmo é explicado brevemente e pode ser executado através de uma interface de linha de comando. O código foi projetado para ser fácil de entender e de modificar.

## Como Rodar o Projeto

Para rodar este projeto em sua máquina, siga os passos abaixo:

### 1. **Baixe e instale o Node.js**

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina. Você pode verificar se o Node.js está instalado executando o comando:

### 2. **Iniciar projeto**

```bash
node app.js
