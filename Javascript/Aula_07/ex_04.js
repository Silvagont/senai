function listaNomes(array) {
  array.forEach(function(item, indice) {
    console.log(`${indice}: ${item}`)
  })
}
    
listaNomes(["Igor, Caiã, Ana"])