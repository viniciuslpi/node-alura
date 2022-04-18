const chalk = require('chalk');
const fs = require('fs');


function extraiLinks(texto){
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;

  while((temp = regex.exec(texto)) !== null){
    arrayResultados.push({ [temp[1]]: temp[2]})
  }

  return arrayResultados.length === 0 ? 'Não há links' : arrayResultados;
}

function trataErro(erro){
  throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho'));
}

async function pegaArquivo(caminhoDoArquivo){

  const encoding = 'utf-8';
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    return extraiLinks(texto);
  } catch(erro) {
    trataErro(erro);
  }

}

module.exports = pegaArquivo;

// pegaArquivo('./arquivos/texto1.md');

// \[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)

/*
function pegaArquivo(caminhoDoArquivo){
  const encoding = 'utf-8'
  fs.promises.readFile(caminhoDoArquivo, encoding)
    .then((texto) => chalk.green(console.log(texto)))
    .catch((erro) => trataErro(erro))

}

function pegaArquivo(caminhoDoArquivo){
const encoding = 'utf-8'
fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => { // '_' é usado para ignorar a primeira variavel
  if(erro) { 
    trataErro(erro); 
  }
  console.log(chalk.green(texto));
})
} 

*/