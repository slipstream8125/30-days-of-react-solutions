'use strict';

module.exports = function (n) {
    if (typeof n === 'number') {
        return (n < 10 ? '0' : '') + n.toFixed(0);
    } else {
        n = String(n);
        return n.length < 2 ? '0' + n : n;
    }
};
