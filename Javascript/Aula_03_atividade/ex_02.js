let cores = ["vermelho","azul","verde","amarelo","roxo"]

console.log("minhas lista de cores", cores)

console.log("Tamanho do array (quantidade de cores):", cores.length);

cores.forEach(function(item,indice){
    console.log(`${indice+1}=${item}`)
});
