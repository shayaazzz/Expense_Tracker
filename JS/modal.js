import {
    saveData,
    addTransactionData,
    deleteTransactionData
} from "./data.js";

import {
    renderTransactions,
    updateSummary
} from "./render.js";

export function addTransaction(
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
) {

    e.preventDefault();

    const transaction = {
        id: Date.now(),
        title: title.value,
        amount: Number(amount.value),
        type: type.value
    };

    addTransactionData(transaction);

    saveData();

    renderTransactions(
        transactionList,
        search.value
    );

    updateSummary(
        income,
        expense,
        balance
    );

    form.reset();
}

export function deleteTransaction(
    id,
    transactionList,
    search,
    income,
    expense,
    balance
) {

    deleteTransactionData(id);

    saveData();

    renderTransactions(
        transactionList,
        search.value
    );

    updateSummary(
        income,
        expense,
        balance
    );
}