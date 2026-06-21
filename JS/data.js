export let transactions =JSON.parse(localStorage.getItem("transactions")) || [];

export function saveData() {
    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
}

export function addTransactionData(transaction) {
    transactions.push(transaction);
}

export function deleteTransactionData(id) {
    transactions = transactions.filter(
        transaction => transaction.id !== id
    );
}