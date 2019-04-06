var emails =  [];
emails[0] = 'joao@email.com';
emails[1] = 'maria@email.com';

console.log('emails[0] ->', emails[0]);
console.log('emails[10] ->', emails[10]); // Não dá erro

// Criando e declarando arrays ao mesmo tempo
var nomes = [ 'João', 'Maria' ];
console.log('Quantos nomes?', nomes.length);

nomes[5] = 'José';
console.log('O array tem', nomes.length, 'nomes depois do', nomes[5]);