const readline = require('readline');
const { exercicios } = require('./exercicios');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



//variaveis para exemplos

const exampleList = [1, 3, 5, 7, 9, 11, 13, 15];
const exampleItem = 7;


function listarAlgoritmos() {
    console.log("Escolha um algoritmo para executar:");

    exercicios.forEach(exercicio => {
        if (exercicio.title) {
            console.log(`${exercicio.task}. ${exercicio.title}`);
        }
    });

    rl.question("\nDigite o número do algoritmo que você deseja executar: ", (escolha) => {
        escolha = parseInt(escolha);
        
        if (escolha >= 1 && escolha <= exercicios.length) {
            const exercicioEscolhido = exercicios[escolha - 1];
            
            if (exercicioEscolhido && exercicioEscolhido.algorithm) {
                console.log('________________________________');
                console.log(`Executando o algoritmo: ${exercicioEscolhido.title}`);
                console.log('________________________________');
                console.log(`\nlista de exmplo usada: ${exampleList}`);
                console.log(`Numero a ser buscado: ${exampleItem} (em caso de algoritimo de busca)`);
                console.log('________________________________');
                
                // Definir dados de exemplo para a execução
                
                // Executa o algoritmo escolhido
                const resultado = exercicioEscolhido.algorithm(exampleList, exampleItem);
                console.log(`\nResultado da execução: ${resultado}`);
                console.log('________________________________');
                console.log(`\nexplicação: ${exercicioEscolhido.explanation}`);
                console.log('\n________________________________');
                
                rl.close(); // Fecha a interface readline após a execução
            }
        } else {
            console.log("Escolha inválida. Tente novamente.");
            rl.close();
        }
    });
}
