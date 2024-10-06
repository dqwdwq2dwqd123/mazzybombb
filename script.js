let noClickCount = 0;

function yesAnswer() {
  alert("Yay! 💍 I love you mazzybomb!");
}

function noAnswer() {
  noClickCount++;
  

  const message = document.getElementById('message');
  message.classList.remove('hidden');


  const yesButton = document.getElementById('yesButton');
  const newSize = 1 + (noClickCount * 0.2); 
  yesButton.style.transform = `scale(${newSize})`;


  if (noClickCount === 2) {
    message.textContent = "Are you really sure? 😢";
  } else if (noClickCount === 3) {
    message.textContent = "Please reconsider... 🥺";
  } else if (noClickCount === 4) {
    message.textContent = "It would make me so happy! 😭";
  } else if (noClickCount > 4) {
    message.textContent = "I'll wait for you forever 💕";
  }
}