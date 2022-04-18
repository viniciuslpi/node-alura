const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function validaURLs(arrayLinks){
    console.log(arrayLinks);
}

module.exports = validaURLs;