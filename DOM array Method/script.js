const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];
// Fetch random user and add money
function getRandomUser() {
    fetch('https://randomuser.me/api/')
        .then((res) => res.json())
        .then((data) => {
            const user = data.results[0];
            const newUser = {
                name: `${user.name.first} ${user.name.last}`,
                money: Math.floor(Math.random() * 1000000),
            };
            addData(newUser);
        });
}
// Add new obj to data arr
function addData(obj) {
    data.push(obj);
    updateDOM();
}
// Update DOM
function updateDOM(providedData = data) {
    // Clear main div
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
    providedData.forEach((item) => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element);
    });
}
// Format number as money
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
// Event listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', () => {
    data = data.map((user) => {
        return { ...user, money: user.money * 2 };
    });
    updateDOM();
}
);
sortBtn.addEventListener('click', () => {
    data.sort((a, b) => b.money - a.money);
    updateDOM();
}
);
showMillionairesBtn.addEventListener('click', () => {
    data = data.filter((user) => user.money > 1000000);
    updateDOM();
}
);
calculateWealthBtn.addEventListener('click', () => {
    const wealth = data.reduce((acc, user) => (acc += user.money), 0);
    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
    main.appendChild(wealthEl);
}
);
getRandomUser();
