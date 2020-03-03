module.exports = function toReadable (number) {
var object = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen', 
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
}

if (number < 20) {
    return object[number];
}

var obj = {
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
}
var num = String(number).split('');
if (num.length === 2) {
    if (number % 10 == 0) {
        return obj[number];
    }
    if (num[0] == 2) {return 'twenty'+' '+object[num[1]];}
    if (num[0] == 3) {return 'thirty'+' '+object[num[1]];}
    if (num[0] == 4) {return 'forty'+' '+object[num[1]];}
    if (num[0] == 5) {return 'fifty'+' '+object[num[1]];}
    if (num[0] == 6) {return 'sixty'+' '+object[num[1]];}
    if (num[0] == 7) {return 'seventy'+' '+object[num[1]];}
    if (num[0] == 8) {return 'eighty'+' '+object[num[1]];}
    if (num[0] == 9) {return 'ninety'+' '+object[num[1]];}
}

if (num.length === 3) {
    if (number % 100 == 0) {return object[parseInt (num[0])]+' hundred';}
    if (number % 10 == 0) {
        if (num[1] == 2) {return object[parseInt (num[0])]+' hundred '+obj[20];}
        if (num[1] == 3) {return object[parseInt (num[0])]+' hundred '+obj[30];}
        if (num[1] == 4) {return object[parseInt (num[0])]+' hundred '+obj[40];}
        if (num[1] == 5) {return object[parseInt (num[0])]+' hundred '+obj[50];}
        if (num[1] == 6) {return object[parseInt (num[0])]+' hundred '+obj[60];}
        if (num[1] == 7) {return object[parseInt (num[0])]+' hundred '+obj[70];}
        if (num[1] == 8) {return object[parseInt (num[0])]+' hundred '+obj[80];}
        if (num[1] == 9) {return object[parseInt (num[0])]+' hundred '+obj[90];}
        }
    if (num[1] == 0) {return object[parseInt (num[0])]+' hundred '+object[num[2]];}
    if (num[1] == 1) {
        if (num[2] == 0) {return object[parseInt (num[0])]+' hundred '+object[10];}
        if (num[2] == 1) {return object[parseInt (num[0])]+' hundred '+object[11];}
        if (num[2] == 2) {return object[parseInt (num[0])]+' hundred '+object[12];}
        if (num[2] == 3) {return object[parseInt (num[0])]+' hundred '+object[13];}
        if (num[2] == 4) {return object[parseInt (num[0])]+' hundred '+object[14];}
        if (num[2] == 5) {return object[parseInt (num[0])]+' hundred '+object[15];}
        if (num[2] == 6) {return object[parseInt (num[0])]+' hundred '+object[16];}
        if (num[2] == 7) {return object[parseInt (num[0])]+' hundred '+object[17];}
        if (num[2] == 8) {return object[parseInt (num[0])]+' hundred '+object[18];}
        if (num[2] == 9) {return object[parseInt (num[0])]+' hundred '+object[19];}
    }
    if (num[1] == 2) {return object[parseInt (num[0])]+' hundred '+obj[20]+' '+object[num[2]];}
    if (num[1] == 3) {return object[parseInt (num[0])]+' hundred '+obj[30]+' '+object[num[2]];}
    if (num[1] == 4) {return object[parseInt (num[0])]+' hundred '+obj[40]+' '+object[num[2]];}
    if (num[1] == 5) {return object[parseInt (num[0])]+' hundred '+obj[50]+' '+object[num[2]];}
    if (num[1] == 6) {return object[parseInt (num[0])]+' hundred '+obj[60]+' '+object[num[2]];}
    if (num[1] == 7) {return object[parseInt (num[0])]+' hundred '+obj[70]+' '+object[num[2]];}
    if (num[1] == 8) {return object[parseInt (num[0])]+' hundred '+obj[80]+' '+object[num[2]];}
    if (num[1] == 9) {return object[parseInt (num[0])]+' hundred '+obj[90]+' '+object[num[2]];}

}
}