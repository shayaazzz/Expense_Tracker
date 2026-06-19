let transactions =
JSON.parse(localStorage.getItem("transactions")) || [];

const form = document.getElementById("transactionForm");
const title = document.getElementById("title");
const amount = document.getElementById("amount");
const type = document.getElementById("type");

const transactionList =
document.getElementById("transactionList");

form.addEventListener("submit", addTransaction);

function addTransaction(e){

    e.preventDefault();

    const transaction = {
        id: Date.now(),
        title: title.value,
        amount: Number(amount.value),
        type: type.value
    };

    transactions.push(transaction);

    saveData();
    renderTransactions();
    updateSummary();

    form.reset();
}

function renderTransactions(){

    transactionList.innerHTML = "";

    transactions.forEach(transaction => {

        const li = document.createElement("li");

        li.innerHTML = `
            ${transaction.title}
            ₹${transaction.amount}
            <button onclick="deleteTransaction(${transaction.id})">
                Delete
            </button>
        `;

        transactionList.appendChild(li);

    });
}

function deleteTransaction(id){

    transactions = transactions.filter(
        transaction => transaction.id !== id
    );

    saveData();
    renderTransactions();
    updateSummary();
}

function updateSummary(){

    let income = 0;
    let expense = 0;

    transactions.forEach(transaction => {

        if(transaction.type === "income"){
            income += transaction.amount;
        }
        else{
            expense += transaction.amount;
        }

    });

    document.getElementById("income").textContent =
    `₹${income}`;

    document.getElementById("expense").textContent =
    `₹${expense}`;

    document.getElementById("balance").textContent =
    `₹${income - expense}`;
}

function saveData(){

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
}

renderTransactions();
updateSummary();