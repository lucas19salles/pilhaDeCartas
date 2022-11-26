/*
Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
*/

const cheap = [];
let option = "";

do {
  option = prompt(
    `Cartas no baralho: ${cheap.join(
      ", "
    )}\n\n1 - Adicionar uma Carta\n2 - Puxar uma Carta\n3 - Sair `
  );

  switch (option) {
    case "1":
      const newLetter = prompt("Adiciona uma carta no baralho: ");
      cheap.push(newLetter);
      break;

    case "2":
      const drawnLetter = cheap.pop();
      if (!drawnLetter) {
        alert("Não há nenhuma carta no baralho!");
      } else {
        alert(`Você puxou um(a) ${drawnLetter}`);
      }
      break;

    case "3":
      alert("Saindo.");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (option !== "3");
