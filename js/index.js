// Create an object to represent a bank account

const account = {
    accountName: "mikul",
    balance: 0,

    getBalance: function () {
        console.log("Your balance is: $" + account.balance);
        return account.balance;
    },

    deposit: function (amount) {
        console.log("Depositing: $" + amount);
        account.balance += amount;
    },

    withdrawal: function (amount) {
        if (amount > account.balance) {
            console.log("Insufficient funds");
        } else {
            account.balance -= amount;
            console.log("Withdrawing: $" + amount);
        }
    },

    getAccountName: function () {
        console.log("Account holder's name: " + account.accountName);
        return account.accountName;
    },

    loop: true,
};

// ATM function
function atm() {
    const message = parseFloat(
        prompt(
            "Select a choice: 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
        )
    );

    switch (message) {
        case 1:
            account.getBalance();
            break;

        case 2:
            const depositAmount = parseFloat(prompt("Enter deposit amount:"));
            account.deposit(depositAmount);
            break;

        case 3:
            const withdrawalAmount = parseFloat(prompt("Enter withdrawal amount:"));
            account.withdrawal(withdrawalAmount);
            break;

        case 4:
            console.log(account.getAccountName());
            break;

        case 5:
            account.loop = false;
            break;

        default:
            break;
    }
}


// loop to keep the ATM running until the user chooses to exit
while (account.loop) {
    atm();
}
