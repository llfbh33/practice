/*
121. Best Time to Buy and Sell Stock

input - array of integers (prices)

based off of a 1 base not 0 index based
find the day you can buy at the lowest where you can buy at the highest later
return the day or base 1 index of the day you should sell
there will be atleast one day in the array
price will be a positive integer


initial thoughts
could loop through the array
we need a variable to track the purchased index
if there is a purchased index then which ever is lower is stored as purchased
if there is none then the current is stored as the purchased
if purchased index !== i && prices[purchased] < prices[i]
    save the value of sell - purchased
    save sell as i



*/

const maxProfit = (prices) => {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {                                             // we do not need to deal with the indexes just the prices loop through each price
        if (price < minPrice) minPrice = price;                             // set minPrice to be the smallest price there is
        if (price - minPrice > maxProfit) maxProfit = price - minPrice;     // replace max profit as needed
    }                                   // We are moving through the dates from first to last so we will always update to the max profit properly

    return maxProfit;
};
// Time of O(n)
// Space of O(1)

let prices = [7,6,4,3,1, 4, 2, 10, 1, 6, 20, 18, 3];
let prices2 = [7,1,5,3,6,4];
console.log(maxProfit(prices))