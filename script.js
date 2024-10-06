let counter = 0;
let autoIncrement = 0;

document.getElementById('increment').addEventListener('click', () => {
    counter++;
    document.getElementById('counter').innerText = counter;
});

// Auto increment every second
setInterval(() => {
    counter += autoIncrement;
    document.getElementById('counter').innerText = counter;
}, 1000);