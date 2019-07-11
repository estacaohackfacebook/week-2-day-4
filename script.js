
let nome = prompt('Nome do Aluno: ')
let materia = prompt('Materia: ')
let nota = Math.round(parseFloat(prompt('Nota do Aluno: ').replace(',','.')))
nota >= 7 ?
alert(`Parabens ${nome} Voce passou.. Com a nota ${nota}!!`):
alert(`Que Pena, ${nome}, Voce não Passou em ${materia} Sua nota ${nota} esta abaixo !`)