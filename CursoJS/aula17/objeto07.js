let amigo = {nome: 'Marcos', 
sexo: 'M', 
peso: 85.4 , 
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(15)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)