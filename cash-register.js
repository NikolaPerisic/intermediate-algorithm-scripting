/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
The checkCashRegister() function should always return an object with a status key and a change key.
Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {
// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]
    let changeOwed = (cash - price) * 100;
    let output = {
        status: "OPEN",
        change: []
    };
    let cidArr = cid.map(function(item) {
        return Math.ceil(item[1] * 100);
    });
    if (changeOwed > 10000 && cidArr[8] >= 10000) {
        let hundreds = ["ONE HUNDRED", 0];
        while (cidArr[8] >= 10000 && changeOwed >= 10000) {
            changeOwed -= 10000;
            cidArr[8] -= 10000;
            hundreds[1] += 1000;
        }
        hundreds[1] /= 100;
        output["change"].push(hundreds);
    }
    if (changeOwed > 2000 && cidArr[7] >= 2000) {
        let twenty = ["TWENTY", 0];
        while (cidArr[7] >= 2000 && changeOwed >= 2000) {
            changeOwed -= 2000;
            cidArr[7] -= 2000;
            twenty[1] += 2000;
        }
        twenty[1] /= 100;
        output["change"].push(twenty);
    }
    if (changeOwed > 1000 && cidArr[6] >= 1000) {
        let ten = ["TEN", 0];
        while (cidArr[6] >= 1000 && changeOwed >= 1000) {
            changeOwed -= 1000;
            cidArr[6] -= 1000;
            ten[1] += 1000;
        }
        ten[1] /= 100;
        output["change"].push(ten);
    }
    if (changeOwed > 500 && cidArr[5] >= 500) {
        let five = ["FIVE", 0];
        while (cidArr[5] >= 500 && changeOwed >= 500) {
            changeOwed -= 500;
            cidArr[5] -= 500;
            five[1] += 500;
        }
        five[1] /= 100;
        output["change"].push(five);
    }
    if (changeOwed > 100 && cidArr[4] >= 100) {
        let one = ["ONE", 0];
        while (cidArr[4] >= 100 && changeOwed >= 100) {
            changeOwed -= 100;
            cidArr[4] -= 100;
            one[1] += 100;
        }
        one[1] /= 100;
        output["change"].push(one);
    }
    if (changeOwed > 25 && cidArr[3] >= 25) {
        let quarter = ["QUARTER", 0];
        while (cidArr[3] >= 25 && changeOwed >= 25) {
            changeOwed -= 25;
            cidArr[3] -= 25;
            quarter[1] += 25;
        }
        quarter[1] /= 100;
        output["change"].push(quarter);
    }
    if (changeOwed > 10 && cidArr[2] >= 10) {
        let dime = ["DIME", 0];
        while (cidArr[2] >= 10 && changeOwed >= 10) {
            changeOwed -= 10;
            cidArr[2] -= 10;
            dime[1] += 10;
        }
        dime[1] /= 100;
        output["change"].push(dime);
    }
    if (changeOwed > 5 && cidArr[1] >= 5) {
        let nickel = ["NICKEL", 0];
        while (cidArr[1] >= 5 && changeOwed >= 5) {
            changeOwed -= 5;
            cidArr[1] -= 5;
            nickel[1] += 5;
        }
        nickel[1] /= 100;
        output["change"].push(nickel);
    }
    if (changeOwed > 1 && cidArr[0] >= 1) {
        let penny = ["PENNY", 0];
        while (cidArr[0] >= 1 && changeOwed >= 1) {
            changeOwed -= 1;
            cidArr[0] -= 1;
            penny[1] += 1;
        }
        penny[1] /= 100;
        output["change"].push(penny);
    }
    if (changeOwed > 0) {
        output["status"] = "INSUFFICIENT_FUNDS";
        output["change"] = [];
        return output;
    }
    let remainingCash = cidArr.reduce((a, b) => a + b);
    if (remainingCash <= 0) {
        output["status"] = "CLOSED";
        cid.map(function(item) {
            if (output["change"][0].indexOf(item[0]) < 0) {
                output["change"].push(item);
            }
        })
    }

    return output;
}

console.log(checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]));