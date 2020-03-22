module.exports = function getSeason(date) {
    // throw 'Not implemented';
    // remove line with error and write your code here
    if (date === undefined) {
        return "Unable to determine the time of year!";
    }
    if (typeof date.getTime() === 'function') {
        throw new Error();
    }
    let month = date.getMonth();
    if (month > 7 && month < 11) {
        return 'autumn';
    }
    if (month > 4 && month < 8) {
        return 'summer';
    }
    if (month > 1 && month < 5) {
        return 'spring';
    } else {
        return 'winter';
    }

};