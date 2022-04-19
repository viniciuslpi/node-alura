const pegaArquivo = require('../index');
const arrayResults = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::',  () => {

    it('Should be a function', () => {
        expect(typeof pegaArquivo).toBe('function');
    })
    it('Should return an array with results', async () => {
        const caminho = './test/arquivos/texto1.md';
        const resultado = await pegaArquivo(caminho);
        expect(resultado).toEqual(arrayResults);
    })
    it('Should return: no links found', async () => {
        const caminho = './test/arquivos/texto1_semlinks.md';
        const resultado = await pegaArquivo(caminho);
        expect(resultado).toBe('Não há links');
    })


})
