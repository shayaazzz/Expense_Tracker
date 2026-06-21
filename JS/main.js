import {
    renderTransactions,
    updateSummary
} from "./render.js";

import {
    addTransaction,
    deleteTransaction
} from "./modal.js";

const form =
document.getElementById("transactionForm");

const title =
document.getElementById("title");

const amount =
document.getElementById("amount");

const type =
document.getElementById("type");

const search =
document.getElementById("search");

const income =
document.getElementById("income");

const expense =
document.getElementById("expense");

const balance =
document.getElementById("balance");

const transactionList =
document.getElementById("transactionList");

form.addEventListener("submit", (e) =>
    addTransaction(
        e,
        title,
        amount,
        type,
        form,
        transactionList,
        search,
        income,
        expense,
        balance
    )
);

search.addEventListener("input", () =>
    renderTransactions(
        transactionList,
        search.value
    )
);

window.deleteTransaction = (id) =>
    deleteTransaction(
        id,
        transactionList,
        search,
        income,
        expense,
        balance
    );

renderTransactions(
    transactionList,
    search.value
);

updateSummary(
    income,
    expense,
    balance
);