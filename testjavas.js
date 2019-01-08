var array = ['abcd', 'a123', 'test', 'abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde', 'ultra', 'avanti'];
//j'ai utilisé Array.prototype.filter()
const resultat = array.filter(array => array.length < 50);

console.log(resultat);