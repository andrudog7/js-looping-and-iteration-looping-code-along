// Code your solutions in this file
function writeCards(names, holiday) {
    let thankYouCards = []
    for (let i =0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`)
    }
    return thankYouCards
}

function countDown(integer) {
    let i = integer 
    while (i >= 0) {
        console.log(i);
        i -= 1;
    }
}