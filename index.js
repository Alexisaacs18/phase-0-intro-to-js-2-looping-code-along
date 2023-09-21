// Code your solutions in this file
function writeCards(names, gift) {
    let messages = [];
    names.forEach((name) => {
      messages.push(`Thank you, ${name}, for the wonderful ${gift} gift!`);
    });
    return messages;
  }
  
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }