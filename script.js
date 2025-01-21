const counter = document.getElementById('counter');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

let count = parseInt(localStorage.getItem('count')) || 0;
counter.innerHTML = count;

increaseBtn.onclick = function increaseCounter() {
    count++;
    localStorage.setItem('count', count);
    counter.innerHTML = count;
}

decreaseBtn.onclick = function increaseCounter() {
    if (count > 0) {
    count--;
    localStorage.setItem('count', count);
    counter.innerHTML = count;
    }
}

resetBtn.onclick = function increaseCounter() {
    count = 0;
    localStorage.setItem('count', count);
    counter.innerHTML = count;
}