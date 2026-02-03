/*
122. Best Time to Buy and Sell Stock II

input - array of prices 
return - max profit

may buy and sell stocks but you can only have one share of stock at a time
so you can only sell if you are holding a stock 

do a while loop within the main loop, view the upcoming values, the sell point is when the next value is less than the current
do not buy again until the next value is greater than the current

*/

// works well but still thinking in terms of min and max?
const maxProfit = (prices) => {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) minPrice = prices[i];

        while (prices[i + 1] && prices[i + 1] > prices[i]) {
            i++
        };
        maxProfit += prices[i] - minPrice;
        minPrice = Infinity;
    }

    return maxProfit;
}


let prices = [7,1,5,3,6,4]    // result is 8
console.log(maxProfit(prices))


// optimal solution for interviews - we do not care about the peak just the positive step
// what there is to gain, use a GREEDY algorithm
const maxProfit2 = (prices) => {
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {            // start at 1 so that you always know there is an i - 1
            profit += prices[i] - prices[i - 1];    // increase on each step that the price is higher than the last
        }
    }

    return profit;
};