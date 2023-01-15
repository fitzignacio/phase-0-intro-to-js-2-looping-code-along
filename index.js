function writeCards(names) {
    let messages = [];
    for(let name of names) {
        messages.push(`Thank you, ${name}, for the wonderful surprise gift!`);
    }
    return messages;
}

function countDown(num) {
    for(let i = num; i >= 0; i--) {
        console.log(i);
    }
}