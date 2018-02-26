module.exports = function makeExchange(currency) {
    var array = {};
    var a = currency;
    var b;
    if (currency >= 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if (currency >= 0) {
        b = a % 50;
        if ((a - b) > 0) {
            array.H = (a - b) / 50;
            a = a % 50;
        }
        b = a % 25;
        if ((a - b) > 0) {
            array.Q = (a - b) / 25;
            a = a % 25;
        }
        b = a % 10;
        if ((a - b) > 0) {
            array.D = (a - b) / 10;
            a = a % 10;
        }
        b = a % 5;
        if ((a - b) > 0) {
            array.N = (a - b) / 5;
            a = a % 5;
        }
        if (a > 0) {
            array.P = a;
        }
    }
    return array;
}


