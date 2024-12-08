const exercicios = [
    {
        'task': 1,
        'title': 'Binary Search',
        'explanation': 'A lista deve estar ordernada pois ele se baseia em nisso. Um dos passos é remover a metade da lista onde não está o valor.',
        'algorithm': function (list, item) {
            let left = 0;
            let right = list.length - 1;

            while (left <= right) {
                const mid = Math.floor((left + right) / 2);

                if (list[mid] === item) {
                    return mid;
                }

                if (list[mid] < item) {
                    left = mid + 1;
                }
                else {
                    right = mid - 1;
                }
            }

            return -1;
        }
    },
    {
        'task': 2,
        'title': 'Interpolation Search',
        'explanation': 'Interpolation Search pode ser mais eficiente que o Binary Search quando os dados estão uniformemente distribuídos, pois ele usa uma fórmula que tenta adivinhar a posição exata do elemento com base na suposição de distribuição uniforme.',

        'algorithm': function (list, item) {
            let low = 0;
            let high = list.length - 1;

            while (low <= high && item >= list[low] && item <= list[high]) {

                let pos = low + Math.floor((item - list[low]) * (high - low) / (list[high] - list[low]));

                if (list[pos] === item) {
                    return pos;
                }

                if (list[pos] < item) {
                    low = pos + 1;
                }
                else {
                    high = pos - 1;
                }
            }
            return -1;
        }
    },
    {
        'task': 3,
        'title': 'Jump Search',
        'explanation': 'Jump Search é útil quando você tem uma lista ordenada e quer evitar a busca linear, mas Binary Search será mais eficiente em termos de tempo para listas grandes, graças à sua complexidade de O(log n).',

        'algorithm': function (list, item) {
            const n = list.length;
            const step = Math.floor(Math.sqrt(n));
            let prev = 0;


            while (list[Math.min(step, n) - 1] < item) {
                prev = step;
                step += Math.floor(Math.sqrt(n));
                if (prev >= n) return -1;
            }

            for (let i = prev; i < Math.min(step, n); i++) {
                if (list[i] === item) {
                    return i;
                }
            }

            return -1;

        }
    },
    {
        'task': 4,
        'title': 'Exponential Search',
        'explanation': 'Exponential Search é particularmente útil em listas grandes, onde ele pode superar o desempenho da busca linear e competir bem com a busca binária, mas não oferece grandes vantagens em listas pequenas.',

        'algorithm': function (list, item) {

            if (list[0] === item) {
                return 0;
            }

            let i = 1;
            while (i < list.length && list[i] <= item) {
                i *= 2;
            }

            return exercicios[0].algorithm(list, item);

        }
    },
    {
        'task': 5,
        'title': 'Shell Sort',
        'explanation': 'Para listas pequenas a médias, a sequência de Shell pode ser suficiente e é fácil de implementar. Para listas grandes, as sequências Knuth e Hibbard oferecem melhorias significativas em desempenho, com a sequência de Hibbard sendo a mais eficiente em termos de tempo de execução.',

        'algorithm': function (list, item) {
            let n = list.length;
            let gap = Math.floor(n / 2);

            while (gap > 0) {
                for (let i = gap; i < n; i++) {
                    let temp = list[i];
                    let j = i;
                    while (j >= gap && list[j - gap] > temp) {
                        list[j] = list[j - gap];
                        j -= gap;
                    }
                    list[j] = temp;
                }
                gap = Math.floor(gap / 2);
            }

        }
    },
    {
        'task': 6,
        'title': 'Merge Sort',
        'explanation': 'Dividir: O array é dividido em duas metades. Isso é feito recursivamente até que cada sublista contenha um único elemento (ou nenhum, no caso de uma lista de tamanho zero).Conquistar: Quando as sublistas são pequenas o suficiente (tamanho 1 ou 0), elas são consideradas "ordenadas", pois uma lista de um único elemento está, por definição, ordenada.Combinar (Mesclar): As sublistas ordenadas são combinadas ou mescladas de forma que, ao final, formem uma única lista ordenada. Esse processo é feito comparando os primeiros elementos de cada sublista e colocando o menor elemento na lista final.',

        'algorithm': function (list, item) {

            if (list.length <= 1) {
                return arr;
            }

            const middle = Math.floor(list.length / 2);
            const left = list.slice(0, middle);
            const right = list.slice(middle);

            const merge = (left, right) => {
                let result = [];
                let leftIndex = 0;
                let rightIndex = 0;

                while (leftIndex < left.length && rightIndex < right.length) {
                    if (left[leftIndex] < right[rightIndex]) {
                        result.push(left[leftIndex]);
                        leftIndex++;
                    } else {
                        result.push(right[rightIndex]);
                        rightIndex++;
                    }
                }

                return result.concat(left.slice(leftIndex), right.slice(rightIndex));
            };

            return merge(mergeSort(left), mergeSort(right));

        }
    },
    {
        'task': 7,
        'title': 'Selection Sort',
        'explanation': '',

        'algorithm': function (list, item) {

            let n = list.length;

            for (let i = 0; i < n - 1; i++) {
                let minIndex = i;

                for (let j = i + 1; j < n; j++) {
                    if (list[j] < list[minIndex]) {
                        minIndex = j;
                    }
                }

                if (minIndex !== i) {
                    let temp = list[i];
                    list[i] = list[minIndex];
                    list[minIndex] = temp;
                }
            }

            return list;

        }
    },
    {
        'task': 8,
        'title': 'Bucket Sort',
        'explanation': '',

        'algorithm': function (list, item) {

            if (list.length === 0) return list;

            let minValue = Math.min(...list);
            let maxValue = Math.max(...list);

            let bucketCount = Math.floor(list.length / 2);

            let buckets = new Array(bucketCount).fill(null).map(() => []);

            for (let i = 0; i < list.length; i++) {

                let index = Math.floor(((list[i] - minValue) / (maxValue - minValue)) * (bucketCount - 1));
                buckets[index].push(list[i]);
            }

            for (let i = 0; i < buckets.length; i++) {
                buckets[i].sort((a, b) => a - b);
            }

            return buckets.reduce((sortedArray, bucket) => sortedArray.concat(bucket), []);

        }
    },
    {
        'task': 9,
        'title': 'Radix Sort',
        'explanation': 'O Radix Sort ordena números iterativamente com base nos dígitos de suas representações em uma base específica, como base 10 ou base 2. Em cada iteração, ele organiza os números por um dígito ou bit, utilizando o algoritmo Counting Sort. A principal vantagem é a ordenação eficiente sem comparações diretas entre os números.',

        'algorithm': function (list, item) {

            let max = Math.max(...list);
            for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
                let output = new Array(list.length);
                let count = new Array(10).fill(0);

                for (let i = 0; i < list.length; i++) {
                    let index = Math.floor(list[i] / exp) % 10;
                    count[index]++;
                }

                for (let i = 1; i < 10; i++) {
                    count[i] += count[i - 1];
                }

                for (let i = list.length - 1; i >= 0; i--) {
                    let index = Math.floor(list[i] / exp) % 10;
                    output[count[index] - 1] = list[i];
                    count[index]--;
                }

                for (let i = 0; i < list.length; i++) {
                    list[i] = output[i];
                }
            }

        }
    },
    {
        'task': 10,
        'title': 'Quick Sort',
        'explanation': '',

        'algorithm': function (list, item) {


            if (list.length <= 1) return list;
            const pivot = list[list.length - 1];
            const left = [];
            const right = [];

            for (let i = 0; i < list.length - 1; i++) {
                if (list[i] < pivot) left.push(list[i]);
                else right.push(list[i]);
            }

            return [...quickSort(left), pivot, ...quickSort(right)];

        }
    },
    {
        'task': 11,
        'title': 'Ternary Search',
        'explanation': '',

        'algorithm': function (list, item) {

            let left = 0, right = list.length - 1;

            while (left <= right) {
                let mid1 = left + Math.floor((right - left) / 3);
                let mid2 = right - Math.floor((right - left) / 3);

                if (list[mid1] === item) return mid1;
                if (list[mid2] === item) return mid2;

                if (target < list[mid1]) {
                    right = mid1 - 1;
                } else if (item > list[mid2]) {
                    left = mid2 + 1;
                } else {
                    left = mid1 + 1;
                    right = mid2 - 1;
                }
            }
            return -1;

        }
    },
    {
        'task': 12,
        'title': 'Comparação de Algoritmos de Busca',
        'explanation': 'Tabela adicionada ao README',

        'algorithm': function (list, item) { }
    },
    {
        'task': 13,
        'title': 'Comparação de Algoritmos de Ordenação',
        'explanation': '',

        'algorithm': function (list, item) {
        }
    },
    {
        'task': 14,
        'title': 'Busca e Ordenação em Strings',
        'explanation': '',

        'algorithm': function (list, item) {
            let livros = [
                { isbn: "978-3-16-148410-0", titulo: "JavaScript for Beginners" },
                { isbn: "978-1-23-456789-0", titulo: "Advanced JavaScript" },
                { isbn: "978-3-16-148410-1", titulo: "Mastering Node.js" },
                { isbn: "978-1-23-456789-1", titulo: "Learn React" }
            ];

            let left = 0;
            let right = livros.length - 1;

            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                const livro = livros[mid];

                if (livro.isbn === item) {
                    console.log("Livro encontrado:", livro);
                    return livro;
                } else if (livro.isbn < item) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }

            console.log("Livro não encontrado.");
            return null;

        }
    },
    {
        'task': 15,
        'title': 'Aplicação Prática de Buscas',
        'explanation': '',

        'algorithm': function (list, item) {
            if (list.length <= 1) return list;

            const mid = Math.floor(list.length / 2);
            const left = mergeSort(list.slice(0, mid));
            const right = mergeSort(list.slice(mid));

            let result = [];
            let i = 0, j = 0;

            while (i < left.length && j < right.length) {
                if (left[i].localeCompare(right[j]) < 0) {
                    result.push(left[i]);
                    i++;
                } else {
                    result.push(right[j]);
                    j++;
                }
            }

            return result.concat(left.slice(i)).concat(right.slice(j));

        }
    },

    {
        'task': 16,
        'title': 'Busca e Ordenação em Dados Reais',
        'explanation': '',

        'algorithm': function (list, item) {
        }
    },

    {
        'task': 17,
        'title': 'Ordenação Estável e Instável',
        'explanation': '',

        'algorithm': function (list, item) {
        }
    },

    {
        'task': 18,
        'title': 'Análise Visual dos Algoritmos',
        'explanation': '',

        'algorithm': function (list, item) {
        }
    }
];
exports.exercicios = exercicios;
