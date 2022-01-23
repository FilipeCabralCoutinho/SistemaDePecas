let PesoPeca = 80
let NumeroPeca = 8
let NomePeca = 'Disco'

if (PesoPeca > 100) {
    console.log('Peso de peça OK, podemos cadastrar.')
} else {
    console.log('Peso de peça abaixo do permitido, não podemos cadastrar.')
}
if (NumeroPeca <= 10) {
    console.log('Quantidade de peças permitida, podemos cadastar.')
} else {
    console.log('Quantidade de peças acima da permitida, não podemos cadastrar.')
    }
console.log('O Tamanho do nome da peça é:', NomePeca.length)
if (NomePeca.length < 3) {
    console.log('Nome de peça muito curto, não podemos cadastrar.')
} else {
    console.log('Nome de peça com tamanho permitido, podemos cadastrar.')
}