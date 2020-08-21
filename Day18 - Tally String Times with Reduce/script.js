// we have do this becaouse without spreed operator it is node list not a array
const timeNodes = [...document.querySelectorAll('[data-time]')];

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
  }).reduce((a, b) => a + b)

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60

console.log(hours, mins, secondsLeft);