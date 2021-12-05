/*
¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento 5, se pintaría esto:

____*____
___***___
__*****__
_*******_
*********
____#____
____#____
Creamos un triángulo de asteríscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

Otro ejemplo con un árbol de altura 3:

__*__
_***_
*****
__#__
__#__
Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.
*/

export default function createXmasTree(height) {
  let tree = ""
  let counter = 1
  let valueTotal = (height * 2) - 1
  
  for (let index = 0; index < height; index++) {
      const emptyCharacters = (valueTotal-counter)/2
      tree +=  '_'.repeat(emptyCharacters) + '*'.repeat(counter) + '_'.repeat(emptyCharacters) + '\n'
      counter += 2
      
      if(index === height-1) {
          const emptyCharactersBase = (valueTotal-1)/2
          tree +=( '_'.repeat(emptyCharactersBase) + '#' + '_'.repeat(emptyCharactersBase) + '\n').repeat(2)
      }
  }
  
  return tree.trim()
}