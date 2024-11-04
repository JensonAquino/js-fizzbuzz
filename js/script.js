// dichiaro le variabbili
const numIniziale = 1;
const maxNum = parseInt(prompt("quanti numeri vuoi stampare?"));

const fizz = "FIZZ";
const buzz = "BUZZ";

// creo il ciclo for con gli if inerni

for (let i = numIniziale; i <= maxNum; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(fizz + buzz);
    } else if (i % 3 === 0) {
        console.log(fizz)
    } else if (i % 5 === 0) {
        console.log(buzz)
    } else {
        console.log(i)
    }
}