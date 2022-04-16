const pegaArquivo = require('./index');
const caminho = process.argv;

console.log(pegaArquivo(caminho[2]));
