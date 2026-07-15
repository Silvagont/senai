let produtos = [

    {nome : "tv",preco : 1999.99, categoria : "eletrodomestico"},
    {nome : "geladeira", preco : 3900, categoria : "branca"},
    {nome : "Ps5", preco : 3500, categoria : "videogame"},
    {nome : "varal", preco : 300, categoria : "casa"},
    {nome : "forno", preco : 590, categoria : "branca"},
]
let valorTotal = 0
produtos.forEach(function name(produto) {
console.log(`nome:${produto.nome}-preço:${produto.preco}`)
    total = valorTotal + produto.preco;
})
console.log(`valor total é ${[valorTotal]}`)


   