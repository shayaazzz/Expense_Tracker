const form = document.getElementById("transactionForm");
const title = document.getElementById("title");
const amount = document.getElementById("amount");
const type = document.getElementById("type");
const search = document.getElementById("search");

const income = document.getElementById("income");
const expense = document.getElementById("expense");
const balance = document.getElementById("balance");

const transactionList = document.getElementById("transactionList");

let transactions =
JSON.parse(localStorage.getItem("transactions")) || [];

form.addEventListener("submit", addTransaction);

search.addEventListener("input", renderTransactions);

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

    const filteredTransactions = transactions.filter(transaction =>
        transaction.title
        .toLowerCase()
        .includes(search.value.toLowerCase())
    );

    filteredTransactions.forEach(transaction => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>
                ${transaction.title}
                (${transaction.type})
                ₹${transaction.amount}
            </span>

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

    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach(transaction => {

        if(transaction.type === "income"){
            totalIncome += transaction.amount;
        }else{
            totalExpense += transaction.amount;
        }

    });

    income.textContent = `₹${totalIncome}`;
    expense.textContent = `₹${totalExpense}`;
    balance.textContent = `₹${totalIncome - totalExpense}`;
}

function saveData(){

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
}
z
renderTransactions();
updateSummary();