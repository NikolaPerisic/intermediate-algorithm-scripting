/*
Here our assignment is to convert a number into roman numeral.
*/

function convertToRoman(num) {
    const romanObj = {
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
        10: "X",
        20: "XX",
        30: "XXX",
        40: "XL",
        50: "L",
        60: "LX",
        70: "LXX",
        80: "LXXX",
        90: "XC",
        100: "C",
        200: "CC",
        300: "CCC",
        400: "CD",
        500: "D",
        600: "DC",
        700: "DCC",
        800: "DCCC",
        900: "CM",
        1000: "M"
    };
    let str = "";
    let digit = num;
    let counter = 0;
    if (digit > 1000) {
        counter = (digit - (digit % 1000)) / 1000;
        while (counter > 0) {
            str += romanObj[1000];
            counter--;
        }
        digit = digit % 1000;
    }
    if (digit > 100) {
        counter = digit - (digit % 100);
        str += romanObj[counter];
        digit = digit % 100;
    }
    if (digit > 10) {
        counter = digit - (digit % 10);
        str += romanObj[counter];
        digit = digit % 10;
    }
    if (digit >= 1) {
        str += romanObj[digit];
    }
    return str;
}
console.log(convertToRoman(2019));