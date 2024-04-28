const incrementBtn = document.querySelector('#incrementBtn')
const decrementBtn = document.querySelector('#decrementBtn')
const showBtn = document.querySelector('#showBtn')
const balanceEl = document.querySelector('#balanceEl')
const listTable = document.querySelector('#list')
const moneyInput = document.querySelector('#moneyInput')


let value = moneyInput.value

function myFunction(x) {
    x.style.background = "orange"; }



let balance = 0;


incrementBtn.addEventListener('click', function() {
    let value = parseFloat(moneyInput.value);
    balance += value;
    moneyInput.value = '';
    balanceEl.textContent = balance;
    listTable.innerHTML += `
    <tr>
            <th scope="row">${listTable.rows.length + 1}</th>
            <td>Cash</td>
            <td class="text-success">${'+'}${value}</td>
            <td>${new Date().toLocaleString()}</td>
            </tr>`
});


decrementBtn.addEventListener('click', function() {
    let value = parseFloat(moneyInput.value);
    balance -= value;
    balanceEl.textContent = balance;
    listTable.innerHTML += `
    <tr>
            <th scope="row">${listTable.rows.length + 1}</th>
            <td>Cash</td>
            <td class="text-success">${'-'}${value}</td>
            <td>${new Date().toLocaleString()}</td>
            </tr>`

})