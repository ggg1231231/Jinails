// cart.js

function calculateDiscount(itemCount) {
    const discount = 2000; // Discount of 2000 won
    const applicableDiscounts = Math.floor(itemCount / 10);
    return applicableDiscounts * discount;
}

// Example usage:
// const totalItems = 25;
// const totalDiscount = calculateDiscount(totalItems);
// console.log(totalDiscount); // Outputs the total discount based on the number of items purchased
