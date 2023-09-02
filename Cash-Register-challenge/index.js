/* 
    Cash Register Challenge

    Design a cash register drawer function checkCashRegister() 
    that accepts purchase price as the first argument (price), 
    payment as the second argument (cash), 
    and cash-in-drawer (cid) as the third argument.

    => cid is a 2D array listing available currency.

    The checkCashRegister() function should always return an object with a status key and a change key.

    Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due,

    or if you cannot return the exact change.

    Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change

    if it is equal to the change due.

    Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills,
    
    sorted in highest to lowest order, as the value of the change key.


    Currency                  Unit Amount
    Penny	                $0.01 (PENNY)
    Nickel	                $0.05 (NICKEL)
    Dime	                $0.1 (DIME)
    Quarter	                $0.25 (QUARTER)
    Dollar	                $1 (ONE)
    Five Dollars	        $5 (FIVE)
    Ten Dollars	            $10 (TEN)
    Twenty Dollars	        $20 (TWENTY)
    One-hundred Dollars	    $100 (ONE HUNDRED)

    See below for an example of a cash-in-drawer array:

    [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100]
    ]
    */

function checkCashRegister(price, cash, cid) {
  // Create an object to hold the change and status
  let change = {
    status: "",
    change: [],
  };

  // Create an object to hold the currency and its value
  let currency = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  // Calculate the change due
  /* Explanation
    The change due is the cash - price

    Example:
    price = 19.5
    cash = 20
    changeDue = 20 - 19.5 = 0.5

  */
  let changeDue = cash - price;

  // Calculate the total cash in drawer
  let totalCashInDrawer = 0;

  // Loop through the cid array and calculate the total cash in drawer
  for (let i = 0; i < cid.length; i++) {
    /* 
        Explanation
        cid[i][1] is the total amount of cash in the drawer
        cid[i][1] = 1.01, 2.05, 3.1, 4.25, 90, 55, 20, 60, 100

        Example:
        cid[0][1] = 1.01
        cid[1][1] = 2.05
        cid[2][1] = 3.1
        cid[3][1] = 4.25
    */
    totalCashInDrawer += cid[i][1];
  }

  // If the total cash in drawer is equal to the change due, return {status: "CLOSED", change: [...]}
  if (totalCashInDrawer === changeDue) {
    change.status = "CLOSED";
    change.change = cid;
    return change;
  }

  // If the total cash in drawer is less than the change due, return {status: "INSUFFICIENT_FUNDS", change: []}
  if (totalCashInDrawer < changeDue) {
    change.status = "INSUFFICIENT_FUNDS";
    return change;
  }

  // Loop through the cid array and calculate the change due
  for (let i = cid.length - 1; i >= 0; i--) {

    /* 
        Explanation
        cid[i][0] is the currency name
        cid[i][1] is the total amount of cash in the drawer
        currency[currencyName] is the value of the currency

        Example:
        cid[0][0] = "PENNY"
        cid[0][1] = 1.01

        currency[currencyName] = currency["PENNY"] = 0.01

        cid[1][0] = "NICKEL"
        cid[1][1] = 2.05

        currency[currencyName] = currency["NICKEL"] = 0.05
    */
    let currencyName = cid[i][0];
    let currencyTotal = cid[i][1];
    let currencyValue = currency[currencyName];
    let currencyAmount = (currencyTotal / currencyValue).toFixed(2);
    let currencyToReturn = 0;

    // Loop through the currency amount and calculate the change due

    /* 
        Explanation
        currencyAmount is the total amount of the currency in the drawer
        currencyValue is the value of the currency
        
    */
    while (changeDue >= currencyValue && currencyAmount > 0) {
      currencyToReturn += currencyValue;
      changeDue -= currencyValue;
      currencyAmount--;
      changeDue = changeDue.toFixed(2);
    }

    if (currencyToReturn > 0) {
      change.change.push([currencyName, currencyToReturn]);
    }
  }

  // If the change due is greater than 0, return {status: "INSUFFICIENT_FUNDS", change: []}
  if (changeDue > 0) {
    change.status = "INSUFFICIENT_FUNDS";
    change.change = [];
    return change;
  }

  // If the change due is equal to 0, return {status: "OPEN", change: [...]}
  change.status = "OPEN";
  return change;
}

// Test Cases
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
); // should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

