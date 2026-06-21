import { transactions } from "./data.js";

export function renderTransactions(
    transactionList,
    searchValue
) {
    transactionList.innerHTML = "";

    const filteredTransactions =
        transactions.filter(transaction =>
            transaction.title
                .toLowerCase()
                .includes(searchValue.toLowerCase())
        );

    filteredTransactions.forEach(transaction => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>
                ${transaction.title}
                (${transaction.type})
                ₹${transaction.amount}
            </span>

            <button
            onclick="window.deleteTransaction(${transaction.id})">
                Delete
            </button>
        `;

        transactionList.appendChild(li);
    });
}

export function updateSummary(
    income,
    expense,
    balance
) {
    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach(transaction => {

        if (transaction.type === "income") {
            totalIncome += transaction.amount;
        } else {
            totalExpense += transaction.amount;
        }

    });

    income.textContent = `₹${totalIncome}`;
    expense.textContent = `₹${totalExpense}`;
    balance.textContent =
        `₹${totalIncome - totalExpense}`;
}