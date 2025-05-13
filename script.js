// Énoncé

// Créez un algorithme qui retourne la médiane d'une série statistique.

const getMedian = (array) => {
  // La méthode sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau. Pour comparer des nombres plutôt que des chaînes, la fonction de comparaison peut simplement soustraire b à a
  array.sort((a, b) => a - b);

  // CAS 1 : serie statistique impair

  // Création de la constante median qui divise la longueur du tableau par 2. Math.floor permet d'obtenir un nombre entier (sans virgule)
  const median = Math.floor(array.length / 2);

  // CAS 2 : serie statistique pair

  // Si le reste de la division par 2 de la longueur du tableau = 0 serie statistique pair
  if (array.length % 2 === 0) {
    return (array[median - 1] + array[median]) / 2;
  }

  // Retourne la médiane pour le cas 1
  return array[median];
};

console.log(getMedian([1, 2, 3, 4, 5])); // 3
console.log(getMedian([1, 2, 3, 4])); // 2.5
console.log(getMedian([10, 15, 14, 12, 16, 14, 17, 5, 4, 7])); // 13
console.log(getMedian([1000, 1700, 850, 1200, 1400, 1000, 900, 1500, 1000000]));
// Médiane   1200
// Moyenne   112 172
console.log(getMedian([30, 31, 36, 33, 29, 28, 35, 36])); // 32
