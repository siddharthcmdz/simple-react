
const btn = document.getElementById('increment-btn')
const label = document.getElementById('count-display')

console.log('button value: ${btn}')
console.log(label)

label.innerText = '1'
btn.innerText = 'increment by 1'

let currentCount = 0;
btn.addEventListener('click', (event) => {
    currentCount++;
    label.innerText = currentCount;
})