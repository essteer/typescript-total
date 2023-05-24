// Type the following to permit both input types:
// const coerceAmount = (amount: number | { amount: number }) => {};

// Solution:
const coerceAmount = (amount: number | { amount: number }) => {
    if (typeof amount === "number") {
        return amount;
    }
    return amount.amount;
};

// Solution variation:
const coerceAmount2 = (amount: number | { amount: number }) => {
    if (typeof amount === "object") {
        return amount.amount;
    }
    return amount;
};